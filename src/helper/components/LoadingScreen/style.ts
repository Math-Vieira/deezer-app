import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const Container = styled.div`
  background-color: ${({ theme }) => theme.mainColor};
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 2;
`
export const InnerContent = styled.div`
  background-color: ${({ theme }) => theme.secondaryColor};
  animation: ${fadeIn} 0.2s linear alternate infinite;
  width: 100%;
  height: 100%;
`
