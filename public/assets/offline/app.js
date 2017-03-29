const favorites = JSON.parse(localStorage.getItem('favorites'))

favorites.forEach(function(favorite) {
	document.getElementById('movies').innerHTML += favorite.element
})