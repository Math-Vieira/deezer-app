import styled from 'styled-components'

export const Container = styled.main`
  background-color: ${({ theme }) => theme.mainColor};
  min-height: 100vh;
  padding-top: 10rem;
`

export const SearchContainer = styled.div`
  width: fit-content;
`
