import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useSpring, animated  } from 'react-spring';
const config = require('../config.json');

export default function Header() {
	const [navState, setNavStateHidden] = useState(true);
	const navRef = useRef(null)
	const { events } = useRouter();

	const [collapseStyles, api] = useSpring(() => ({
		immediate: true,
    '--nav-height': '0',
  }));

	useEffect(() => {
		function hideNav() {
			setNavStateHidden(true)
		}

		events.on('routeChangeComplete', hideNav)

		return () => {
			events.off('routeChangeComplete', hideNav)
		};
	}, [events]);

  useEffect(() => {
    if (!navRef.current) {
			return
		}

    api.start({
      '--nav-height': `${!navState ? navRef.current.offsetHeight : '0'}px`
    })
  }, [api, navRef, navState]);

	const sections = config.sections.map((section, index) => (
		<li key={index}><Link href={`/section/${section.route}/`}><a>{section.title}</a></Link></li>
	));

	return (
		<animated.header className="header wrap wrap-site-width" aria-label="site-header" style={{...collapseStyles }}>
			<nav className="nav wrap" style={{ "--wrap-gap": "var(--gap-200)" }}>
				<button className="nav-button" aria-controls="nav" aria-expanded={!navState} onClick={() => setNavStateHidden(!navState)}>
					<span className="sr-only">Navigation</span>
				</button>
				<div className="nav-body-frame">
					<div  className="nav-body" aria-hidden={navState}>
						<ul ref={navRef} id="nav" className="nav-links flex-grid" style={{ "--basis": "300px" }} aria-label="site-navigation">
							<li><Link href="/"><a>Home</a></Link></li>
							{sections}
						</ul>
						<button className="nav-close" aria-controls="nav" aria-expanded="false" onClick={() => setNavStateHidden(true)}><span className="sr-only">Close navigation</span></button>
					</div>
				</div>
			</nav>
		</animated.header>
	)
}