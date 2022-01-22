import Head from 'next/head';
import Link from 'next/link';

export default function Home({stories}) {
	const storylist = stories.map(story => (
    <div><Link href={story.path}><a>{story.title} - {story.subtitle}</a></Link></div>
  ));

  return (
    <>	
			{storylist}
    </>
  )
}

export async function getStaticProps() {
	const stories = require('../stories.json');
	return { props: { stories } }
}

