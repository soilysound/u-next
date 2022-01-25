import Footer from 'components/footer'
import Header from 'components/header'
import { NavProvider } from 'components/nav/nav-provider'

const WrapperLayout = ({ children, canvas = 'page-canvas' }) => {
  return (
    <div className={`${canvas} flex-grid wrap-gutter`}>
      <NavProvider>
        <div className="wrap wrap-site-width">
          <Header/>
        </div>

        {children}
      </NavProvider>

      <div className="wrap wrap-site-width">
        <Footer/>
      </div>
    </div>
  )
}

export default WrapperLayout;