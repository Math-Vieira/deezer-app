import { AudioController } from '../TracksContainer/model'
import { CurrentTrack } from '../../pages/Home/model'

export interface Props {
  key: React.Key
  title: string
  artistName: string
  albumCover: string
  duration: number
  link: string
  fullTrackInfo: any
  audioController: (object: AudioController) => void
  currentTrack: string
  playing: boolean
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>
  setCurrentTrackInfo: React.Dispatch<React.SetStateAction<CurrentTrack | null>>
}
