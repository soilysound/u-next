import Head from 'next/head';
import Link from 'next/link';

const stories = require('../stories.json');

export default function Home() {

	const storylist = stories.stories.map(story => (
    <div><Link href={story.urlroot}><a>{story.title} - {story.subtitle}</a></Link></div>
  ));

  return (
    <>	
			{storylist}
    </>
  )
}
