import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import QuestionCard from './components/QuestionCard'
import getCards from './services/getCards'

function App() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    getCards()
      .then(data => setCards([...data]))
      .catch(error => console.error('error---', error))
  }, [cards])

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
