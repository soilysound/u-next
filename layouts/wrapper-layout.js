import Footer from 'components/footer'
import Header from 'components/header'

const backgrounds = {
  light: 'page-canvas-shade',
  dark: 'page-canvas',
}

const WrapperLayout = ({ children, background = 'light' }) => {
  console.log(backgrounds[background])

  return (
    <div className={backgrounds[background]}>
      <div className="wrap wrap-site-width wrap-gutter">
        <Header/>
      </div>

      {children}

      <div className="wrap wrap-site-width wrap-gutter">
        <Footer/>
      </div>
    </div>
  )
}

export default WrapperLayout