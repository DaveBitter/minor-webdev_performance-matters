const renderData = require('./renderData.js')

const getData = (id) => {
	if (localStorage.getItem('movies') === null) {
		localStorage.setItem('movies', JSON.stringify([]))
	}

	let movies = JSON.parse(localStorage.getItem('movies'))

	const movie = movies.find(function(result) {
		return result.id == id
	});

	if (typeof movie !== 'undefined') {
		movies = movies.filter(function(movie) {
			return movie.id !== id;
		})
		movies.unshift(movie)
		renderData(movie)
	} else {
		aja().url('/movie/' + id + '/api').on('success', function(data) {
			movies.unshift(data)
			localStorage.setItem('movies', JSON.stringify(movies))

			renderData(data)
		}).go();

	}
	// do api call
}

module.exports = getData