import styled from 'styled-components'

export const Container = styled.main`
  background-color: ${({ theme }) => theme.mainColor};
  min-height: 100vh;
  padding-top: 10rem;
  padding-bottom: 2rem;
`

export const SearchContainer = styled.div`
  width: fit-content;
`

export const P = styled.p`
  margin-top: 10px;
  color: ${({ theme }) => theme.textColor.secondaryColor};
`

export const Tracks = styled.div`
  display: flex;
  justify-content: space-between;
`
