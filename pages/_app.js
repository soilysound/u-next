import Head from 'next/head';
import Header from '../components/header';
import '../public/css/styles.css';
import { useLayoutEffect } from 'react';

function MyApp({ Component, pageProps }) {

	useLayoutEffect(() => {
		document.documentElement.classList.add("js");
	});

	return (
		<>
			<Head>
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