document.addEventListener('DOMContentLoaded', function(){ 

    let dinnerBtn = document.querySelector("#dinner > button").addEventListener('click', (event) => {

        fetch("https://the-cocktail-db.p.rapidapi.com/random.php", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
            "x-rapidapi-key": "de51889a1fmshe095099b1a97993p13134fjsnc818ad7373cb"
        }
    })
    .then(response => response.json())

    .then(function chosenCocktail(cocktail) {
        // let cocktailArray = cocktail
        cocktail.map(function(drink) {
            console.log(drink)
        })
    })
    .catch(err => {
        console.error(err);
    });
    
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
    function chosenMovieGenre(jsonObject){
        let arrayGenres = jsonObject.movie_results
        let genreChosen  = document.getElementById('dropdown-movie').value
        let filteredMovies = arrayGenres.map((movie) => {
            // console.log(movie.genres[0])
            if (movie.genres[0] === genreChosen) {
                    let movieTitle = movie.title
                    let movieGenres = movie.genres[0]
                    let movieRating = movie.imdb_rating
                    let movieTitlePar = document.getElementById('movie-title')
                    let movieTitleEx = document.createElement('h3')
                    return movieTitleEx.innerText = `<p id="movie-title">Title: ${movieTitle}</p> <p    id="movie-genre">Genre: ${movieGenres}</p> <p id="movie-rating"">Rating: ${movieRating}/   10</p>`
                } // debugger;
            })
            randomizeMovie(filteredMovies);
            // renderMovie(filteredMovies)
        }
    // .catch(err => {
    //     console.error(err);
    // });
    })
}) // End of DOMContentLoaded





function randomizeMovie(titles) {
    let filteredTitles = titles.filter(title => title != undefined)
    let randomIndex = Math.floor(Math.random() * filteredTitles.length)
    let randomTitle = filteredTitles[randomIndex]

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





// old render Cocktail 


let exDiv = document.getElementById('dinner-info')
//newCocktailCard.id = "new-cocktail-card"

let newCocktailCard = document.createElement('div')
newCocktailCard.id = 'new-cocktail-card'

let cocktailImg = document.createElement("img")
cocktailImg.id = "cocktail-image"
cocktailImg.src = `${drinks.strDrinkThumb}`

let newCard = document.createElement('h3')
newCard.innerHTML = `${drinks.strDrink}`

// newCocktailCard.append(exDiv, newCard, cocktailImg)
exDiv.append(newCocktailCard, cocktailImg, newCard)