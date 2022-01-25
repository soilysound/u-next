import Page from "components/page";

const DefaultLayout = ({ children }) => {
  return (
    <Page>
      <main className="wrap wrap-site-width">
        {children}
      </main>
    </Page>
  )
}

export default DefaultLayout;