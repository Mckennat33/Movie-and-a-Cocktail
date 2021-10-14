
document.addEventListener('DOMContentLoaded', function(){ 


        let dinnerBtn = document.querySelector('.movie-button').addEventListener('click', (event) => {
            fetch("https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-random-movies&page=1")
            .then(response => response.json())
            .then(function renderMovie() {
                
            })
        })

        let changedGenre = document.getElementById('dropdown-movie').addEventListener('change', (event) => {
            
            fetch("https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-random-movies&page=1")
            .then(response => response.json())
            .then(function chosenMovieGenre(jsonObject) {
                let arrayGenres = jsonObject.movie_results
                arrayGenres.forEach((title) => {
                    let genreChosen = event.target.value
                    if (title.genres[0] === genreChosen){
                        // console.log(title.title)
                        return title.title 
                    }
                }) 
            })
            .then()
            
            .catch(err => {
                console.error(err);
            });
        
    })

        
        //let dinnerBtn = document.querySelector('.movie-button').addEventListener('click', (event) => {
            //    console.log(event.target.value)
            //})
            
            
            
        })        // renderMovie(chosenMovieGenre)
        






// function renderMovie(jsonObject){
//     let arrayTitle = jsonObject.movie_results
//     let movieTitle = document.getElementById('movie-title')
//     let movieTitleItem = document.createElement('h4')
//     let randomTitle = arrayTitle[Math.floor(Math.random() * (19))]
//     movieTitleItem.innerText += randomTitle.title
//     movieTitle.append(movieTitleItem)
// }
























// document.addEventListener('DOMContentLoaded', function(){ 

    // let dinnerBtn = document.querySelector('.movie-button').addEventListener('click', (event) => {
    //     fetch("https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-random-movies&page=1", {
    //         "method": "GET",
    //         "headers": {
    //             "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
    //             "x-rapidapi-key": "de51889a1fmshe095099b1a97993p13134fjsnc818ad7373cb"
    //         }
    //     })
    // .then(response => response.json())
    // .then(renderMovie)
    // .catch(err => {
    //     console.error(err);
//     //     })
//     // })
// 
//     let dinnerBtn = document.querySelector('.movie-button').addEventListener('click', (event) => {
//     })
// 
//     let changedGenre = document.getElementById('dropdown-movie').addEventListener('change', (event) => {
//         fetch("https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-random-movies&page=1")
//         .then(response => response.json())
//         .then(function chosenMovieGenre(jsonObject) {
//             let arrayGenres = jsonObject.movie_results
//             arrayGenres.forEach((title) => {
//                 let genreChosen = event.target.value
//                 if (title.genres[0] === genreChosen){
//                     return title.title
//                 }
//             })
//         })
//         .catch(err => {
//             console.error(err);
//             });
//     })
// 
// 
// 
//         
// 
// 
// 
// }) // End of DOMContent Loaded 
// 
// 
// 
// 
// 
// function renderMovie(jsonObject){
//     let arrayTitle = jsonObject.movie_results
//     let movieTitle = document.getElementById('movie-title')
//     let movieTitleItem = document.createElement('h4')
//     let randomTitle = arrayTitle[Math.floor(Math.random() * (19))]
//     movieTitleItem.innerText += randomTitle.title
//     movieTitle.append(movieTitleItem)
// }
// 
// 