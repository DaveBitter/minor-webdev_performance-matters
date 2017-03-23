const getData = require('./getData.js')
const renderData = require('./renderData.js')

function handleRoute(links) {
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
				// need to fix the bug where the promise doesn't wait on the API call
				// .then(data => renderData(data))
		})
	})
}

module.exports = handleRoute