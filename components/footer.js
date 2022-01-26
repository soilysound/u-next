import { useEffect } from 'react';
import ToTop from './toptop';

export default function Footer() {
	
	useEffect(() => {
		ToTop(document.querySelector('.footer-top'));
	});
	
  return (
    <footer className="footer flex-grid wrap wrap-site-width" style={{"--justify": "center"}}>
			© theunredacted.com <a href="#" className="footer-top"><span className="sr-only">go to top</span></a>
    </footer>
  )
}