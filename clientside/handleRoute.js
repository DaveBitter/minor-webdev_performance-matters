function handleRoute (links) {
	links.forEach(function(link) {
		link.addEventListener("click", function(e) {
			var id = e.target.parentElement.id

			getData(id)
				.then(id => formatData(id))
				.then(id => render(id))

		})
	})

	function getData(id) {
		return new Promise(function(resolve, reject) {
			console.log("getData: ", id)
			resolve(id)
		});
	}


	function formatData(id) {
		console.log("formatData: ", id)
		return id
	}

	function render(id) {
		console.log("render: ", id)
		return id
	}
}

module.exports = handleRoute