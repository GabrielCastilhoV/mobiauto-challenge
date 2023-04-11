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
  margin: 0 auto;

  text-align: center;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.dark};
    font-weight: ${theme.font.weight.bold};
    font-size: 30px;
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    margin: 15px 0 20px 0;

    color: ${theme.colors.dark};
    font-weight: ${theme.font.weight.bold};
    font-size: 24px;
  `}
`

export const Form = styled.form`
  ${({ theme }) => css`
    width: 80%;
    margin: 0 auto;
    padding: 20px 40px;

    background-color: ${theme.colors.white};
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
    border-radius: 4px;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  `}

  @media screen and (min-width: 768px) {
    width: 70%;
    padding: 40px 60px;
  }
`

export const ButtonWrapper = styled.div`
  margin-top: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  button {
    padding: 10px 40px !important;
    text-transform: initial;

    background-color: ${({ theme }) => theme.colors.purple};
    transition: filter 0.3s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.purple};
      filter: brightness(1.2);
    }
  }
`
