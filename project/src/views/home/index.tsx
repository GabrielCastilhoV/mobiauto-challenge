import { useRouter } from 'next/router'

// contexts
import { useFipe } from 'contexts'

// components
import { Button, Select } from 'components'

// styles
import * as S from './styles'

const HomeView = () => {
  const { brands, models, years, handleInput, selectedValue } = useFipe()
  const { push } = useRouter()

  const handleRedirectToResult = () => {
    push('/result')

    handleInput('brand', null)
    handleInput('model', null)
    handleInput('year', null)
  }

  return (
    <S.Wrapper>
      <S.Content>
        <S.Title>Tabela Fipe</S.Title>

        <S.Description>
          Consulte o valor de um veículo de forma gratuita
        </S.Description>

        <S.Form>
          <Select
            label="Marca"
            options={brands}
            onInputChange={(brand) => handleInput('brand', brand)}
            value={selectedValue.brand || null}
          />

          <Select
            label="Modelo"
            options={models}
            onInputChange={(model) => handleInput('model', model)}
            value={selectedValue.model || null}
          />

          {selectedValue.model && (
            <Select
              label="Ano"
              options={years}
              onInputChange={(year) => handleInput('year', year)}
              value={selectedValue.year || null}
            />
          )}

          <S.ButtonWrapper>
            <Button
              label="Consultar preço"
              disabled={!selectedValue.year}
              onClick={handleRedirectToResult}
            />
          </S.ButtonWrapper>
        </S.Form>
      </S.Content>
    </S.Wrapper>
  )
}

export { HomeView }
