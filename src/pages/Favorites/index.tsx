import { useContext, useEffect, useRef, useState } from 'react'
import H2Text from '../../components/H2Text'
import Input from '../../components/Input'
import * as S from './style'
import TracksContainer from '../../components/TracksContainer'
import Head from '../../helper/components/Head'
import CardTrackInfo from '../../components/CardTrackInfo'
import { CurrentTrack } from './model'
import { GlobalContext } from '../../context/GlobalContext'

const Favorites = (): JSX.Element => {
  const [searchText, setSearchText] = useState<string>('')
  const [currentTrack, setCurrentTrack] = useState<CurrentTrack | null>(null)
  const { favoriteTracks } = useContext(GlobalContext)
  const ulRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    setCurrentTrack(null)
  }, [favoriteTracks])

  useEffect(() => {}, [searchText])

  return (
    <>
      <Head title="Deezer App | Favoritos" />
      <S.Container>
        <section className="centralizer">
          <S.SearchContainer>
            <H2Text>Pesquise nos favoritos</H2Text>
            <Input
              placeholder="Pesquise uma música..."
              id="search-song"
              type="text"
              value={searchText}
              setValue={setSearchText}
            />
          </S.SearchContainer>
          <S.P>{searchText ? 'Resultados da pesquisa:' : 'Favoritos:'}</S.P>
          <S.Tracks>
            <TracksContainer
              ulRef={ulRef}
              tracksList={favoriteTracks}
              setCurrentTrackInfo={setCurrentTrack}
              searchText={searchText}
              favorites={true}
            />
            <CardTrackInfo
              title={currentTrack?.title}
              artist={currentTrack?.artist}
              background={currentTrack?.background}
            />
          </S.Tracks>
        </section>
      </S.Container>
    </>
  )
}

export default Favorites
