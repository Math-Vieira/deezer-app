import { AudioController } from '../TracksContainer/model'

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
  audioController
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
    setPlaying(true)
    return
  }

  if (currentTrack !== previewTrack && playing) {
    audioController({ previewTrack, command: 'PLAY' })
    setPlaying(true)
  }
}
