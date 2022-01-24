import Footer from 'components/footer'
import Header from 'components/header'

const ArticleListLayout = ({ children }) => {
  return (
    <div className="article-list-layout">   
      <div className="wrap wrap-site-width wrap-gutter">
        <Header/>

        {children}

        <Footer/>
      </div>
    </div>
  )
}

export default ArticleListLayout