import styled from 'styled-components'

export const Ul = styled.ul`
  list-style: none;
  max-height: 30rem;
  overflow-y: scroll;
  width: 45%;
  @media (max-width: 980px) {
    width: 100%;
  }
`
export const NotFoundMessage = styled.li`
  font-size: 25px;
  color: ${({ theme }) => theme.textColor.primaryColor};
`
