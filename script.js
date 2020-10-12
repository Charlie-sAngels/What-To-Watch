// APP OBJECT
const movieApp = {};

// API KEY
movieApp.key = "333bbafba7eed28cb6ecba2c4caeed82";

//MOVIE GENRE VARIABLE
movieApp.myMovie = 28;

// AJAX CALL 
movieApp.getMovies = function (myMovie, year) {
    $.ajax({
        url: `https://api.themoviedb.org/3/discover/movie`,
        method: "GET",
        dataType: "JSON",
        data: {
            page: movieApp.randomPage,
            api_key: movieApp.key,
            with_genres: myMovie,
            year: year,
        }
    }).then((res) => {
        $(".gallery").empty(); //TO EMPTY GALLERY UPON SELECTION
        const filteredMovies = movieApp.filterMovies(res.results)
        movieApp.displayResults(filteredMovies);
    })
}

movieApp.filterMovies = (array) => array.filter(movie => movie.poster_path)


// GENERATING RANDOM PAGE NUMBER 
movieApp.randomPage = () => {
    return Math.random() * (50 - 1) + 1;
}

//DISPLAYING ARRAY FOR GALLERY 
movieApp.displayResults = (movies) => {
    movies.forEach((movie) => {
        $(".gallery").append(`
        <li> <div class="titleContainer">
            <p>${movie.title}</p></div>
            <div class="posterContainer">
                <img src="https://image.tmdb.org/t/p/original${movie.poster_path}" alt="${movie.title} Movie Poster">
            </div>
        </li>`);
    })
}

// CHANGING GENRE STYLE UPON USER SELECTION FROM DROP-DOWN MENU
movieApp.getGenre = () => {
    $("#movieGenre").on("change", function () {
        movieApp.myMovie = $(this).val();
        movieApp.getMovies(movieApp.myMovie);
        if (movieApp.myMovie === "27") {
            $("body").removeClass();
            $("body").addClass("horror");
        } else if (movieApp.myMovie === "28") {
            $("body").removeClass();
            $("body").addClass("action");
        } else if (movieApp.myMovie === "35") {
            $("body").removeClass();
            $("body").addClass("comedy");
        } else if (movieApp.myMovie === "878") {
            $("body").removeClass();
            $("body").addClass("sciFi");
        } else if (movieApp.myMovie === "10749") {
            $("body").removeClass();
            $("body").addClass("romance");
        };
    });
}

// CHANGING MOVIE YEAR UPON USER SELECTION FROM DROP-DOWN MENU
movieApp.getYear = () => {
    $("#movieYear").on("change", function () {
        const year = parseInt($(this).val());
        movieApp.getMovies(movieApp.myMovie, year);
        return year
    });
}

// INITIALIZING INIT
movieApp.init = () => {
    movieApp.getGenre();
    movieApp.getYear();
    movieApp.getMovies();
}

// DOCUMENT READY
$(function () {
    movieApp.init();
})