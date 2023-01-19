import * as S from './style'
import { Props } from './model'

const Input = ({
  placeholder,
  id,
  label,
  type,
  value,
  setValue
}: Props): JSX.Element => {
  return (
    <S.Container>
      {label && <S.Label htmlFor={id}>{label}</S.Label>}
      <S.Input
        placeholder={placeholder}
        id={id}
        type={type}
        value={value}
        onChange={({ target }) => {
          setValue(target.value)
        }}
      />
    </S.Container>
  )
}

export default Input
