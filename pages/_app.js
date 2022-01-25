import Head from 'next/head';
import { useEffect } from 'react';
import DefaultLayout from 'layouts/default-layout';
import 'public/css/styles.css';
import WrapperLayout from 'layouts/wrapper-layout';

function MyApp({ Component, pageProps }) {
  // I swapped this to useEffect as was getting a warning in console "Warning: useLayoutEffect does nothing on the server"
  // I don't thinkt it particualrly needed to run pre-paint anyway so normal useEffect probably fine?
  useEffect(() => {
    document.documentElement.classList.add("js");
  });

  // Checks to see if a layout has been set on Component (the page) and returns a default layout if not
  const layout = Component.layout ?? ((page) => (<DefaultLayout>{page}</DefaultLayout>))
	const canvas = Component.canvas;

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

			<WrapperLayout canvas={canvas}>
        {layout(
          <Component {...pageProps} />
        )}
      </WrapperLayout>
    </>
  )
}

export default MyApp