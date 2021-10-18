document.addEventListener('DOMContentLoaded', function(){ 


    fetch("https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-random-movies&page=1", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
            "x-rapidapi-key": "de51889a1fmshe095099b1a97993p13134fjsnc818ad7373cb"
        }
    })
    .then(response => response.json())
    .then(chosenMovieGenre)
    // .catch(err => {
    //     console.error(err);
    // });
    function chosenMovieGenre(jsonObject){
        let arrayGenres = jsonObject.movie_results
        let genreChosen  = document.getElementById('dropdown-movie').value
        let filteredMovies = arrayGenres.map((movie) => {
            if (movie.genres[0] === genreChosen) {
                    // console.log(movie.genres[0])
                    let movieTitle = movie.title
                    let movieGenres = movie.genres[0]
                    let movieRating = movie.imdb_rating
                    let movieTitlePar = document.getElementById('movie-title')
                    let movieTitleEx = document.createElement('h3')

                    return movieTitleEx.innerHTML = `<p id="movie-title">Title: ${movieTitle}</p> <p id="movie-genre">Genre: ${movieGenres}</p> <p id="movie-rating"">Rating: ${movieRating}/10</p>`
                } // debugger;
            })

            randomizeMovie(filteredMovies);
            // renderMovie(filteredMovies)
        }
        })


// }) // End of DOMContentLoaded


function randomizeMovie(titles) {
    let filteredTitles = titles.filter(title => title != undefined)
    let randomIndex = Math.floor(Math.random() * filteredTitles.length)
    let randomTitle = filteredTitles[randomIndex]
    // study this //
    let movieTitlePar = document.getElementById('new-movie-card')
    let movieTitle = document.createElement('h3')
    movieTitle.innerHTML += randomTitle

    let movieImg = document.createElement('img')
    movieImg.id = 'new-movie-image'
    movieImg.src = 'movietitleimg.jpg'
    
    let deleteBtn = document.createElement('button')
    deleteBtn.id = 'delete-button'
    deleteBtn.innerHTML = "Delete"
    deleteBtn.addEventListener('click', deleteMovie)
    movieTitlePar.append(movieImg, movieTitle, deleteBtn) //, movieTitle)
}

function deleteMovie(event) {
    event.target.parentNode.remove()
}