import Head from 'next/head';
import { useEffect } from 'react';
import DefaultLayout from 'layouts/default-layout';
import 'public/css/styles.css';
import WrapperLayout from 'layouts/wrapper-layout';

function MyApp({ Component, pageProps }) {
  const layout = Component.layout ?? ((page) => (<DefaultLayout>{page}</DefaultLayout>))
	const canvas = Component.canvas;

  return (
    <>
      <Head>
				<link rel="icon" href="/favicon.ico" />
				<noscript dangerouslySetInnerHTML={{__html: `<style>.nav-body[class]{ max-height: 100%}</style>`}}></noscript>
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