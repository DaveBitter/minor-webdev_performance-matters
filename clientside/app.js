var interceptLinks = require('./interceptLinks.js')
var handleRoute = require('./handleRoute')

var links = document.querySelectorAll('.detail-link');

interceptLinks(links)
handleRoute(links)
