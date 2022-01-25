import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSpring, animated  } from 'react-spring';
import { useNavContext } from './nav-provider';
const config = require('config.json');

export default function Nav() {
  const { navRef, navOpenState, closeNav, toggleNav } = useNavContext();
	const { events } = useRouter();

	const fadeStyles = useSpring({ opacity: navOpenState ? 0 : 1 })
	const [collapseStyles, api] = useSpring(() => ({
    height: '0',
  }));

	useEffect(() => {
		events.on('routeChangeComplete', closeNav)

		return () => {
      events.off('routeChangeComplete', closeNav)
		};
	}, [events, closeNav]);

  useEffect(() => {
    if (!navRef.current) {
			return
		}

    api.start({
      height: `${!navOpenState ? navRef.current.offsetHeight : '0'}px`
    })
  }, [api, navRef, navOpenState]);

	const sections = config.sections.map((section, index) => (
		<li key={index}><Link href={`/section/${section.route}/`}><a>{section.title}</a></Link></li>
	));

  return (
    <animated.nav className="wrap" style={{ "--wrap-gap": "var(--gap-200)" }}>
      <button className="nav-button" aria-controls="nav" aria-expanded={!navOpenState} onClick={toggleNav}>
        <span className="sr-only">Navigation</span>
      </button>

      <div className="nav-wrap">
        <animated.div className="nav-body" aria-hidden={navOpenState} style={{ ...fadeStyles, ...collapseStyles }}>
          <ul ref={navRef} id="nav" className="nav-links flex-grid" style={{ "--basis": "300px" }} aria-label="site-navigation">
            <li><Link href="/"><a>Home</a></Link></li>
            {sections}
          </ul>
          <button className="nav-close" aria-controls="nav" aria-expanded="false" onClick={closeNav}><span className="sr-only">Close navigation</span></button>
        </animated.div>
      </div>
    </animated.nav>
  )
}