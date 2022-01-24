import Head from 'next/head';
import Link from 'next/link';

export default function Section({ section }) {

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