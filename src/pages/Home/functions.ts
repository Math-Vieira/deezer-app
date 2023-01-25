import { UseAxios } from '../../hooks/useAxios'
import { API_SEARCH, API_CHART } from '../../api/home'

let wait = false
let pageNumber = 0
let maxRequest = false

export const getChartSongs = async (
  { request }: UseAxios,
  ulRef: React.RefObject<HTMLUListElement>,
  isInitial: boolean
): Promise<void> => {
  if (isInitial) {
    await request(API_CHART(0))
    return
  }

  if (ulRef.current) {
    const ul = ulRef.current
    const scroll = ul.scrollTop
    const height = ul.scrollHeight - ul.clientHeight

    if (scroll > height * 0.99 && !wait && !maxRequest) {
      wait = true
      pageNumber += 1
      const { data: dataRequest } = await request(API_CHART(pageNumber * 10))
      if (dataRequest.data?.length === 0) maxRequest = true
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
    await request(API_SEARCH(searchText, 0))
    return
  }

  if (ulRef.current) {
    const ul = ulRef.current
    const scroll = ul.scrollTop
    const height = ul.scrollHeight - ul.clientHeight

    if (scroll > height * 0.99 && !wait && !maxRequest) {
      wait = true
      pageNumber += 1
      const { data: dataRequest } = await request(
        API_SEARCH(searchText, pageNumber * 10)
      )
      if (dataRequest.data?.length === 0) maxRequest = true
      setTimeout(() => {
        wait = false
      }, 500)
    }
  }
}

export const setScrollEventListener = (
  ulRef: React.RefObject<HTMLUListElement>,
  infiniteScrollFunction: () => void
): void => {
  ulRef.current?.addEventListener('wheel', infiniteScrollFunction)
  ulRef.current?.addEventListener('scroll', infiniteScrollFunction)
}

export const clearEventListener = (
  ulRef: React.RefObject<HTMLUListElement>,
  infiniteScrollFunctionChart: () => void,
  infiniteScrollFunctionSearch: () => void,
  setTracks: React.Dispatch<React.SetStateAction<any[]>>
): void => {
  ulRef.current?.removeEventListener('wheel', infiniteScrollFunctionChart)
  ulRef.current?.removeEventListener('scroll', infiniteScrollFunctionChart)
  ulRef.current?.removeEventListener('wheel', infiniteScrollFunctionSearch)
  ulRef.current?.removeEventListener('scroll', infiniteScrollFunctionSearch)
  setTracks([])
  pageNumber = 0
  maxRequest = false
}
