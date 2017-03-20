var express = require('express')
var app = express()

var indexRouter = require('./routes/index.js')

app.set('view engine', 'pug')

app.use(express.static('public'))

app.use('/', indexRouter);

app.listen(1337)