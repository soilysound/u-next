import Head from 'next/head';
import Tile from '../components/tile';
import ArticleListLayout from 'layouts/article-list-layout';

export default function Home({ stories }) {
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

Home.layout = (page) => {
  return (
    <ArticleListLayout>
      {page}
    </ArticleListLayout>
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

	return { props: { stories: stories.slice(0, 24) } }
}

