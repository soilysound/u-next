import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Article(props) {
	const story = props.story[0];
	useEffect(() => {
		document.body.className = "page-article";
	});

	return (
		<>
			<Head>
				<title>{story.title} - The Unredacted</title>
			</Head>
			<div className="wrap" style={{ "--wrap-gap": "var(--gap-400)", "--wrap-width": "var(--site-width-m)" }} >
				<div className="wrap flex-grid article-head" style={{ "--wrap-gap": "var(--gap-200)" }}>
					<h1 className="wrap" style={{ "--wrap-gap": "6px" }}>
						<div className="article-head-title display-200">{story.headline}</div>
						<div className="display-900" dangerouslySetInnerHTML={{ __html: story.subheadline }} />
					</h1>
					<p className="article-head-snippet display-300">{story.snippet}</p>

					<div className="article-byline flex-grid">
						<div className="article-byline-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 43" fill="white"><path d="M39.561 33.971l-.145.174c-4.774 5.728-11.133 8.884-17.902 8.884-6.77 0-13.128-3.155-17.903-8.884l-.144-.174.034-.223c.922-6.014 4.064-10.845 8.847-13.606l.34-.196.271.284c2.259 2.37 5.297 3.674 8.554 3.674s6.295-1.305 8.554-3.674l.271-.284.34.196c4.783 2.761 7.925 7.592 8.848 13.606l.035.223zM21.514 21.489c5.924 0 10.744-4.82 10.744-10.744C32.258 4.821 27.438 0 21.514 0S10.77 4.821 10.77 10.744s4.82 10.745 10.744 10.745z"></path></svg></div><strong>theunredacted</strong> Dec 18, 2019</div>

				</div>
				<div className="wrap article-body article-text" style={{ "--wrap-gap": "var(--gap-400)" }} dangerouslySetInnerHTML={{ __html: story.body }} />
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
