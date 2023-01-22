import styled from 'styled-components'

export const Svg = styled.svg`
  & rect {
    fill: ${({ theme }) => theme.textColor.primaryColor};
  }
`
