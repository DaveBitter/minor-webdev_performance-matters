const express = require('express')
const unirest = require('unirest')
const currencyFormatter = require('currency-formatter')
const moment = require('moment')

const router = express.Router()

router.get('/:id', (req, res) => {
	const id = req.params.id

	unirest.get('http://api.themoviedb.org/3/movie/' + id + '?api_key=' + process.env.APIKEY)
		.end(function (response) {
			const movie = formatMovie(response.body)
			res.render('components/detail', {movie})
		})
})

const formatMovie = (movie) => {
	movie.budget = currencyFormatter.format(movie.budget, { code: 'USD' })
	movie.revenue = currencyFormatter.format(movie.revenue, { code: 'USD' })
	movie.release_date = moment(movie.release_date).format('MMMM Do YYYY')
	movie.runtime = movie.runtime + ' minutes'
	movie.poster_path = 'http://image.tmdb.org/t/p/w500/' + movie.poster_path
	movie.imdb_link = 'http://imdb.com/title/' + movie.id

	return movie
}

module.exports = router