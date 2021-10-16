
document.addEventListener('DOMContentLoaded', function(){ 

    let Btn = document.querySelector('.dinner-button').addEventListener('click', (event) => {

        fetch("https://the-cocktail-db.p.rapidapi.com/random.php", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
            "x-rapidapi-key": "de51889a1fmshe095099b1a97993p13134fjsnc818ad7373cb"
        }
    })
    .then(response => response.json())
    .then(randomCocktail)
    .catch(err => {
        console.error(err);
    });
    
    function randomCocktail(cocktail) {
        console.log(cocktail)
    }
})


let movieBtn = document.querySelector('.movie-button').addEventListener('click', (event) => {
    fetch("https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-random-movies&page=1", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
            "x-rapidapi-key": "de51889a1fmshe095099b1a97993p13134fjsnc818ad7373cb"
        }
    })
    .then(response => response.json())
    .then(chosenMovieGenre)
    .catch(err => {
        console.error(err);
    })
    
    function chosenMovieGenre(jsonObject){
        let arrayGenres = jsonObject.movie_results
        let genreChosen  = document.getElementById('dropdown-movie').value
        let filteredMovies = arrayGenres.map((movie) => {
                console.log(filteredMovies)
                if (movie.genres[0] === genreChosen) {
                    let movieTitle = movie.title
                    let movieGenres = movie.genres[0]
                    let movieRating = movie.imdb_rating
                    let movieTitlePar = document.getElementById('movie-title')
                    let movieTitleEx = document.createElement('h3')

                    return  movieTitleEx.innerHTML = `<p id="movie-title">Title: ${movieTitle}</p> <p id="movie-genre">Genre: ${movieGenres}</p> <p id="movie-rating"">Rating: ${movieRating}/10</p>`
                }// debugger;
            })

            randomizeMovie(filteredMovies);
            // renderMovie(filteredMovies)
        }
    })

}) // End of DOMContentLoaded


function randomizeMovie(titles) {

    let filteredTitles = titles.filter(title => title != undefined)
    let randomIndex = Math.floor(Math.random() * filteredTitles.length)
    let randomTitle = filteredTitles[randomIndex] // study this //
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




























// function randomizeMovie(titles) {
//     let arrayTitle = titles
//     let randomTitle = arrayTitle[Math.floor(Math.random() * (20))]
//     if  (randomTitle === undefined) {
//         
//     } else {
//         console.log(randomTitle)
//     }
// }



    //let movieTitle = document.getElementById('movie-title')
    //let movieTitleItem = document.createElement('h4')
    //let randomTitle = arrayTitle[Math.floor(Math.random() * (19))]
    //movieTitleItem.innerText += randomTitle.title
    //movieTitle.append(movieTitleItem)


        // renderMovie(chosenMovieGenre)
            // .then(function chosenMovieGenre(jsonObject) {
            //     let arrayGenres = jsonObject.movie_results
            //     arrayGenres.forEach((title) => {
            //         let genreChosen = event.target.value
            //         if (title.genres[0] === genreChosen){
            //             console.log(title.title)
            //             return title.title 
            //         }
            //     }) 
            // })

// function renderMovie(jsonObject){
//     let arrayTitle = jsonObject.movie_results
//     let movieTitle = document.getElementById('movie-title')
//     let movieTitleItem = document.createElement('h4')
//     let randomTitle = arrayTitle[Math.floor(Math.random() * (19))]
//     movieTitleItem.innerText += randomTitle.title
//     movieTitle.append(movieTitleItem)
// }

