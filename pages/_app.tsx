// Components
import { Navbar } from '@organisms/navbar'
import Head from 'next/head'
// Styles
import '@styles/globals.scss'
import layoutStyles from '@styles/core/layout.module.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Nextjs boilerplate</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Nextjs boilerplate" key="title" />
      </Head>
      <Navbar>
        <span>Navigation</span>
      </Navbar>
      <div className={layoutStyles.root}>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
