import { useEffect, useRef, useState } from 'react'
import H2Text from '../../components/H2Text'
import Input from '../../components/Input'
import useAxios from '../../hooks/useAxios'
import * as S from './style'
import * as F from './functions'
import TracksContainer from '../../components/TracksContainer'

const Home = (): JSX.Element => {
  const [searchText, setSearchText] = useState<string>('')
  const [tracks, setTracks] = useState<any[]>([])
  const ulRef = useRef<HTMLUListElement>(null)
  const axiosRequest = useAxios()
  let isInitial = true

  const infiniteScroll = (): void => {
    void F.getChartSongs(axiosRequest, ulRef, isInitial)
  }

  const infiniteScrollSearch = (): void => {
    void F.searchSong(axiosRequest, ulRef, isInitial, searchText)
  }

  useEffect(() => {
    if (axiosRequest.data) {
      setTracks((prev) => [...prev, ...axiosRequest.data.data])
    }
  }, [axiosRequest.data])

  useEffect(() => {
    if (isInitial && !searchText) {
      void F.getChartSongs(axiosRequest, ulRef, isInitial)
      isInitial = false
    }
    let timeOut: NodeJS.Timeout
    if (isInitial && searchText) {
      timeOut = setTimeout(() => {
        void F.searchSong(axiosRequest, ulRef, isInitial, searchText)
        isInitial = false
      }, 500)
    }

    if (!searchText) {
      ulRef.current?.addEventListener('wheel', infiniteScroll)
      ulRef.current?.addEventListener('scroll', infiniteScroll)
    } else {
      ulRef.current?.addEventListener('wheel', infiniteScrollSearch)
      ulRef.current?.addEventListener('scroll', infiniteScrollSearch)
    }

    return () => {
      ulRef.current?.removeEventListener('wheel', infiniteScroll)
      ulRef.current?.removeEventListener('scroll', infiniteScroll)
      ulRef.current?.removeEventListener('wheel', infiniteScrollSearch)
      ulRef.current?.removeEventListener('scroll', infiniteScrollSearch)
      setTracks([])
      F.resetPageNumber()
      clearTimeout(timeOut)
    }
  }, [searchText])

  return (
    <S.Container>
      <section className="centralizer">
        <S.SearchContainer>
          <H2Text>Pesquise por uma música</H2Text>
          <Input
            placeholder="Pesquise uma música..."
            id="search-song"
            type="text"
            value={searchText}
            setValue={setSearchText}
          />
        </S.SearchContainer>
        <S.P>
          {searchText ? 'Resultados da pesquisa:' : 'Músicas do momento:'}
        </S.P>
        <TracksContainer
          ulRef={ulRef}
          tracksList={tracks}
          loading={axiosRequest.loading}
          error={axiosRequest.error}
        />
      </section>
    </S.Container>
  )
}

export default Home
