export const filterTracks = (track: any, searchText: string): boolean => {
  const firstCondition = track.title
    .toLowerCase()
    .includes(searchText.toLowerCase())
  const secondCondition = track.artist.name
    .toLowerCase()
    .includes(searchText.toLowerCase())
  const thirdCondition = track.album.title
    .toLowerCase()
    .includes(searchText.toLowerCase())
  return firstCondition || secondCondition || thirdCondition
}
