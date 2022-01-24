import Footer from 'components/footer'
import Header from 'components/header'
import Progress from 'components/progress'

const ArticleLayout = ({ children }) => {
  return (
    <div className="article-layout">
      <Progress/>
      
      <div className="wrap wrap-site-width wrap-gutter">
        <Header/>

        {children}

        <Footer/>
      </div>
    </div>
  )
}

export default ArticleLayout