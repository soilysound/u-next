import Head from 'next/head';
import Link from 'next/link';

export default function Home({stories}) {
	const storylist = stories.map(story => (
    <div key={story.title}><Link href={story.path}><a>{story.title}</a></Link></div>
  ));

  return (
    <>	
			{storylist}
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

