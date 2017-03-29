const renderData = require('./renderData.js')

const getData = (id) => {
	if (localStorage.getItem('movies') === null) {
		localStorage.setItem('movies', JSON.stringify([]))
	}

	let movies = JSON.parse(localStorage.getItem('movies'))
	// do api call
	aja().url('/movie/' + id + '/api').on('success', function(data) {

		const found = movies.some(function(movie) {
			return movie.id === data.id;
		});

		if (found == true) {
			movies = movies.filter(function(movie) {
				return movie.id !== data.id;
			})

		} else {
			movies.push(data)
			localStorage.setItem('movies', JSON.stringify(movies))
		}

		renderData(data)
	}).go();
}

module.exports = getData