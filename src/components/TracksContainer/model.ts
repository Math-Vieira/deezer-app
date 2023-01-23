export interface Props {
  tracksList: any[]
  loading: boolean | null
  error: any
}

export interface AudioController {
  previewTrack: string
  command: 'PLAY' | 'PAUSE'
}
