import styled from 'styled-components'

export const Container = styled.div`
  width: 50px;
  height: 50px;
  background-color: red;
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 3;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.tertiaryColor};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  .bar1,
  .bar2,
  .bar3 {
    width: 35px;
    height: 5px;
    background-color: ${({ theme }) => theme.textColor.tertiaryColor};
    margin: 6px 0;
    transition: 0.4s;
    border-radius: 2px;
  }
  .change .bar1 {
    transform: translate(0, 11px) rotate(-45deg);
  }
  .change .bar2 {
    opacity: 0;
  }
  .change .bar3 {
    transform: translate(0, -11px) rotate(45deg);
  }
  z-index: 7;
`
