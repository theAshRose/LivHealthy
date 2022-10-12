$(document).ready(function () {
  $("select").formSelect();
}); //to get dropdowns working for food selection
$("#myChart").hide();

///////////////////////////////////////////////////////////fetch seperated by long lines like this, below is recipe API(use sparingly, its not free)
// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '6e62526b2bmsh6ea8d6b04968f6dp1bf673jsn462c96ed6e67',
//         'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
//     }
// };

// userInput = 'pasta'
// userInput2 = 'italian'

// fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=" +userInput+ "&cuisine="+ userInput2+ "", options)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data)
//         recipeId = data.results[0].id
//         const set2 = {
//             method: 'GET',
//             headers: {
//                 'X-RapidAPI-Key': '6e62526b2bmsh6ea8d6b04968f6dp1bf673jsn462c96ed6e67',
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

/////////////Chris's test with hardcoded variables"
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "f6140f9bd5mshf947ce29f8d6a4ap1406e5jsn9e459eb842b0",
//     "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
//   },
// };

var title = "pasta";
var cuisine = "italian";
var excludeCuisine = "greek";
var diet = "vegetarian";
var intolerances = "gluten";
var excludeIng = "eggs";
var type = "main";
var maxCarbs = 50;
var minProtein = 10;
var maxCalories = 1000;
var maxFat = 50;
var maxSatFat = 50;
var MinFiber = 5;
var maxSodium = 100;
var maxSugar = 50;

fetch(
  "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=" +
    title +
    "&cuisine=" +
    cuisine +
    "&excludeCuisine" +
    excludeCuisine +
    "&diet=" +
    diet +
    "&intolerances=" +
    intolerances +
    "& excludeIngredients=" +
    excludeIng +
    "&type=" +
    type +
    "&instructionsRequired=true&addRecipeInformation=true&sort=calories&sortDirection=asc&maxCarbs=" +
    maxCarbs +
    "&minProtein=" +
    minProtein +
    "&maxCalories=" +
    maxCalories +
    "&maxFat=" +
    maxFat +
    "&maxSaturatedFat=" +
    maxSatFat +
    "&minFiber=" +
    MinFiber +
    "&maxSodium=" +
    maxSodium +
    "&maxSugar=" +
    maxSugar +
    "",
  options
);
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     var recipeId = data.results[0].id;
//     const set2 = {
//       method: "GET",
//       headers: {
//         "X-RapidAPI-Key": "f6140f9bd5mshf947ce29f8d6a4ap1406e5jsn9e459eb842b0",
//         "X-RapidAPI-Host":
//           "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
//       },
//     };

//     fetch(
//       "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/" +
//         recipeId +
//         "/information",
//       set2
//     )
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//         console.log(data);
//       })
//       .catch((err) => console.error(err));
//   });
//////////////END of chris test//////////////////////

///////////////////////////////////PARAMETERS INCLUDING IN SEARCH  WITH CODING GUIDELINES/////////////////////////////////////////
//////
////   spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?
//  query=pasta ///user text input
// &cuisine=italian  ///dropdowns need possible options list stat
// &excludeCuisine=greek //same as above line
// &diet=vegetarian //row of checkboxes/dropdown
// &intolerances=gluten ///row of checkboxes/dropdown
// &type=main%20course // dropdown
// &instructionsRequired=true //no perameters, include in every search
// &addRecipeInformation=true //no perameters, include in every search
// &maxCarbs=100 (grams) if userinput (NaN) {write red error message next to input field}
// &minProtein=10 (grams) include above 'if' statement for all intiger text returns from user ^^^^^
// &maxCalories=800 (grams)
// &maxFat=100 (grams)
// &maxSaturatedFat=100 (grams)
// &minFiber=0 (grams)
// &maxSugar=100 (grams)
// &maxSodium=100 (milligrams)
///////////////////////////////////////////HOW TO ACCESS RESULTS, WHICH TO USE//////////////////////////////////////////////////////////////////
//// title: data.results[i].title
//// Cook + Prep Time: data.results[i].readyInMinutes
///  Source URL: data.results[i].sourceUrl  (need to create in shortened hyperlink like make title clickable)
///  Picture of FOOD: data.results[i].image
///  Servings: data.results[i].servings
///  Healthscore: data.results[i].healthScore  (results are /100[outof 100])
///////////////////////////////////////NUTRITION INFO BELOW (DV = Daily Value %/////////////////////////////////////////////
//// "Bad":
////  -Calories : data.bad[0].amount (DV%: data.bad[0].percentOfDailyNeeds [follows same format for every ingredient daily value %])
////  -Fat:   data.bad[1].amount
////  -Sat Fat: data.bad[2].amount
////  -Carbs: data.bad[3].amount
////  -Cholesterol: data.bad[5].amount
///   -Sodium: data.bad[6].amount
///   "Good":
///   -Protein: data.good[0].amount
///   -Fiber: data.good[6].amount
///   -

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "6e62526b2bmsh6ea8d6b04968f6dp1bf673jsn462c96ed6e67",
//     "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
//   },
// };

// userInput = "pasta";
// userInput2 = "italian";

// fetch(
//   "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=" +
//     userInput +
//     "&cuisine=" +
//     userInput2 +
//     "",
//   options
// )
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });
//     recipeId = data.results[0].id;
//     const set2 = {
//       method: "GET",
//       headers: {
//         "X-RapidAPI-Key": "6e62526b2bmsh6ea8d6b04968f6dp1bf673jsn462c96ed6e67",
//         "X-RapidAPI-Host":
//           "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
//       },
//     };

//     fetch(
//       "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/" +
//         recipeId +
//         "/information",
//       set2
//     )
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//         console.log(data);
//       })
//       .catch((err) => console.error(err));
//   })
//   .catch((err) => console.error(err));
/////////////////////////////////////////////////////////////BELOW IS NUTRITION INFORMATION FETCH, NEEDS TO HAPPEN WITH USER FETCH REQUEST//////////////////////////////////////////////////////
// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '6e62526b2bmsh6ea8d6b04968f6dp1bf673jsn462c96ed6e67',
//     'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
//   }
// };

// fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/'+recipeID[i]+'/nutritionWidget.json', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
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

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '6e62526b2bmsh6ea8d6b04968f6dp1bf673jsn462c96ed6e67',
// 		'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// fetch('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=biceps', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

/////////////////////////////////////chart skeleton just an example:

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {},
};

const myChart = new Chart(document.getElementById("myChart"), config);
