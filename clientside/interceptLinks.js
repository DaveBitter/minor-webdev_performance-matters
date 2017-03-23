function interceptLinks(links) {
	links.forEach(function(link) {
		link.addEventListener("click", function(e) {
			e.preventDefault()
		})
	})
}

module.exports = interceptLinks