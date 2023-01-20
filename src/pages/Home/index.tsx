import { useEffect, useState } from 'react'
import H2Text from '../../components/H2Text'
import Input from '../../components/Input'
import useAxios from '../../hooks/useAxios'
import * as S from './style'
import * as F from './functions'
import TracksContainer from '../../components/TracksContainer'

const Home = (): JSX.Element => {
  const [searchText, setSearchText] = useState<string>('')
  const [chartPage, setCharPage] = useState<number>(0)
  const [searchPage, setSearchCharPage] = useState<number>(0)
  const [isInitial, setIsInitial] = useState<boolean>(true)
  const [tracks, setTracks] = useState<any[]>([])
  const axiosRequest = useAxios()

  useEffect(() => {
    if (axiosRequest.data) {
      setTracks((prev) => [...prev, ...axiosRequest.data.data])
    }
  }, [axiosRequest.data])

  useEffect(() => {
    if (isInitial) return setIsInitial(false)
    if (!searchText) {
      void F.getChartSongs(axiosRequest, chartPage)
      setCharPage((prev) => prev + 1)
      setSearchCharPage(0)
    }
  }, [isInitial, searchText])

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
          tracksList={tracks}
          loading={axiosRequest.loading}
          error={axiosRequest.error}
        />
      </section>
    </S.Container>
  )
}

export default Home
