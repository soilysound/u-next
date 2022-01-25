import Footer from 'components/footer'
import Header from 'components/header'
import { NavProvider } from 'components/nav/nav-provider'
import Page from 'components/page'

const WrapperLayout = ({ children, canvas = 'page-canvas' }) => {
  return (
    <div className={`${canvas} wrap wrap-gutter`} style={{"--wrap-gap": "var(--component-margin-loose)"}}>
      <NavProvider>
        
        <Header/>
        
        <Page>
          {children}
        </Page>
      </NavProvider>
      <Footer/>
    </div>
  )
}

export default WrapperLayout;