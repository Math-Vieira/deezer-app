import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.headerBackground};
  backdrop-filter: blur(3px);
  color: red;
  position: fixed;
  top: 0;
  padding: 1rem 0;
  width: 100vw;
  display: flex;
  align-items: center;
  box-shadow: ${({ theme }) => theme.headerBoxShadow};
`
