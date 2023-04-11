import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.main`
  width: 100%;
  max-width: 768px;
  min-height: 150px;
  margin: 0 auto;
  padding: 40px 40px 20px;

  background-color: ${({ theme }) => theme.colors.lightGreen};

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const Description = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.dark};
    font-weight: ${theme.font.weight.bold};
    font-size: 20px;
    text-align: center;
  `}
`

export const PriceWrapper = styled.div`
  ${({ theme }) => css`
    padding: 8px 10px;
    margin: 10px 0;

    background-color: ${theme.colors.darkGreen};
    border-radius: 20px;

    font-size: 20px;
    font-weight: ${theme.font.weight.bold};
  `}
`

export const Price = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`

export const Info = styled.p`
  font-size: 10px;
  color: #555;
`
