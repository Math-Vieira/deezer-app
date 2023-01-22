interface ChangeFavoriteState {
  isFavorite: boolean
  setIsFavorite: React.Dispatch<React.SetStateAction<boolean>>
  setFavoriteTracks: React.Dispatch<React.SetStateAction<any[]>> | undefined
  trackId: number
  fullTrackInfo: any
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
