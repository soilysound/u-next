import Progress from 'components/progress'

const ArticleLayout = ({ children }) => {
  return (
    <>
      <Progress/>
      
      <div className="wrap wrap-site-width">
        {children}
      </div>
    </>
  )
}

export default ArticleLayout