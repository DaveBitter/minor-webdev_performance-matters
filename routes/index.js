const express = require('express')
const unirest = require('unirest')
const lockr = require('lockr')

const router = express.Router()

router.get('/', (req, res) => {
	unirest.get('http://api.tmdb.org/3/discover/movie?api_key=' + process.env.APIKEY + '&sort_by=popularity.desc')
		.end(function (response) {
			// create localStorage if it's not there
			//  TODO: this looks hacky
			if (typeof localStorage === "undefined" || localStorage === null) {
				const LocalStorage = require('node-localstorage').LocalStorage;
				localStorage = new LocalStorage('./scratch');
			}

			const movies = response.body.results

			lockr.set('movies', movies);

			res.render('components/overview', {movies})
		})
})

module.exports = router