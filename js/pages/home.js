import Reveal from 'reveal.js';
import Highlight from 'reveal.js/dist/plugin/highlight.esm.js';
import Markdown from 'reveal.js/dist/plugin/markdown.esm.js';
import Zoom from 'reveal.js/dist/plugin/zoom.esm.js';
import throttle from 'lodash/throttle';

export default () => {

	let deck = new Reveal( document.querySelector( '.reveal-demo .reveal' ), {
		embedded: true,
		hash: true,
		margin: 0.1,
		plugins: [ Markdown, Highlight, Zoom ]
	});
	deck.initialize().then( setupHeader );

	function setupHeader() {

		let demoLogo = document.querySelector( '.demo-logo' );
		if( demoLogo ) {

			let updateVisibility = () => {
				document.documentElement.classList.toggle( 'logo-visible', demoLogo.getBoundingClientRect().bottom < 0 );
			}

			updateVisibility();

			document.addEventListener( 'scroll', throttle( updateVisibility, 100 ) )

		}

	}

}