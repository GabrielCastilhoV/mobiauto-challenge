// contexts
import { useFipe } from 'contexts'

// styles
import * as S from './styles'

const ResultView = () => {
  const { fipeValue } = useFipe()

  console.log(fipeValue)

  return (
    <S.Wrapper>
      <S.Content>
        <S.Description>
          Tabela Fipe: Preço {fipeValue.Marca} {fipeValue.Modelo}{' '}
          {fipeValue.AnoModelo}
        </S.Description>

        <S.PriceWrapper>
          <S.Price>{fipeValue.Valor}</S.Price>
        </S.PriceWrapper>

        <S.Info>Este é o preço de compra do veículo</S.Info>
      </S.Content>
    </S.Wrapper>
  )
}

export { ResultView }
