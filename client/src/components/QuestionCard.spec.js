import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import QuestionCard from './QuestionCard'

const cardProps = {
  author: 'Dumbledore',
  question: 'Who makes me socks?',
  isOpenQuestion: true,
  votes: 0,
}

describe('QuestionCard', () => {
  it('should render a card with a question, an author and information if it has been answered or not', () => {
    const { rerender } = render(<QuestionCard {...cardProps} />)
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Who makes me socks'
    )
    expect(screen.getByText(/dumbledore/i)).toBeInTheDocument()
    expect(screen.getByText('Open question')).toBeInTheDocument()
    rerender(<QuestionCard {...cardProps} isOpenQuestion={false} />)
    expect(screen.getByText('Allready answered')).toBeInTheDocument()
  })

  it('should display "+" if votes are 0 or number of votes', () => {
    const { rerender } = render(<QuestionCard {...cardProps} votes={0} />)
    expect(screen.getByRole('button')).toHaveTextContent('+')
    rerender(<QuestionCard {...cardProps} votes={3} />)
    expect(screen.getByRole('button')).toHaveTextContent('3')
  })

  it('should call function onVote on button click', () => {
    const callback = jest.fn()
    const { rerender } = render(
      <QuestionCard {...cardProps} votes={5} onVote={callback} />
    )
    userEvent.click(screen.getByRole('button'))
    expect(callback).toHaveBeenCalledTimes(1)
    expect(screen.getByRole('button')).toHaveTextContent(5)
    rerender(<QuestionCard {...cardProps} votes={10} onVote={callback} />)
    expect(callback).toHaveBeenCalled()
    expect(screen.getByRole('button')).toHaveTextContent(10)
  })
})