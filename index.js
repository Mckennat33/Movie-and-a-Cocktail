document.addEventListener('DOMContentLoaded', function(){ 
const movieAPI = "https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-random-movies&page=1"

let dinnerBtn = document.querySelector('.dinner-button')
dinnerBtn.addEventListener('click', renderMovie)


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
    console.log(jsonObject)
    let arrayTitle = jsonObject.movie_results
    arrayTitle.forEach((title) => {
        // console.log(title)
        let movieGenre = document.getElementById('movie-description')
        let newTitleArr = title.title
        let random = newTitleArr[Math.floor(Math.random() * newTitleArr.length)]
        // console.log(newTitleArr)
        // console.log(newTitleArr)
        movieGenre.innerHTML += random
        

    })
}

This is another change that I made 

THis is another think

