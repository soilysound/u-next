import Head from 'next/head';
import Tile from '../../components/tile';
import relatedStories from '../../utils/relates-stories';

export default function Section({ section }) {
	const storylist = section[1].map((story, index) => (
		<Tile story={story} key={index} />
	));

	return (
		<>
			<Head>
				<title>{section[0].title} - Unredacted</title>
			</Head>
			<h1 className="display-600 flex-grid" style={{ "--justify": "center" }}>{section[0].title}</h1>
			<div className="grid" style={{ "--basis": "240px", "--gap": "var(--gap-300)" }}>
				{storylist}
			</div>
		</>
	)
}

Section.canvas = 'page-canvas-shade';

export async function getStaticPaths() {
	const sections = await require('../../config.json');
	const paths = sections.sections.map((section) => ({
		params: { section: section.route },
	}));

	return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
	const sections = await require('../../config.json');
	const section = sections.sections.filter((s) => {
		return s.route === params.section;
	});

	const all = require('../../stories.json');
	const stories = relatedStories(all, section[0].keywords);

	section.push(stories);

	return { props: { section } }
}