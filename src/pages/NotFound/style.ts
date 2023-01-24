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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  & a {
    color: ${({ theme }) => theme.textColor.primaryColor};
  }
`
export const InnerContent = styled.h1`
  font-size: 30px;
  color: ${({ theme }) => theme.textColor.primaryColor};
`
