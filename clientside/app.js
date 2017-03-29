if ('serviceWorker' in navigator) {

	navigator.serviceWorker

	navigator.serviceWorker.register('/sw.js')

		.then(function(registration) {
			console.log("Service worker Registered at ", registration)
		})

		.catch(function(err) {
			console.log("Service worker failed to register at", err)
		})

}

const interceptLinks = require('./interceptLinks.js')
const handleRoute = require('./handleRoute')

const element = {
	modal: document.querySelector('#movie-modal'),
	modalClose: document.querySelector('button.close')
}

element.modalClose.addEventListener('click', function() {
	element.modal.classList.remove('open')
})

const links = document.querySelectorAll('.detail-link');

interceptLinks(links)
handleRoute(links)