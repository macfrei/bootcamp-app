import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import Error from './components/Error'
import QuestionCard from './components/QuestionCard'
import QuestionForm from './components/QuestionForm'
import createCard from './services/createCard'
import deleteCard from './services/deleteCard'
import getCards from './services/getCards'

function App() {
  const [cards, setCards] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    getCards()
      .then(data => setCards([...data]))
      .catch(setError)
  }, [])

  return (
    <>
      {error && <Error error={error} />}
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
        <QuestionForm onCreateQuestion={createQuestion} />
      </AppGrid>
    </>
  )

  function createQuestion(value) {
    const newCard = { question: value }
    createCard(newCard)
      .then(() => getCards().then(data => setCards([...data])))
      .catch(setError)
  }

  function handleDelete(id) {
    deleteCard(id)
      .then(() => getCards().then(data => setCards([...data])))
      .catch(setError)
  }
}

export default App

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: auto 60px;
  padding: 20px;
  height: 100vh;
`

const QuestionPanel = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 20px;
  place-items: center;
`
