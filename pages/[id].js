import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Article() {

	const router = useRouter()
	const { id } = router.query;

  return (
    <>
      <Head>
        <title>{id}</title>
      </Head>

      
        <h1 className="title">
          {id}
        </h1>
			
	</>
  )
}