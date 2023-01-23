interface ControllerArgs {
  command: 'PLAY' | 'PAUSE'
  currentTrack: string
  previewTrack: string
  setCurrentTrack: React.Dispatch<React.SetStateAction<string>>
  audioRef: React.RefObject<HTMLAudioElement>
}

export const controller = ({
  command,
  currentTrack,
  previewTrack,
  setCurrentTrack,
  audioRef
}: ControllerArgs): void => {
  if (command === 'PLAY' && currentTrack === previewTrack) {
    void audioRef.current?.play()
    return
  }

  if (command === 'PAUSE' && currentTrack === previewTrack) {
    void audioRef.current?.pause()
    return
  }

  if (command === 'PLAY' && currentTrack !== previewTrack) {
    setCurrentTrack(previewTrack)
  }
}
