var express = require('express')
var app = express()

app.set('view engine', 'pug')

app.get('/', function (req, res) {
  res.render('layout', { title: 'Hey', message: 'Hello there!' })
})

app.listen(1337)