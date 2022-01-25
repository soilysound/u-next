import Footer from 'components/footer'
import Header from 'components/header'
import Page from 'components/page'
import { NavProvider } from 'components/nav/nav-provider'

const backgrounds = {
  light: 'page-canvas-shade',
  dark: 'page-canvas',
}

const WrapperLayout = ({ children, background = 'light' }) => {
  console.log(backgrounds[background])

  return (
    <div className={`${backgrounds[background]} flex-grid wrap-gutter`}>
      <NavProvider>
        <div className="wrap wrap-site-width">
          <Header/>
        </div>

        <Page>
          {children}
        </Page>
      </NavProvider>

      <div className="wrap wrap-site-width">
        <Footer/>
      </div>
    </div>
  )
}

export default WrapperLayout