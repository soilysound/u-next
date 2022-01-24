import Head from 'next/head';
import Header from '../components/header';
import '../public/css/styles.css';
import Progress from '../components/progress';
import { useLayoutEffect } from 'react';

function MyApp({ Component, pageProps }) {

	useLayoutEffect(() => {
		document.documentElement.classList.add("js");
		Progress();
	});

	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<progress className="progress" min="0" max="1000"></progress>
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