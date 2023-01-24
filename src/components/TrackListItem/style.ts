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
`

export const ContentPart = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 5px;
`

export const TrackInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: -2px;
`

export const TrackTitle = styled.div`
  color: ${({ theme }) => theme.textColor.primaryColor};
  white-space: nowrap;
  overflow-x: hidden;
  max-width: 250px;
`

export const TrackArtist = styled.div`
  color: ${({ theme }) => theme.textColor.secondaryColor};
  margin-left: 4px;
  white-space: nowrap;
  overflow: hidden;
`

export const Duration = styled.div`
  color: ${({ theme }) => theme.textColor.primaryColor};
  position: absolute;
  right: 5px;
  top: 1px;
  font-size: 10px;
`
