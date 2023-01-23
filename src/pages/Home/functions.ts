import { UseAxios } from '../../hooks/useAxios'

let wait = false
let pageNumber = 0

export const getChartSongs = async (
  { request }: UseAxios,
  ulRef: React.RefObject<HTMLUListElement>,
  isInitial: boolean
): Promise<void> => {
  if (isInitial) {
    await request({ url: '/chart/tracks/10/0', method: 'GET' })
    return
  }

  if (ulRef.current) {
    const ul = ulRef.current
    const scroll = ul.scrollTop
    const height = ul.scrollHeight - ul.clientHeight

    if (scroll > height * 0.9 && !wait) {
      wait = true
      pageNumber += 1
      await request({
        url: `/chart/tracks/10/${pageNumber * 10}`,
        method: 'GET'
      })
      setTimeout(() => {
        wait = false
      }, 500)
    }
  }
}

export const searchSong = async (
  { request }: UseAxios,
  ulRef: React.RefObject<HTMLUListElement>,
  isInitial: boolean,
  searchText: string
): Promise<void> => {
  if (isInitial) {
    await request({ url: `/search/${searchText}/tracks/10/0`, method: 'GET' })
    return
  }

  if (ulRef.current) {
    const ul = ulRef.current
    const scroll = ul.scrollTop
    const height = ul.scrollHeight - ul.clientHeight

    if (scroll > height * 0.9 && !wait) {
      wait = true
      pageNumber += 1
      console.log('entrei aqui 2')
      await request({
        url: `/search/${searchText}/tracks/10/${pageNumber * 10}`,
        method: 'GET'
      })
      setTimeout(() => {
        wait = false
      }, 500)
    }
  }
}

export const resetPageNumber = (): void => {
  pageNumber = 0
}
