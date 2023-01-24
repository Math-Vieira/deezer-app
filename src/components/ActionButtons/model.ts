import { AudioController } from '../TracksContainer/model'
import { CurrentTrack } from '../../pages/Home/model'
export interface Props {
  link: string
  fullTrackInfo: any
  audioController: (object: AudioController) => void
  currentTrack: string
  playing: boolean
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>
  setCurrentTrackInfo: React.Dispatch<React.SetStateAction<CurrentTrack | null>>
}
