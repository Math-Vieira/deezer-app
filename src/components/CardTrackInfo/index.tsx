import * as S from './style'
import { Props } from './model'

const CardTrackInfo = ({ background, title, artist }: Props): JSX.Element => {
  return (
    <S.Container>
      <S.TextContainer justify="start">
        {title ? title.toUpperCase() : '...'}
      </S.TextContainer>
      <S.CardInfo background={background} />
      <S.TextContainer justify="end">
        {artist ? artist.toUpperCase() : '...'}
      </S.TextContainer>
    </S.Container>
  )
}

export default CardTrackInfo
