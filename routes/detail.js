const express = require('express')
const unirest = require('unirest')

const router = express.Router()

router.get('/:id', (req, res) => {
	const id = req.params.id

	unirest.get('http://api.themoviedb.org/3/movie/' + id + '?api_key=' + process.env.APIKEY)
		.end(function (response) {
			const movie = response.body
			res.render('components/detail', {movie})
		})
})

module.exports = router