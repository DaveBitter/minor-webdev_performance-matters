require('dotenv').config();

const express = require('express')
const app = express()

const port = 1337

const indexRouter = require('./routes/index.js')
const detailRouter = require('./routes/detail.js')

app
	.set('view engine', 'pug')
	.use(express.static('public'))
	.use('/', indexRouter)
	.use('/movie', detailRouter)
	.listen(process.env.PORT || port, () => {
		console.log('Started server on http://localhost:' + port)
	})