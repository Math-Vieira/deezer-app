import { useEffect, useState } from 'react'
import * as S from './style'
import { Props } from './model'
import ActionButtons from '../ActionButtons'
import useMediaQuery from '../../hooks/useMediaQuery'

const TrackListItem = ({
  title,
  artistName,
  albumCover,
  duration,
  link,
  fullTrackInfo,
  currentTrack,
  audioController,
  playing,
  setPlaying,
  setCurrentTrackInfo
}: Props): JSX.Element => {
  const [formattedDuration, setFormattedDuration] = useState<string>('')
  const isMobile = useMediaQuery('(max-width: 980px)')

  useEffect(() => {
    const minutes = Math.floor(duration / 60)
    const seconds = duration % 60 === 0 ? '00' : (duration % 60).toString()
    const formattedSeconds = seconds.length === 1 ? '0' + seconds : seconds
    setFormattedDuration(`${minutes}:${formattedSeconds}`)
  }, [])

  return (
    <S.Li className="animeLeft">
      <S.ContentPart>
        <img src={albumCover} alt="album cover" />
        <S.TrackInfo>
          <S.TrackTitle>
            <div className={title.length >= 26 && !isMobile ? 'animated-text' : ''}>
              {title}
            </div>
          </S.TrackTitle>
          <S.TrackArtist>
            <div className={artistName.length >= 26 && !isMobile ? 'animated-text' : ''}>
              {artistName}
            </div>
          </S.TrackArtist>
        </S.TrackInfo>
      </S.ContentPart>
      <S.ContentPart>
        <ActionButtons
          audioController={audioController}
          currentTrack={currentTrack}
          fullTrackInfo={fullTrackInfo}
          link={link}
          playing={playing}
          setPlaying={setPlaying}
          setCurrentTrackInfo={setCurrentTrackInfo}
        />
      </S.ContentPart>
      <S.Duration>{formattedDuration}</S.Duration>
    </S.Li>
  )
}

export default TrackListItem
