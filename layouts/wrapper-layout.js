import Footer from 'components/footer'
import Header from 'components/header'

const WrapperLayout = ({ children, canvas = 'page-canvas' }) => {
	console.log(canvas);
	return (
		<div className={`${canvas} wrap wrap-gutter`}>
      
      <Header/>
      {children}
      <Footer/>
    
    </div>
  )
}

export default WrapperLayout