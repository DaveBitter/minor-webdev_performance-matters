// --------------- Start of Service Worker bit ---------------
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
// --------------- End of Service Worker bit ---------------


const interceptLinks = require('./interceptLinks.js')
const handleRoute = require('./handleRoute.js')

const element = {
	modal: document.getElementById('movie-modal'),
	modalClose: document.querySelector('button.close'),
	detailLinks: document.querySelectorAll('.detail-link'),
}

element.modalClose.addEventListener('click', function() {
	element.modal.classList.remove('open')
})

interceptLinks(element.detailLinks)
handleRoute(element.detailLinks)
