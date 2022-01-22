import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

const stories = require('../stories.json');

export default function Article(props) {

	const router = useRouter()
	const { id } = router.query;
	let story = {};
	story = stories.filter((s) => {
		return s.path === id;
	});

console.log(story);

  return (
    <>
      <Head>
        <title>{story[0].title}</title>
      </Head>
			<Link href="/"><a href="">back</a></Link>
			<h1 className="title">
				<div>{story[0].headline}</div>
				<div dangerouslySetInnerHTML={{__html: story[0].subheadline}} />
			</h1>
			<h2>{story[0].snippet}</h2>
			<div dangerouslySetInnerHTML={{__html: story[0].body}} />
		</>
  )
}

Article.getInitialProps = async function() {
  
  return {
    shows: {}
  };
};