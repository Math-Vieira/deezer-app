import { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import LightMode from '../../assets/svg-components/LightMode'
import LogoSvg from '../../assets/svg-components/Logo'
import * as S from './style'
import Language from '../../assets/svg-components/Language'
import useMediaQuery from '../../hooks/useMediaQuery'
import MobileMenu from '../../components/MobileMenu'
import { GlobalContext } from '../../context/GlobalContext'
import DarkMode from '../../assets/svg-components/DarkMode'

const Header = (): JSX.Element => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(true)
  const { toggleTheme, themeId } = useContext(GlobalContext)
  const isMobile = useMediaQuery('(max-width: 980px)')
  const toggleMobile = (): void => {
    setMobileMenu((prev) => !prev)
  }
  useEffect(() => {
    setMobileMenu(isMobile)
  }, [isMobile])

  return (
    <>
      {isMobile && (
        <MobileMenu mobileMenu={mobileMenu} toggleMobile={toggleMobile} />
      )}

      <S.Header mobileMenu={mobileMenu && isMobile}>
        <S.HeaderContentContainer>
          <a href="/">
            <LogoSvg />
          </a>
          <S.Nav>
            <u>
              <li onClick={toggleMobile}>
                <NavLink className="link" to="/">
                  Início
                </NavLink>
              </li>
              <li onClick={toggleMobile}>
                <NavLink className="link" to="/favorites">
                  Favoritos
                </NavLink>
              </li>
              <li onClick={toggleMobile}>
                <span onClick={toggleTheme}>
                  {themeId === 1 && <LightMode />}
                  {themeId === 2 && <DarkMode />}
                </span>
                <Language />
              </li>
            </u>
          </S.Nav>
        </S.HeaderContentContainer>
      </S.Header>
    </>
  )
}

export default Header
