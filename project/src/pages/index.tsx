import Head from 'next/head'

// views
import { HomeView } from 'views'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mobiauto - Fipe</title>
      </Head>

      <HomeView />
    </>
  )
}
