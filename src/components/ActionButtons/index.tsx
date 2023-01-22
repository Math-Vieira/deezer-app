import Deezer from '../../assets/svg-components/Deezer'
import Favorite from '../../assets/svg-components/Favorite'
import Play from '../../assets/svg-components/Play'
import { Props } from './model'
import * as S from './style'
import * as F from './functions'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import TrashCan from '../../assets/svg-components/TrashCan'

const ActionButtons = ({ link, fullTrackInfo }: Props): JSX.Element => {
  const { favoriteTracks, setFavoriteTracks } = useContext(GlobalContext)
  const [isFavorite, setIsFavorite] = useState<boolean>(false)
  const trackId = fullTrackInfo.id

  useEffect(() => {
    const findFavorite = favoriteTracks.filter((e) => e.id === fullTrackInfo.id)
    if (findFavorite.length) setIsFavorite(true)
  }, [])
  return (
    <S.Container>
      <S.ActionButton>
        <Play />
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
