import styled from 'styled-components'

export const Li = styled.li`
  position: relative;
  background-color: ${({ theme }) => theme.secondaryColor};
  margin-right: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  width: auto;
  padding: 10px;
  & div img {
    height: 40px;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 770px) {
    flex-direction: column;
  }
`

export const ContentPart = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 5px;
  @media (max-width: 770px) {
    flex-direction: column;
  }
`

export const TrackInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: -2px;
  @media (max-width: 770px) {
    align-items: center;
  }
`

export const TrackTitle = styled.div`
  color: ${({ theme }) => theme.textColor.primaryColor};
  white-space: nowrap;
  overflow-x: hidden;
  max-width: 200px;
  @media (max-width: 980px) {
    max-width: 100%;
    white-space: normal;
  }
  @media (max-width: 770px) {
    text-align: center;
  }
`

export const TrackArtist = styled.div`
  color: ${({ theme }) => theme.textColor.secondaryColor};
  margin-left: 4px;
  white-space: nowrap;
  overflow: hidden;
  max-width: 200px;
  @media (max-width: 980px) {
    max-width: 100%;
    white-space: normal;
  }
  @media (max-width: 770px) {
    margin-left: 0;
    text-align: center;
  }
`

export const Duration = styled.div`
  color: ${({ theme }) => theme.textColor.primaryColor};
  position: absolute;
  right: 5px;
  top: 1px;
  font-size: 10px;
`
