import React from 'react'
import { NavLink } from 'react-router-dom'
import LightMode from '../../assets/svg-components/LightMode'
import LogoSvg from '../../assets/svg-components/Logo'
import * as S from './style'

const Header = (): JSX.Element => {
  return (
    <S.Header>
      <S.HeaderContentContainer>
        <a href="/">
          <LogoSvg />
        </a>
        <S.Nav>
          <u>
            <li>
              <NavLink className="link" to="/">
                Início
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/favorites">
                Favoritos
              </NavLink>
            </li>
            <li>
              <LightMode />
            </li>
          </u>
        </S.Nav>
      </S.HeaderContentContainer>
    </S.Header>
  )
}

export default Header
