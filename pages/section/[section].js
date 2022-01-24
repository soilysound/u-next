import Head from 'next/head';
import Tile from '../../components/tile';

export default function Section({ section }) {
	const storylist = section[1].map((story, index) => (
		<Tile story={story} key={index} />
	));

	return (
		<>
			<Head>
				<title>Unredacted</title>
			</Head>
			<h1 className="display-600 flex-grid" style={{ "--justify": "center" }}>{section[0].title}</h1>
			<div className="grid" style={{ "--basis": "250px" }}>
				{storylist}
			</div>
		</>
	)
}

Section.layout = (page) => {
  return (
    <ArticleListLayout>
      {page}
    </ArticleListLayout>
  )
}

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

	const stories = all.filter((s) => {
		let match = 0;
		s.tags.forEach((t) => {
			if (section[0].keywords.includes(t)) { match++ }
		});
		return match > 0;
	}).map((s) => {
		return {
			path: s.path,
			title: s.title,
			headline: s.headline,
			subheadline: s.subheadline,
			tags: s.tags
		}
	});

	section.push(stories);

	return { props: { section } }
}