import Head from 'next/head'

// views
import { ResultView } from 'views'

export default function Result() {
  return (
    <>
      <Head>
        <title>Mobiauto - Resultado</title>
      </Head>

      <ResultView />
    </>
  )
}
