import Link from 'next/link';
import { useState } from 'react';
const config = require('../../config.json');

export default function Header() {

	const sections = config.sections.map((section, index) => (
		<li key={index}><Link href={section.route}><a>{section.title}</a></Link></li>
	));

	const [navState, navHidden] = useState(true);

	return (
		<header className="header" role="banner">
			<nav className="wrap" style={{ "--wrap-gap": "var(--gap-200)" }}>
				<button className="nav-button" aria-hidden="true" aria-controls="nav" aria-expanded="false" onClick={() => navHidden(!navState)}>
					<span className="sr-only">Navigation</span>
				</button>

				<div className="nav-body" data-role="nav-body" aria-hidden={navState}>
					<ul id="nav" className="nav-links flex-grid" style={{ "--basis": "300px" }}>
						<li><Link href="/"><a>Home</a></Link></li>
						{sections}
					</ul>
					<button aria-controls="nav" aria-expanded="false" onClick={() => navHidden(true)}><span className="sr-only">Close navigation</span></button>
				</div>
			</nav>
		</header>

	)
}