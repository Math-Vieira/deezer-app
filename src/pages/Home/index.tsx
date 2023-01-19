import { useState } from 'react'
import H2Text from '../../components/H2Text'
import Input from '../../components/Input'
import * as S from './style'

const Home = (): JSX.Element => {
  const [searchText, setSearchText] = useState<string>('')

  return (
    <S.Container>
      <section className="centralizer">
        <S.SearchContainer>
          <H2Text>Pesquise por uma música</H2Text>
          <Input
            placeholder='Pesquise uma música...'
            id="search-song"
            type="text"
            value={searchText}
            setValue={setSearchText}
          />
        </S.SearchContainer>
      </section>
    </S.Container>
  )
}

export default Home
