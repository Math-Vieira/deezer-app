import * as S from './style'

const NotFound = (): JSX.Element => {
  return (
    <S.Container>
      <S.InnerContent>Página não encontrada</S.InnerContent>
      <a href="/">Clique aqui para retornar ao início</a>
    </S.Container>
  )
}

export default NotFound
