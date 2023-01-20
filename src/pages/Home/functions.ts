import { UseAxios } from '../../hooks/useAxios'

export const getChartSongs = async (
  { request }: UseAxios,
  pageNumber: number
): Promise<void> => {
  await request({ url: `/chart/tracks/10/${pageNumber * 10}`, method: 'GET' })
}

export const searchSong = async (
  { request }: UseAxios,
  pageNumber: number,
  searchText: string
): Promise<void> => {
  await request({
    url: `/search/${searchText}/tracks/10/${pageNumber * 10}`,
    method: 'GET'
  })
}
