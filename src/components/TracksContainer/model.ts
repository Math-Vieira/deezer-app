export interface Props {
  tracksList: any[]
  loading?: boolean | null
  error?: any
  ulRef?: React.RefObject<HTMLUListElement>
}

export interface AudioController {
  previewTrack: string
  command: 'PLAY' | 'PAUSE'
}
