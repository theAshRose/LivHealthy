$(document).ready(function () {
  $("select").formSelect();
}); //to get dropdowns working for food selection
$("#myChart").hide();

///////////////////////////////////////////////////////////fetch seperated by long lines like this, below is recipe API(use sparingly, its not free)
/////////////Chris's test with hardcoded variables"
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "f6140f9bd5mshf947ce29f8d6a4ap1406e5jsn9e459eb842b0",
//     "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
//   },
// };

// var title = "";
// var cuisine = "italian";
// var excludeCuisine = "";
// var diet = "";
// var intolerances = "dairy";
// var excludeIng = "eggs";
// var type = "main";
// var maxCarbs = 50;
// var minProtein = 10;
// var maxCalories = 1000;
// var maxFat = 50;
// var maxSatFat = 50;
// var MinFiber = 5;
// var maxSodium = 100;
// var maxSugar = 50;

// fetch(
//   "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=" +
//     title +
//     "&cuisine=" +
//     cuisine +
//     "&excludeCuisine" +
//     excludeCuisine +
//     "&diet=" +
//     diet +
//     "&intolerances=" +
//     intolerances +
//     "& excludeIngredients=" +
//     excludeIng +
//     "&type=" +
//     type +
//     "&instructionsRequired=true&addRecipeInformation=true&sort=calories&sortDirection=asc&maxCarbs=" +
//     maxCarbs +
//     "&minProtein=" +
//     minProtein +
//     "&maxCalories=" +
//     maxCalories +
//     "&maxFat=" +
//     maxFat +
//     "&maxSaturatedFat=" +
//     maxSatFat +
//     "&minFiber=" +
//     MinFiber +
//     "&maxSodium=" +
//     maxSodium +
//     "&maxSugar=" +
//     maxSugar +
//     "",
//   options
// )
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
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

////  -ALL NUTRIENTS: data.results[i].nutrition.nutrients[j].amount
//                    data.results[i].nutrition.nutrients[j].name    (cycle through all) (DV%: data.bad[0].percentOfDailyNeeds [follows same format for every ingredient daily value %])


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
