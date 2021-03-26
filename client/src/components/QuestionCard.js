import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Icon from 'supercons'

QuestionCard.propTypes = {
  question: PropTypes.string,
  author: PropTypes.string,
  isOpenQuestion: PropTypes.bool,
  onDelete: PropTypes.func,
}

export default function QuestionCard({
  question,
  author,
  isOpenQuestion,
  onDelete,
}) {
  return (
    <Card>
      <Wrapper>
        <span>{author || 'Anonymous'}</span>
        <span>{isOpenQuestion ? 'Open question' : 'Allready answered'}</span>
      </Wrapper>
      <h2>{question}</h2>
      <Wrapper>
        <Icon glyph="delete" onClick={onDelete} role="button" size={24} />
      </Wrapper>
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

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
