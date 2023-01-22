import styled from 'styled-components'

export const Container = styled.div`
  padding: 5px;
  display: flex;
  gap: 15px;
`

export const ActionButton = styled.button`
    background-color: ${({ theme }) => theme.tertiaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border-radius: 5px;
    height: 30px;
    width: 30px;
    outline: none;
    border: none;
    cursor: pointer;
`
