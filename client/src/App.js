import { useState } from 'react'
import styled from 'styled-components/macro'
import QuestionCard from './components/QuestionCard'
import cardData from './assets/cardData.json'

function App() {
  const [cards, setCards] = useState(cardData)

  return (
    <AppGrid>
      {cards.map((card, index) => (
        <QuestionCard
          key={card.id}
          question={card.question}
          author={card.author}
          isOpenQuestion={card.isOpenQuestion}
          votes={card.votes}
          onVote={() => handleVote(index)}
          onDelete={() => handleDelete(card.id)}
        />
      ))}
    </AppGrid>
  )

  function handleVote(index) {
    const card = cards[index]

    setCards([
      ...cards.slice(0, index),
      { ...card, votes: card.votes + 1 },
      ...cards.slice(index + 1),
    ])
  }

  function handleDelete(id) {
    const updatedCards = cards.filter(card => card.id !== id)
    setCards(updatedCards)
  }
}

export default App

const AppGrid = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`
