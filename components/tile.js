import Link from 'next/link';

export default function Tile({ story }) {
	return (
		<article className="tile">
			<figure className="flex-grid" style={{ "--gap": "0px" }}>
				<img width="400" height="400" aria-hidden="true" loading="lazy" src={`/img/stories/${story?.path}.webp`} />
				<figcaption className="flex-grid" style={{ "--gap": "0px" }}>
					<h2>
						<Link href={`/${story?.path}`}>
							<a className="tile-link">
								<strong>{story?.headline}</strong>
								<div dangerouslySetInnerHTML={{ __html: story?.subheadline }}></div>
							</a>
						</Link>
					</h2>
				</figcaption>
			</figure>
		</article >
	)
}