import Footer from 'components/footer'
import Header from 'components/header'
import { NavProvider } from 'components/nav/nav-provider'

const WrapperLayout = ({ children, canvas = 'page-canvas' }) => {
  return (
    <div className={`${canvas} wrap wrap-gutter`} style={{"--wrap-gap": "var(--component-margin-loose)"}}>
      <NavProvider>
				<Header/>
				{children}
      </NavProvider>
      <Footer/>
    </div>
  )
}

export default WrapperLayout;