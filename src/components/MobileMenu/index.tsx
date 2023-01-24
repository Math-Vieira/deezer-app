import * as S from './style'

const MobileMenu = ({
  mobileMenu,
  toggleMobile
}: {
  mobileMenu: boolean
  toggleMobile: () => void
}): JSX.Element => {
  return (
    <S.Container onClick={toggleMobile}>
      <div className={mobileMenu ? '' : 'change'}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </S.Container>
  )
}

export default MobileMenu
