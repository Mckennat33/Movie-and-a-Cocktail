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
        .then(chosenCocktail)
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
    })

////////////////////////////////////////////////////////////////////////////////
}) // End of DOMContentLoaded


function chosenCocktail(cocktail) {
    console.log(cocktail)

    let cocktailArray = cocktail.drinks
    // console.log(cocktailArray)
    let alcChosen = document.getElementById('dropdown-alc').value
    let randomizedDrink = cocktailArray.map((drinks) => {
        if (drinks.strAlcoholic === alcChosen) {
            let drinkCard = document.createElement('h3')
            let chosenDrink = drinks.strDrink
            let chosenDrinkImg = drinks.strDrinkThumb
            // console.log(chosenDrinkImg)
            return drinkCard.innerText = `<img src="${chosenDrinkImg}" id="new-cocktail-image"> <p>${chosenDrink}</p>`
        }
    })
    renderCocktail(randomizedDrink)
}

function renderCocktail(drinks) {
    let randomCocktail = drinks
    

    let newDrinkCard = document.createElement('div')
    newDrinkCard.id = "new-cocktail-card"

    let drinkTitle = document.createElement('h3')
    drinkTitle.id = "new-cocktail-card"
    drinkTitle.innerHTML = randomCocktail

    let drinkInfo = document.getElementById("dinner-info")
    drinkInfo.innerHTML = ''



    drinkInfo.append(drinkTitle)
}


