import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import QuestionCard from './QuestionCard'

const cardProps = {
  author: 'Dumbledore',
  question: 'Who makes me socks?',
  isAnswered: false,
}

describe('QuestionCard', () => {
  it('should render a card with props', () => {
    const { rerender } = render(<QuestionCard {...cardProps} />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Who makes me socks'
    )
    expect(screen.getByText(/dumbledore/i)).toBeInTheDocument()
    expect(screen.getByText('Open question')).toBeInTheDocument()
    rerender(<QuestionCard {...cardProps} isAnswered={true} />)
    expect(screen.getByText('Allready answered')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'delete' })).toBeInTheDocument()
  })

  it('should render "Anonymous" if there is no author given', () => {
    render(<QuestionCard {...cardProps} author={undefined} />)
    expect(screen.getByText(/anonymous/i)).toBeInTheDocument()
  })

  it('should call function onDelete on button click', () => {
    const callback = jest.fn()
    render(<QuestionCard {...cardProps} onDelete={callback} />)
    userEvent.click(screen.getByRole('button', { name: 'delete' }))
    expect(callback).toHaveBeenCalledTimes(1)
  })
})
