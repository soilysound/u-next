import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
	<>
			<Head>
				<title>Unredacted</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" href="/css/styles.css" />
			</Head>
				<div className="wrap wrap-gutter flex-grid" style={{'--basis': '100%'}}>
					<header>header</header>
					<main className="flex-grid" style={{"--basis": "100%"}}>
								<Component {...pageProps} />
					</main>
					<footer>
						footer
					</footer>
			</div>
	</>
	
	)
}

export default MyApp