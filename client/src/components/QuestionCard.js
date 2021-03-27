import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Icon from 'supercons'

QuestionCard.propTypes = {
  question: PropTypes.string,
  author: PropTypes.string,
  isAnswered: PropTypes.bool,
  onDelete: PropTypes.func,
}

export default function QuestionCard({
  question,
  author,
  isAnswered,
  onDelete,
}) {
  return (
    <Card>
      <Header>
        <span>{author || 'Anonymous'}</span>
        <span>{isAnswered ? 'Allready answered' : 'Open question'}</span>
      </Header>
      <h2>{question}</h2>
      <Icon glyph="delete" onClick={onDelete} role="button" size={24} />
    </Card>
  )
}

const Card = styled.section`
  max-width: max-content;
  box-shadow: var(--shadow-blue);
  border-radius: 4px;
  padding: 8px;
  min-width: 350px;

  svg:hover {
    color: var(--orange-main);
  }

  h2 {
    font-weight: normal;
  }

  span {
    color: var(--blue-75);
    font-weight: lighter;
  }
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
