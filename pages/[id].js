import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Article(props) {
	const story = props.story[0];
  return (
    <>
      <Head>
        <title>{story.title}</title>
      </Head>
			<Link href="/"><a href="">back</a></Link>
			<h1 className="title">
				<div>{story.headline}</div>
				<div dangerouslySetInnerHTML={{__html: story.subheadline}} />
			</h1>
			<h2>{story.snippet}</h2>
			<div dangerouslySetInnerHTML={{__html: story.body}} />
		</>
  )
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const stories = await require('../stories.json');

  // Get the paths we want to pre-render based on posts
  const paths = stories.map((story) => ({
    params: { id: story.path },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const stories = await require('../stories.json');
	const story = stories.filter((s) => {
		return s.path === params.id;
	});

  // Pass post data to the page via props
  return { props: { story } }
}
