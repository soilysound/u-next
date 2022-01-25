const ArticleLayout = ({ children }) => {
  return (
    <>
      <main className="wrap" style={{ "--wrap-gap": "var(--gap-400)", "--wrap-width": "var(--site-width-m)" }} >
        {children}
      </main>
    </>
  )
}

export default ArticleLayout;