import styled from 'styled-components/macro'

export default function Error({ error }) {
  return <ErrorStyled>Oops, an error occurred: {error}</ErrorStyled>
}

const ErrorStyled = styled.div`
  position: absolute;
  padding: 8px;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: white;
  color: var(--orange-main);
  border-bottom: 1px solid var(--orange-main);
`
