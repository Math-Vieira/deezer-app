import { AudioController } from '../TracksContainer/model'
import { CurrentTrack } from '../../pages/Home/model'

interface ChangeFavoriteState {
  isFavorite: boolean
  setIsFavorite: React.Dispatch<React.SetStateAction<boolean>>
  setFavoriteTracks: React.Dispatch<React.SetStateAction<any[]>> | undefined
  trackId: number
  fullTrackInfo: any
}

interface PlayToggle {
  currentTrack: string
  previewTrack: any
  playing: boolean
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>
  audioController: (object: AudioController) => void
  setCurrentTrackInfo: React.Dispatch<React.SetStateAction<CurrentTrack | null>>
  artist: string
  title: string
  background: string
}

export const openTrackLink = (url: string): void => {
  window.open(url, '_blank')
}

export const favoriteToggle = ({
  isFavorite,
  setIsFavorite,
  trackId,
  setFavoriteTracks,
  fullTrackInfo
}: ChangeFavoriteState): void => {
  if (isFavorite && setFavoriteTracks) {
    setFavoriteTracks((prev) => prev.filter((e) => e.id !== trackId))
    setIsFavorite(false)
    return
  }

  if (!isFavorite && setFavoriteTracks) {
    setFavoriteTracks((prev) => [...prev, fullTrackInfo])
    setIsFavorite(true)
  }
}

export const playToggle = ({
  currentTrack,
  previewTrack,
  playing,
  setPlaying,
  audioController,
  setCurrentTrackInfo,
  artist,
  background,
  title
}: PlayToggle): void => {
  if (currentTrack === previewTrack && !playing) {
    audioController({ previewTrack, command: 'PLAY' })
    setPlaying(true)
    return
  }

  if (currentTrack === previewTrack && playing) {
    audioController({ previewTrack, command: 'PAUSE' })
    setPlaying(false)
    return
  }

  if (currentTrack !== previewTrack && !playing) {
    audioController({ previewTrack, command: 'PLAY' })
    setCurrentTrackInfo({ artist, background, title })
    setPlaying(true)
    return
  }

  if (currentTrack !== previewTrack && playing) {
    audioController({ previewTrack, command: 'PLAY' })
    setCurrentTrackInfo({ artist, background, title })
    setPlaying(true)
  }
}
