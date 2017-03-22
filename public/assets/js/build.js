(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var interceptLinks = require('./interceptLinks.js')
var handleRoute = require('./handleRoute')

var links = document.querySelectorAll('.detail-link');

interceptLinks(links)
handleRoute(links)

},{"./handleRoute":2,"./interceptLinks.js":3}],2:[function(require,module,exports){
function handleRoute (links) {
	links.forEach(function(link) {
		link.addEventListener("click", function(e) {
			var id = e.target.parentElement.id

			getData(id)
				.then(id => formatData(id))
				.then(id => render(id))

		})
	})

	function getData(id) {
		return new Promise(function(resolve, reject) {
			console.log("getData: ", id)
			resolve(id)
		});
	}


	function formatData(id) {
		console.log("formatData: ", id)
		return id
	}

	function render(id) {
		console.log("render: ", id)
		return id
	}
}

module.exports = handleRoute
},{}],3:[function(require,module,exports){
function interceptLinks (links) {
	links.forEach(function(link) {
		link.addEventListener("click", function(e) {
			e.preventDefault()
		})
	})
}

module.exports = interceptLinks
},{}]},{},[1]);
