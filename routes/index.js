const express = require('express')
const unirest = require('unirest')

const router = express.Router()

router.get('/', (req, res) => {
	unirest.get('http://api.tmdb.org/3/discover/movie?api_key=' + process.env.APIKEY + '&sort_by=popularity.desc')
		.end(function (response) {
			const movies = response.body.results
			res.render('components/overview', {movies})
		})
})

module.exports = router