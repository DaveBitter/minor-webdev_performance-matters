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



// --------------- End of Service Worker bit -----------------------1


const interceptLinks = require('./interceptLinks.js')
const handleRoute = require('./handleRoute.js')
const favorites = require('./favorites.js')

const element = {
	modal: document.getElementById('movie-modal'),
	modalClose: document.querySelector('button.close'),
	detailLinks: document.querySelectorAll('.detail-link'),
	favoriteButtons: document.querySelectorAll('.favorite-button')
}

element.modalClose.addEventListener('click', function() {
	element.modal.classList.remove('open')
})


interceptLinks(element.detailLinks)
handleRoute(element.detailLinks)

favorites(element.favoriteButtons)