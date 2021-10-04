document.addEventListener('DOMContentLoaded', function(){ 
        const movieAPI = "https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-random-movies&page=1"

    fetch(movieAPI, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
            "x-rapidapi-key": "de51889a1fmshe095099b1a97993p13134fjsnc818ad7373cb"
        }
    })
    .then(response => response.json())
    .then(renderMovie)
    .catch(err => {
        console.error(err);
    });
})

function renderMovie(jsonObject){
    let arrayTitle = jsonObject.movie_results
    arrayTitle.forEach((title) => {
        console.log(title)
    })
    // let movieTitle = document.getElementById('movie-description')
    // movieTitle.innerHTML += jsonObject.movie_results.
}

