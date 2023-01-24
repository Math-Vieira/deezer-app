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
import { useTranslation } from 'react-i18next'
import { useToggle } from '../../hooks/useToggle'

const Header = (): JSX.Element => {
  const { state: mobileMenu, toggle: toggleMenu } = useToggle(true)
  const [language, setLanguage] = useState<string>('en-US')
  const { toggleTheme, themeId } = useContext(GlobalContext)
  const isMobile = useMediaQuery('(max-width: 980px)')
  const { t, i18n } = useTranslation()

  const toggleLanguage = (): void => {
    if (language === 'en-US') {
      setLanguage('pt-BR')
    } else {
      setLanguage('en-US')
    }
  }

  useEffect(() => {
    void i18n.changeLanguage(language)
  }, [language])

  return (
    <>
      {isMobile && (
        <MobileMenu
          mobileMenu={mobileMenu}
          toggleMobile={toggleMenu}
        />
      )}

      <S.Header mobileMenu={mobileMenu && isMobile}>
        <S.HeaderContentContainer>
          <a href="/">
            <LogoSvg />
          </a>
          <S.Nav>
            <u>
              <li onClick={toggleMenu}>
                <NavLink className="link" to="/">
                  {t('Home:nav.home')}
                </NavLink>
              </li>
              <li onClick={toggleMenu}>
                <NavLink className="link" to="/favorites">
                  {t('Home:nav.favorites')}
                </NavLink>
              </li>
              <li onClick={toggleMenu}>
                <span onClick={toggleTheme}>
                  {themeId === 1 && <LightMode />}
                  {themeId === 2 && <DarkMode />}
                </span>
                <span onClick={toggleLanguage}>
                  <Language />
                </span>
              </li>
            </u>
          </S.Nav>
        </S.HeaderContentContainer>
      </S.Header>
    </>
  )
}

export default Header
