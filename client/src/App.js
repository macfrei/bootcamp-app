import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import QuestionCard from './components/QuestionCard'
import QuestionForm from './components/QuestionForm'
import createCard from './services/createCard'
import deleteCard from './services/deleteCard'
import getCards from './services/getCards'

function App() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    getCards()
      .then(data => setCards([...data]))
      .catch(error => console.error('error---', error))
  }, [])

  return (
    <AppGrid>
      <QuestionPanel>
        {cards.map(card => (
          <QuestionCard
            key={card.id}
            question={card.question}
            author={card.author}
            isOpenQuestion={card.isOpenQuestion}
            onDelete={() => handleDelete(card.id)}
          />
        ))}
      </QuestionPanel>
      <QuestionForm onCreatQuestion={createQuestion} />
    </AppGrid>
  )

  function createQuestion(value) {
    const newCard = { question: value }
    createCard(newCard).then(data => setCards([...cards, data]))
  }

  function handleDelete(id) {
    deleteCard(id).then(() => {
      const updatedCards = cards.filter(card => card.id !== id)
      setCards(updatedCards)
    })
  }
}

export default App

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: auto 60px;
  padding: 20px;
  height: 100vh;
`

const QuestionPanel = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 20px;
  place-items: center;
`
