import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { useState } from 'react'
import Button from './Button'

QuestionForm.propTypes = {
  onCreatQuestion: PropTypes.func.isRequired,
}

export default function QuestionForm({ onCreatQuestion }) {
  const [inputValue, setInputValue] = useState('')
  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Your Question:
        <input
          placeholder="Your question"
          value={inputValue}
          name="question"
          onChange={event => setInputValue(event.target.value)}
        />
      </label>
      <Button aria-label="submit">Submit</Button>
    </Form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    onCreatQuestion(inputValue)
    setInputValue('')
  }
}

const Form = styled.form`
  display: flex;
  width: 100%;
  align-items: end;

  label {
    display: grid;
    flex: 1 0 max-content;
  }

  input {
    border: 1px solid var(--blue-50);
  }
`
