import Deezer from '../../assets/svg-components/Deezer'
import Favorite from '../../assets/svg-components/Favorite'
import Play from '../../assets/svg-components/Play'
import { Props } from './model'
import * as S from './style'
import * as F from './functions'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import TrashCan from '../../assets/svg-components/TrashCan'
import Pause from '../../assets/svg-components/Pause'

const ActionButtons = ({
  link,
  fullTrackInfo,
  audioController,
  currentTrack,
  playing,
  setPlaying,
  setCurrentTrackInfo
}: Props): JSX.Element => {
  const { favoriteTracks, setFavoriteTracks } = useContext(GlobalContext)
  const [isFavorite, setIsFavorite] = useState<boolean>(false)
  const pauseCondition = playing && currentTrack === fullTrackInfo.preview
  const trackId = fullTrackInfo.id
  const togglePlayInfo = {
    currentTrack,
    previewTrack: fullTrackInfo.preview,
    playing,
    setPlaying,
    audioController,
    setCurrentTrackInfo,
    artist: fullTrackInfo.artist.name,
    title: fullTrackInfo.title,
    background: fullTrackInfo.album.cover_big
  }

  useEffect(() => {
    const findFavorite = favoriteTracks.filter((e) => e.id === fullTrackInfo.id)
    if (findFavorite.length) setIsFavorite(true)
  }, [])
  return (
    <S.Container>
      <S.ActionButton
        onClick={() => F.playToggle(togglePlayInfo)}
        title={pauseCondition ? 'Pausar a música' : 'Ouvir preview'}
      >
        {!pauseCondition && <Play />}
        {pauseCondition && <Pause />}
      </S.ActionButton>
      <S.ActionButton
        title={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
        onClick={() =>
          F.favoriteToggle({
            isFavorite,
            setIsFavorite,
            setFavoriteTracks,
            trackId,
            fullTrackInfo
          })
        }
      >
        {!isFavorite && <Favorite />}
        {isFavorite && <TrashCan />}
      </S.ActionButton>
      <S.ActionButton
        title="Ouvir completo"
        onClick={() => F.openTrackLink(link)}
      >
        <Deezer />
      </S.ActionButton>
    </S.Container>
  )
}

export default ActionButtons
