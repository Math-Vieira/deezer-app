import React from 'react'
import { AudioController } from '../TracksContainer/model'

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
}
