const movieApp = {};

movieApp.key = "333bbafba7eed28cb6ecba2c4caeed82";


movieApp.getMovies = function() {
    $.ajax({
        url: `https://api.themoviedb.org/3/discover/movie`,
        method: "GET",
        dataType: "JSON",
        data: {
            api_key: movieApp.key,
            with_genres: 27,
        }
    }).then((results) => {
        console.log(results);
    })

}

movieApp.getMovies();






// movieApp.init {
//     //here is where we call the thigns we need to do once the page is ready
// }



$(function() {
    // movieApp.init();
})