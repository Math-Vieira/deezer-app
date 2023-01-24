import { useEffect, useRef, useState } from 'react'
import H2Text from '../../components/H2Text'
import Input from '../../components/Input'
import useAxios from '../../hooks/useAxios'
import * as S from './style'
import * as F from './functions'
import TracksContainer from '../../components/TracksContainer'
import Head from '../../helper/components/Head'
import CardTrackInfo from '../../components/CardTrackInfo'
import { CurrentTrack } from './model'
import useMediaQuery from '../../hooks/useMediaQuery'
import { useTranslation } from 'react-i18next'

const Home = (): JSX.Element => {
  const [searchText, setSearchText] = useState<string>('')
  const [tracks, setTracks] = useState<any[]>([])
  const [currentTrack, setCurrentTrack] = useState<CurrentTrack | null>(null)
  const isMobile = useMediaQuery('(max-width: 980px)')
  const ulRef = useRef<HTMLUListElement>(null)
  const { t } = useTranslation()
  const axiosRequest = useAxios()
  let isInitial = true
  const infiniteScrollChart = (): void => {
    void F.getChartSongs(axiosRequest, ulRef, isInitial)
  }
  const infiniteScrollSearch = (): void => {
    void F.searchSong(axiosRequest, ulRef, isInitial, searchText)
  }

  // update tracks after every request
  useEffect(() => {
    if (axiosRequest.data) {
      setTracks((prev) => [...prev, ...axiosRequest.data.data])
    }
  }, [axiosRequest.data])

  // requests management
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
      F.setScrollEventListener(ulRef, infiniteScrollChart)
    } else {
      F.setScrollEventListener(ulRef, infiniteScrollSearch)
    }

    return () => {
      F.clearEventListener(
        ulRef,
        infiniteScrollChart,
        infiniteScrollSearch,
        setTracks
      )
      clearTimeout(timeOut)
      setCurrentTrack(null)
    }
  }, [searchText])

  return (
    <>
      <Head title={`Deezer App | ${t('Home:nav.home')}`} />
      <S.Container>
        <section className="centralizer">
          <S.SearchContainer>
            <H2Text>{t('Home:section.searchSongs')}</H2Text>
            <Input
              placeholder={t('Home:section.searchSongsPlaceHolder')}
              id="search-song"
              type="text"
              value={searchText}
              setValue={setSearchText}
            />
          </S.SearchContainer>
          <S.P>
            {searchText
              ? t('Home:section.searchResults')
              : t('Home:section.chartSongs')}
          </S.P>
          <S.Tracks>
            <TracksContainer
              ulRef={ulRef}
              tracksList={tracks}
              loading={axiosRequest.loading}
              error={axiosRequest.error}
              setCurrentTrackInfo={setCurrentTrack}
              searchText={searchText}
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

export default Home
