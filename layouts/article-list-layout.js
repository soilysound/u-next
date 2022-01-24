const ArticleListLayout = ({ children }) => {
  return (
    <div className="article-list-layout">   
      <div className="wrap wrap-site-width wrap-gutter">
        {children}
      </div>
    </div>
  )
}

export default ArticleListLayout