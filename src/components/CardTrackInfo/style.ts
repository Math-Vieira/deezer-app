import styled from 'styled-components'

export const Container = styled.div`
  width: 45%;
  height: 480px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const CardInfo = styled.div<{ background?: string }>`
  background: ${({ theme, background }) => {
    return background ? `url(${background})` : theme.secondaryColor
  }};
  background-size: cover;
  width: 400px;
  height: 400px;
`

export const TextContainer = styled.div<{ justify: string }>`
  width: 400px;
  display: flex;
  justify-content: ${({ justify }) => justify};
  font-size: 20px;
  color: ${({ theme }) => theme.textColor.primaryColor};
`
