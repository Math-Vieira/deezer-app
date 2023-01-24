import { CurrentTrack } from '../../pages/Home/model'
export interface Props {
  tracksList: any[]
  loading?: boolean | null
  error?: any
  ulRef?: React.RefObject<HTMLUListElement>
  setCurrentTrackInfo: React.Dispatch<React.SetStateAction<CurrentTrack | null>>
  searchText: string
}

export interface AudioController {
  previewTrack: string
  command: 'PLAY' | 'PAUSE'
}
