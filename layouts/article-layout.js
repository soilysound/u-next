import Page from 'components/page';
import Progress from 'components/progress';

const ArticleLayout = ({ children }) => {
  return (
    <>
      <Progress />
    
      <Page>
        <main className="wrap" style={{ "--wrap-gap": "var(--gap-400)", "--wrap-width": "var(--site-width-m)" }} >
          {children}
        </main>
      </Page>
    </>
  )
}

export default ArticleLayout;