
document.addEventListener('DOMContentLoaded', function(){ 
    let dinnerBtn = document.querySelector('.movie-button').addEventListener('click', (event) => {
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
        event.preventDefault()
        function chosenMovieGenre(jsonObject){
            // console.log(jsonObject)
            let arrayGenres = jsonObject.movie_results
            let genreChosen  = document.getElementById('dropdown-movie').value
            let filteredMovies = arrayGenres.map((movie) => {
                if (movie.genres[0] === genreChosen){
                    // console.log(movie.title)
                    return movie.title // +  movie.genres[0] + movie.imdb_rating
                }
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
    
    let movieTitlePar = document.getElementById('movie-title')
    let movieTitle = document.createElement('h3')
    movieTitle.innerText += randomTitle

    let movieImg = document.createElement('img')
    movieImg.id = 'new-movie-image'
    movieImg.src = 'movietitleimg.jpg'
    
    movieTitlePar.append(movieImg, movieTitle) //, movieTitle)

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

