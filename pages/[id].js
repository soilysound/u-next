import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

const stories = require('../stories.json');

export default function Article(props) {

	const router = useRouter()
	const { id } = router.query;
	let story = {};
	story = stories.stories.filter((s) => {
		return s.urlroot === id;
	});

  return (
    <>
      <Head>
        <title>{story[0].title}</title>
      </Head>
			<Link href="/"><a href="">back</a></Link>
			<h1 className="title">
				<div>{story[0].subtitle}</div>
				{story[0].title}
			</h1>
		</>
  )
}

Article.getInitialProps = async function() {
  
  return {
    shows: {}
  };
};