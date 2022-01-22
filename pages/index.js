import Head from 'next/head'
import Link from 'next/link'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Unredacted</title>
        <link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" href="/css/styles.css" />
      </Head>

      <main>
				<Link href="/bum/"><a>Bum</a></Link>
      </main>

      <footer>
        footer
      </footer>
    </div>
  )
}
