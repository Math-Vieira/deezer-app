import * as S from './style'
import * as F from './functions'
import { Props, AudioController } from './model'
import TrackListItem from '../TrackListItem'
import { useEffect, useRef, useState } from 'react'
import LoadingTrackListItem from '../LoadingTrackListItem'

const TracksContainer = ({
  tracksList,
  loading,
  error,
  ulRef,
  setCurrentTrackInfo
}: Props): JSX.Element => {
  const [currentTrack, setCurrentTrack] = useState<string>('')
  const [playing, setPlaying] = useState<boolean>(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const audioController = ({
    previewTrack,
    command
  }: AudioController): void => {
    F.controller({
      command,
      previewTrack,
      currentTrack,
      setCurrentTrack,
      audioRef
    })
  }

  useEffect(() => {
    if (currentTrack && audioRef.current) {
      audioRef.current.currentTime = 0
      void audioRef.current.play()
    }
  }, [currentTrack])

  return (
    <>
      <audio
        ref={audioRef}
        src={currentTrack}
        onEnded={() => setPlaying(false)}
      />
      <S.Ul ref={ulRef}>
        {tracksList.map((e) => (
          <TrackListItem
            key={e.id}
            title={e.title}
            artistName={e.artist.name}
            albumCover={e.album.cover_medium}
            duration={e.duration}
            link={e.link}
            fullTrackInfo={e}
            audioController={audioController}
            currentTrack={currentTrack}
            playing={playing}
            setPlaying={setPlaying}
            setCurrentTrackInfo={setCurrentTrackInfo}
          />
        ))}
        {loading && <LoadingTrackListItem />}
      </S.Ul>
    </>
  )
}

export default TracksContainer
