import React from 'react'
import H2 from '../../assets/svg-components/H2'
import * as S from './style'
import { Props } from './model'

const H2Text = ({ children }: Props): JSX.Element => {
  return (
    <S.H2>
      <H2 /> <span>{children}</span>
    </S.H2>
  )
}

export default H2Text
