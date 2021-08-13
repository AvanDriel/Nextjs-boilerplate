// Styles
import '@styles/globals.scss'
import layoutStyles from '@styles/core/layout.module.scss'

// Components
import { Navbar } from '@organisms/navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
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
