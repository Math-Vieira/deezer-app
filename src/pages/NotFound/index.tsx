import * as S from './style'

const NotFound = (): JSX.Element => {
  return (
    <S.Container>
      <S.InnerContent>Not Found</S.InnerContent>
      <a href="/">Click Here</a>
    </S.Container>
  )
}

export default NotFound
