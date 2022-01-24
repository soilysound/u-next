import Head from 'next/head';
import Header from './components/header';
import '../public/css/styles.css';

function MyApp({ Component, pageProps }) {
  return (
	<>
			<Head>
				<title>Unredacted</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
				<div className="wrap wrap-site-width wrap-gutter">
					<Header />
				
					<Component {...pageProps} />
					
					<footer>
						footer
					</footer>
			</div>
	</>
	
	)
}

export default MyApp