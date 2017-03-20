const express = require('express')
const lockr = require('lockr')

const router = express.Router()

router.get('/:id', (req, res) => {
	const id = req.params.id
	const movies = lockr.get('movies')

	const movie = movies.find(function(result) {
		return result.id == id
	});

	res.render('components/detail', {movie})
})

module.exports = router