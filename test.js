function chosenCocktail(cocktail) {
    
    let cocktailArray = cocktail.drinks
    // console.log(cocktailArray)
    let alcChosen = document.getElementById('dropdown-alc').value
    let randomizedDrink = cocktailArray.map((drinks) => {
        if (drinks.strIngredient1 + drinks.strIngredient2 + drinks.strIngredient3 === !null) {
            let drinkCard = document.createElement('h3')
            let chosenDrink = drinks.strDrink
            let chosenDrinkImg = drinks.strDrinkThumb
            // console.log(chosenDrinkImg)
            return drinkCard.innerText = `<img src="${chosenDrinkImg}" id="new-cocktail-image"> <h3>${chosenDrink}</h3> <p id="instructions">Instructions:</p> <p>${drinks.strInstructions}</p> <p>${drinks.strIngredient1} ${drinks.strIngredient1} ${drinks.strIngredient1}</p>`
        }
    })
    renderCocktail(randomizedDrink)
}

/////////////////////////////////////////////

// new one 

function chosenCocktail(cocktail) {
    
    let cocktailArray = cocktail.drinks
    // console.log(cocktailArray)
    // let alcChosen = document.getElementById('dropdown-alc').value
    let randomizedDrink = cocktailArray.map((drinks) => {
        console.log(drinks)
        if (drinks.strIngredient3 != null) {
                console.log(drinks.strIngredient1)
            // console.log(drinks.strIngredient1)
            let drinkCard = document.createElement('h3')
            let chosenDrink = drinks.strDrink
            let chosenDrinkImg = drinks.strDrinkThumb
            let ing1 = drinks.strIngredient1
            let ing2 = drinks.strIngredient2
            let ing3 = drinks.strIngredient3
            //console.log(ing1)

            // debugger;
            // console.log(chosenDrinkImg)
            return drinkCard.innerText = `<img src="${chosenDrinkImg}" id="new-cocktail-image"> <h3>${chosenDrink}</h3> <h3 id="instructions"> Instructions:</h3> <p>${drinks.strInstructions}</p>  
            
            <h3>Ingredient:<h3> <p>${ing1},  ${ing2} + ${ing3}</p>`
        }
    })
    renderCocktail(randomizedDrink)
}













// original 

function chosenCocktail(cocktail) {
    
    let cocktailArray = cocktail.drinks
    // console.log(cocktailArray)
    let alcChosen = document.getElementById('dropdown-alc').value
    let randomizedDrink = cocktailArray.map((drinks) => {
        if (drinks.strAlcoholic === alcChosen) {
            console.log(drinks.strIngredient3)
            let drinkCard = document.createElement('h3')
            let chosenDrink = drinks.strDrink
            let chosenDrinkImg = drinks.strDrinkThumb
            // console.log(chosenDrinkImg)
            return drinkCard.innerText = `<img src="${chosenDrinkImg}" id="new-cocktail-image"> <h3>${chosenDrink}</h3> <p id="instructions">Instructions:</p> <p>${drinks.strInstructions}</p>`
        }
    })
    renderCocktail(randomizedDrink)
}




/// Css original

#new-movie-card {
    right: 413px;
    width: 320px;
    bottom: 10px;
    padding: 20px;
    border: 1px solid #c9c9c9;
    border-radius: 7px;
    background-color: #fae596;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
    float: right; 
    margin: 25px;
    position: static;
}



#new-cocktail-card {
    right: 413px;
    width: 320px;
    bottom: 10px;
    padding: 20px;
    border: 1px solid #c9c9c9;
    border-radius: 7px;
    background-color: #fae596;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
    float: right; 
    margin: 25px;
    position: static;

}



let saveBtn = document.createElement('button') 
saveBtn.id = 'save-button'
saveBtn.innerHTML = "Save"
saveBtn.addEventListener("click", function saveCard(event){
    let savedCocktailCard = document.getElementById('new-cocktail-Card')
    savedCocktailCard = randomCocktail

    let newCard = document.getElementById('saved-content')
    
    console.log(newCard)
    
    newCard.append(savedCocktailCard)
})



function renderCocktail(drinks) {
    let randomCocktail = drinks
    
    let newDrinkCard = document.createElement('div')
    newDrinkCard.id = "new-cocktail-card"

    let drinkTitle = document.createElement('h3')
    drinkTitle.id = "new-cocktail-card"
    drinkTitle.innerHTML = randomCocktail

    let drinkInfo = document.getElementById("dinner-info")
    drinkInfo.innerHTML = ''

    let deleteBtn = document.createElement('button')
    deleteBtn.id = 'delete-button'
    deleteBtn.innerHTML = "Delete"
    deleteBtn.addEventListener('click', deleteDrink)

    drinkInfo.append(drinkTitle)

    drinkTitle.append(deleteBtn)

}