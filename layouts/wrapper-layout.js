import Footer from 'components/footer';
import Header from 'components/header';

const WrapperLayout = ({ children, canvas = 'page-canvas' }) => {
	return (
		<div className={`${canvas} wrap wrap-gutter`}>
      
      <Header/>
      {children}
      <Footer/>
    
    </div>
  )
}

export default WrapperLayout;