import React from 'react'
import H2 from '../../assets/svg-components/H2'
import * as S from './style'

const index = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <S.H2>
      <H2 /> {children}
    </S.H2>
  )
}

export default index
