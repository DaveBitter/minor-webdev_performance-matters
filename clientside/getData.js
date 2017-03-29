const renderData = require('./renderData.js')

const getData = (id) => {
	// do api call
	aja().url('/movie/' + id + '/api').on('success', function(data) {
		renderData(data)
	}).go();
}

module.exports = getData