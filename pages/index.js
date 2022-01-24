import Head from 'next/head';
import Link from 'next/link';
import Tile from '../components/tile';
import { useEffect } from 'react';

export default function Home({ stories }) {
	useEffect(() => {
		document.body.className = "page-article-shade";
	});

	const storylist = stories.map((story, index) => (
		<Tile story={story} key={index} />
	));

	return (
		<>
			<Head>
				<title>Unredacted</title>
			</Head>
			<div className="flex-grid" style={{ "--basis": "250px" }}>
				{storylist}
			</div>
		</>
	)
}

export async function getStaticProps() {
	const all = require('../stories.json');
	const stories = all.map((s) => {
		return {
			path: s.path,
			title: s.title,
			headline: s.headline,
			subheadline: s.subheadline
		}
	})

	return { props: { stories } }
}

