import Head from 'next/head';
import Link from 'next/link';

export default function Section({ section }) {

console.log(section[0])
	// const storylist = stories.map(story => (
  //   <div className="tile display-200" key={story.title}><Link href={story.path}><a>{story.title}</a></Link></div>
  // ));

  return (
    <>	
			{ section[0].title }
    </>
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

  return { props: { section } }
}