const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
};

userInput = 'pasta'
userInput2 = 'italian'

fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=" +userInput+ "&cuisine=%27+userInput2", options)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        recipeId = data.results[0].id
        const set2 = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '',
                'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
            }
        };

        fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/' +recipeId+ '/information', set2)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
        })
        .catch(err => console.error(err));
    })
    .catch(err => console.error(err));


    