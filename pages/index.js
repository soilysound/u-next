import Head from 'next/head';
import Tile from '../components/tile';

export default function Home({ stories }) {
	const storylist = stories.map((story, index) => (
		<Tile story={story} key={index} />
	));

	return (
		<>
			<Head>
				<title>Unredacted</title>
			</Head>
			<div className="grid" style={{ "--basis": "240px", "--gap": "var(--gap-300)" }}>
				{storylist}
			</div>
		</>
	)
}

Home.canvas = 'page-canvas-shade';

export async function getStaticProps() {
	const all = require('../stories.json');
	const stories = all.map((s) => {
		return {
			path: s.path,
			title: s.title,
			headline: s.headline,
			subheadline: s.subheadline
		}
	});

	return { props: { stories: stories.slice(0, 24) } }
}

