import { AudioController } from '../TracksContainer/model'
export interface Props {
  link: string
  fullTrackInfo: any
  audioController: (object: AudioController) => void
  currentTrack: string
  playing: boolean
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>
}
