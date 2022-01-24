import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Article(props) {
	const story = props.story[0];
	useEffect( () => { 
		document.body.className = "page-article"; 
	});

  return (
    <>
      <Head>
        <title>{story.title} - The Unredacted</title>
      </Head>
			<div className="wrap" style={{"--wrap-gap": "var(--gap-400)", "--wrap-width": "var(--site-width-m)"}} >
				<div className="wrap flex-grid article-head" style={{"--wrap-gap": "var(--gap-200)"}}>
					<h1 className="wrap" style={{"--wrap-gap": "6px"}}>
						<div className="article-head-title display-200">{story.headline}</div>
						<div className="display-900" dangerouslySetInnerHTML={{__html: story.subheadline}} />
					</h1>
					<p className="article-head-snippet display-300">{story.snippet}</p>
				</div>
				<div className="wrap article-body article-text" style={{"--wrap-gap": "var(--gap-400)"}} dangerouslySetInnerHTML={{__html: story.body}} />
			</div>
		</>
  )
}

export async function getStaticPaths() {
  const stories = await require('../stories.json');
  const paths = stories.map((story) => ({
    params: { id: story.path },
  }));
	
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const stories = await require('../stories.json');
	const story = stories.filter((s) => {
		return s.path === params.id;
	});

  return { props: { story } }
}
