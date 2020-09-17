const movieApp = {};

movieApp.key = "333bbafba7eed28cb6ecba2c4caeed82";


movieApp.getMovies = function(movie) {
    $.ajax({
        url: `https://api.themoviedb.org/3/discover/movie`,
        method: "GET",
        dataType: "JSON",
        data: {
            api_key: movieApp.key,
            with_genres: movie,
        }
    }).then((res) => {
        console.log(res);
        movieApp.displayResults(res);
    })
}

movieApp.displayResults = (movies) => {
    movies.results.forEach((movie) => {
        $('.gallery').html(`<li><p>${movie.title}</p><div class="posterContainer"><img src="https://image.tmdb.org/t/p/original${movie.poster_path}" alt="${movie.title} Movie Poster"></div></li>`);
    })
}

movieApp.getGenre = () => {
    $('#movieGenre').on('change', function() {
        const movie = $(this).val();
        console.log(movie);
        movieApp.getMovies(movie);        
    })
} 

//here is where we call the thigns we need to do once the page is ready

movieApp.init = () => {
    movieApp.getGenre();
    movieApp.getMovies();
}

$(function() {
    movieApp.init();
})

// *NOTE: NEED HELP WITH FOR EACH LOOP (SEPARATING EACH ARRAY)