import Progress from 'components/progress'

const ArticleLayout = ({ children }) => {
  return (
    <div className="article-layout">
      <Progress/>
      
      <div className="wrap wrap-site-width wrap-gutter">
        {children}
      </div>
    </div>
  )
}

export default ArticleLayout