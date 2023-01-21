import styled from 'styled-components'

export const Svg = styled.svg`
  cursor: pointer;

  & path {
    fill: ${({ theme }) => theme.textColor.primaryColor};
    stroke: ${({ theme }) => theme.textColor.primaryColor};
  }
`
