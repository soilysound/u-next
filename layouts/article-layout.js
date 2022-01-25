import Progress from 'components/progress';

const ArticleLayout = ({ children }) => {
  return (
    <>
      <Progress />
    
      <main className="wrap" style={{ "--wrap-gap": "var(--gap-400)", "--wrap-width": "var(--site-width-m)" }} >
        {children}
      </main>
    </>
  )
}

export default ArticleLayout;