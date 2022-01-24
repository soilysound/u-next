import Footer from 'components/footer'
import Header from 'components/header'

const DefaultLayout = ({ children }) => {
  return (
    <div className="wrap wrap-site-width wrap-gutter">
      <Header/>
      
      {children}

      <Footer/>
    </div>
  )
}

export default DefaultLayout