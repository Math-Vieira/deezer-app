import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

export const Li = styled.li`
  background-color: ${({ theme }) => theme.secondaryColor};
  margin-right: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  width: auto;
  padding: 20px;
  animation: ${fadeIn} 1s linear reverse infinite;
`
