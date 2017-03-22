const getData = (id) => {
	// do api call
	aja().url('/movie/' + id + '/api').on('success', function(data) {
		renderData(data)
	}).go();
	// return the data
}

const renderData = (movie) => {
	const movieModal = document.querySelector('#movie-modal')
	const movieModalContent = document.querySelector('#movie-modal-content')

	const template = [
		'<article>',
			'<header>',
				'<h1>' + movie.title + '</h1>',
				'<sup> ' + movie.tagline + ' </sup>',
			'</header>',
			'<hr>',
			'<div class="content">',
				'<img src=' + movie.poster_path + '>',
				'<div class="info">',
					'<h3>Summary</h3>',
					'<p>' + movie.overview + '</p>',
					'<ul>',
						'<li>',
							'<h4>Budget (USD)</h4>',
							'<p>' + movie.budget + '</p>',
						'</li>',
						'<li>',
							'<h4>Revenue (USD)</h4>',
							'<p>' + movie.revenue + '</p>',
						'</li>',
						'<li>',
							'<h4>Release date</h4>',
							'<p>' + movie.release_date + '</p>',
						'</li>',
						'<li>',
							'<h4>Runtime</h4>',
							'<p>' + movie.runtime + '</p>',
						'</li>',
						'<li>',
							'<h4>Check on IMDB</h4>',
							'<a>' + movie.imdb_link + '</a>',
						'</li>',
					'</ul>',
				'</div>',
			'</div>',
		'</article>'
	].join("\n");

	movieModalContent.innerHTML = template
	movieModal.classList.add('open')
}

module.exports = getData


