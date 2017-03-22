(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./handleRoute":3,"./interceptLinks.js":4}],2:[function(require,module,exports){
const getData = (id) => {
	console.log('getData: ', id)
	// do api call
	// return the data
	aja().url('/movie/' + id + '/api').on('success', function(data) {
		renderData(data)
	}).go();
}

const renderData = (movie) => {
	const movieModal = document.querySelector('#movie-modal')
	const movieModalContent = document.querySelector('#movie-modal-content')

	const template = [
		'<article>',
			'<header>',
				'<h1>' + movie.title + '</h1>',
				'<sup> ' + movie.tagline + ' </sup>',
			'</header>',
			'<hr>',
			'<div class="content">',
				'<img src=' + movie.poster_path + '>',
				'<div class="info">',
					'<h3>Summary</h3>',
					'<p>' + movie.overview + '</p>',
					'<ul>',
						'<li>',
							'<h4>Budget (USD)</h4>',
							'<p>' + movie.budget + '</p>',
						'</li>',
						'<li>',
							'<h4>Revenue (USD)</h4>',
							'<p>' + movie.revenue + '</p>',
						'</li>',
						'<li>',
							'<h4>Release date</h4>',
							'<p>' + movie.release_date + '</p>',
						'</li>',
						'<li>',
							'<h4>Runtime</h4>',
							'<p>' + movie.runtime + '</p>',
						'</li>',
						'<li>',
							'<h4>Check on IMDB</h4>',
							'<a>' + movie.imdb_link + '</a>',
						'</li>',
					'</ul>',
				'</div>',
			'</div>',
		'</article>'
	].join("\n");

	movieModalContent.innerHTML = template
	movieModal.classList.add('open')
}

module.exports = getData



},{}],3:[function(require,module,exports){
const getData = require('./getData.js')
const renderData = require('./renderData.js')

function handleRoute (links) {
	links.forEach(function(link) {
		link.addEventListener("click", function(e) {
			const id = e.target.parentElement.id

			function handleLink(id) {
				return new Promise(function(resolve, reject) {
					resolve(id)
				});
			}

			handleLink(id)
				.then(id => getData(id))
				// .then(data => renderData(data))
		})
	})
}

module.exports = handleRoute
},{"./getData.js":2,"./renderData.js":5}],4:[function(require,module,exports){
function interceptLinks (links) {
	links.forEach(function(link) {
		link.addEventListener("click", function(e) {
			e.preventDefault()
		})
	})
}

module.exports = interceptLinks
},{}],5:[function(require,module,exports){
const renderData = (data) => {
	console.log('renderData: ', data)
	// create html from template
	// render
	return data
}

module.exports = renderData
},{}]},{},[1]);
