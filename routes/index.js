const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
	res.render('components/hello')
})

module.exports = router;