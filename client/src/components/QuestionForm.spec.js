import QuestionForm from './QuestionForm'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('QuestionForm', () => {
  it('should render a form with an input field and a submit button', () => {
    const createQuestionCallback = jest.fn()
    render(<QuestionForm onCreateQuestion={createQuestionCallback} />)
    expect(screen.getByLabelText(/question/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'submit' })).toBeInTheDocument()
  })
  it('should call function onCreateQuestion with form data', () => {
    const createQuestionCallback = jest.fn()
    render(<QuestionForm onCreateQuestion={createQuestionCallback} />)
    userEvent.type(screen.getByLabelText(/question/i), 'What is HTML?')
    userEvent.click(screen.getByRole('button', { name: 'submit' }))
    expect(createQuestionCallback).toHaveBeenCalledWith('What is HTML?')
  })
})
