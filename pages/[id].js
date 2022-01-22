import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Article() {

	const router = useRouter()
	const { id } = router.query;

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          {id}
        </h1>
			</main>
	</div>
  )
}