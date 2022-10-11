
///////////////////////////////////////////////////////////fetch seperated by long lines like this, below is recipe API(use sparingly, its not free)
// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '',
//         'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
//     }
// };

// userInput = 'pasta'
// userInput2 = 'italian'

// fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=" +userInput+ "&cuisine=%27+userInput2", options)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data)
//         recipeId = data.results[0].id
//         const set2 = {
//             method: 'GET',
//             headers: {
//                 'X-RapidAPI-Key': '',
//                 'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
//             }
//         };

//         fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/' +recipeId+ '/information', set2)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data)
//         })
//         .catch(err => console.error(err));
//     })
//     .catch(err => console.error(err));




////////////////////////////////////////////////////////////////////////////////below is healthy quotes! not free, use sparingly///////////////////////////////////////////////////////////////////////////////

// const options = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/json',
// 		'X-RapidAPI-Key': '',
// 		'X-RapidAPI-Host': 'pquotes.p.rapidapi.com'
// 	},
// 	body: '{"topic":"health"}'
// };

// fetch('https://pquotes.p.rapidapi.com/api/quote', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response.quote +" by " +response.by)) //response.quote is the quote, response.by is the author
// 	.catch(err => console.error(err));

//////////////////////////////////////////////////////////below is excercise///////////////////////////////////////////////////////////////////////////////////////////////////////

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6e62526b2bmsh6ea8d6b04968f6dp1bf673jsn462c96ed6e67',
		'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=biceps', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));