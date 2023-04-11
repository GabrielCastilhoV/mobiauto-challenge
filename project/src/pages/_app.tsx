import type { AppProps } from 'next/app'

// providers
import { ThemeProvider } from 'styled-components'
import { FipeProvider } from 'contexts'

// styles
import { GlobalStyles, theme } from 'styles'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <FipeProvider>
        <GlobalStyles />

        <Component {...pageProps} />
      </FipeProvider>
    </ThemeProvider>
  )
}

export default MyApp
