import { useContext, useEffect, useRef, useState } from 'react'
import H2Text from '../../components/H2Text'
import Input from '../../components/Input'
import * as S from './style'
import * as F from './functions'
import TracksContainer from '../../components/TracksContainer'
import Head from '../../helper/components/Head'
import CardTrackInfo from '../../components/CardTrackInfo'
import { CurrentTrack } from './model'
import { GlobalContext } from '../../context/GlobalContext'
import useMediaQuery from '../../hooks/useMediaQuery'
import { useTranslation } from 'react-i18next'

const Favorites = (): JSX.Element => {
  const [searchText, setSearchText] = useState<string>('')
  const [currentTrack, setCurrentTrack] = useState<CurrentTrack | null>(null)
  const { favoriteTracks } = useContext(GlobalContext)
  const [tracks, setTracks] = useState<any[] | null>(null)
  const ulRef = useRef<HTMLUListElement>(null)
  const { t } = useTranslation()
  const isMobile = useMediaQuery('(max-width: 980px)')

  useEffect(() => {
    setCurrentTrack(null)
  }, [favoriteTracks])

  useEffect(() => {
    if (!searchText) {
      setTracks(null)
    } else {
      const filteredTracks = favoriteTracks.filter((e) => {
        return F.filterTracks(e, searchText)
      })
      setTracks(filteredTracks)
    }
  }, [searchText])

  return (
    <>
      <Head title={`Deezer App | ${t('Home:nav.favorites')}`} />
      <S.Container>
        <section className="centralizer">
          <S.SearchContainer>
            <H2Text>{t('Favorites:section.searchSongs')}</H2Text>
            <Input
              placeholder={t('Favorites:section.searchSongsPlaceHolder')}
              id="search-song"
              type="text"
              value={searchText}
              setValue={setSearchText}
            />
          </S.SearchContainer>
          <S.P>
            {searchText
              ? t('Favorites:section.searchResults')
              : t('Favorites:section.favorites')}
          </S.P>
          <S.Tracks>
            <TracksContainer
              ulRef={ulRef}
              tracksList={tracks ?? favoriteTracks}
              setCurrentTrackInfo={setCurrentTrack}
              searchText={searchText}
              favorites={true}
            />
            {!isMobile && (
              <CardTrackInfo
                title={currentTrack?.title}
                artist={currentTrack?.artist}
                background={currentTrack?.background}
              />
            )}
          </S.Tracks>
        </section>
      </S.Container>
    </>
  )
}

export default Favorites
