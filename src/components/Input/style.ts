import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin-top: 5px;
`

export const Label = styled.label`
  display: block;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.textColor.primaryColor};
`

export const Input = styled.input`
  width: 100%;
  padding: 5px;
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.secondaryColor};
  caret-color: ${({ theme }) => theme.textColor.primaryColor};
  color: ${({ theme }) => theme.textColor.primaryColor};
  font-size: 15px;

  &:focus {
    border: solid 1px ${({ theme }) => theme.textColor.primaryColor};
  }
`
