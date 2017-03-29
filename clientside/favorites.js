const favorites = (buttons) => {
	if (localStorage.getItem('favorites') === null) {
		localStorage.setItem('favorites', JSON.stringify([]))
	}

	let favoriteMovies = JSON.parse(localStorage.getItem('favorites'))

	buttons.forEach(function(button) {
		button.addEventListener('click', function(e) {

			const id = e.target.getAttribute('data-id')

			const found = favoriteMovies.some(function(movie) {
				return movie.id === id;
			});

			if (found == true) {
				favoriteMovies = favoriteMovies.filter(function(movie) {
					return movie.id !== id;
				})

			} else {
				const favorite = {
					id: id,
					element: e.target.parentNode.outerHTML
				}

				favoriteMovies.push(favorite)
				localStorage.setItem('favorites', JSON.stringify(favoriteMovies))
			}

		})
	})
}

module.exports = favorites