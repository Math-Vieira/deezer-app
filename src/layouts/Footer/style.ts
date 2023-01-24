import styled from 'styled-components'

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.secondaryColor};
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;
  color: ${({ theme }) => theme.textColor.primaryColor};
`
