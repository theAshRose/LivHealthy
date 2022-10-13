$(document).ready(function () {
  $("select").formSelect();
}); //to get dropdowns working for food selection
$("#myChart").hide();

// $("#foodResult") card id to be modified upon population of data

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

const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6e62526b2bmsh6ea8d6b04968f6dp1bf673jsn462c96ed6e67",
    "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
  },
};

///parameters that will show on page so user can chose which parameers to search by
//name of excerise
// muscle group targeted by the exercise. Possible values are:
//these will al be dropdowns for the user
// abdominals
// abductors
// adductors
// biceps
// calves
// chest
// forearms
// glutes
// hamstrings
// lats
// lowerback middleback
// neck
// quadriceps
// traps
// triceps
var muscle = "biceps";
var type = "strength";
//possible types:
//cardio
// olympic_weightlifting
// plyometrics
// powerlifting
// strength
// stretching
// strongman
var difficulty = "beginner";
//possible difficulties"
// beginner
// intermediate
// expert
fetch(
  "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=" +
    muscle +
    "&difficulty=" +
    difficulty +
    "&type=" +
    type +
    "",
  exerciseOptions
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data[0].instructions);
  });

// paths to get the data on the screen are below
data[i].difficulty; //difficulty of exercise
data[i].name; //name of exercise
data[i].instructions; //detailed summary of how to do exercise
data[i].equipment; //equipment the user will need

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

///////////FEATURES TO ADD AFTER MVP
// save buttons on search page that delete after pressed
//

///////////////////////////////////////////////////////////fetch seperated by long lines like this, below is recipe API(use sparingly, its not free)
/////////////Chris's test with hardcoded variables"
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f6140f9bd5mshf947ce29f8d6a4ap1406e5jsn9e459eb842b0",
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
};

var title = "";
var cuisine = "";
var excludeCuisine = "";
var diet = "";
var intolerances = "";
var excludeIng = "";
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
    "&number=50" +
    "",
  options
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    displayRecipeCards(data);
  });

/////function to dynamically generate recipe cards///
var foodResultsSection = $("#food-search-results");
////project psudocode/////////
var displayRecipeCards = function (data) {
  for (i = 0; i < 40; i++) {
    var recipeCol = $("<div>");
    var recipeCard = $("<div>");
    var cardImageContainer = $("<div>");
    var cardRecipeImage = $("<img>");
    var cardContent = $("<div>");
    var recipeTitle = $("<span>");
    var cardArrow = $("<i>");
    var recipeParagragh = $("<p>");
    var anchorLink = $("<a>");
    var linkFont = $("<em>");
    var cardReveal = $("<div>");
    var cardRevealTitle = $("<span>");
    var cardRevealIcon = $("<i>");
    var cardRevealList = $("<ul>");
    var cardRevealBullet = $("<li>");
    var cardRevealbulletTwo = $("<li>");
    var cardRevealParagraph = $("<p>");
    var cardRevealServe = $("<sm>");
    var cardRevealServeItalic = $("<em>");
    var cardNutritionBullet1 = $("<li>");
    var cardNutritionBullet2 = $("<li>");
    var cardNutritionBullet3 = $("<li>");
    var cardNutritionBullet4 = $("<li>");
    var cardNutritionBullet5 = $("<li>");
    var cardNutritionBullet6 = $("<li>");
    var cardNutritionBullet7 = $("<li>");
    var cardNutritionBullet8 = $("<li>");
    var cardNutritionBullet9 = $("<li>");
    var cardSave = $("<a>");

    var foodPic = data.results[i].image;
    var foodTitle = data.results[i].title;
    var recipeLink = data.results[i].sourceUrl;
    var foodRevealTitle = data.results[i].title;
    var servings = "Servings:" + data.results[i].servings;
    var healthscore = "Healthscore:" + data.results[i].healthScore;
    var calories = "Calories:" + data.results[i].nutrition.nutrients[0].amount;
    var protein =
      "Protein:" + data.results[i].nutrition.nutrients[1].amount + "g";
    var fat = "fat" + data.results[i].nutrition.nutrients[2].amount + "g";
    var carbs = "Carbs:" + data.results[i].nutrition.nutrients[3].amount + "g";
    var satFat =
      "Saturated Fat:" + data.results[i].nutrition.nutrients[4].amount + "g";
    var fiber = "fiber:" + data.results[i].nutrition.nutrients[5].amount + "g";
    var sodium =
      "Sodium:" + data.results[i].nutrition.nutrients[6].amount + "g";
    var sugar = "Sugar:" + data.results[i].nutrition.nutrients[7].amount + "g";

    recipeCol.addClass("col 3");
    recipeCard.addClass("card");
    recipeCard.attr("id", "foodResult0");
    cardImageContainer.addClass(
      "card-image waves-effect waves-block waves-light"
    );
    cardRecipeImage.addClass("activator");
    cardRecipeImage.attr("id", "foodCardImage0");
    cardRecipeImage.attr("src", foodPic);
    cardContent.addClass("card-content");
    recipeTitle.addClass("card-title activator grey-text text-darken-4");
    recipeTitle.attr("id", "foodCardTitle1-0");
    cardArrow.addClass("material-icons right");
    anchorLink.attr("id", "foodCardLink0");
    anchorLink.attr("href", recipeLink);
    cardReveal.addClass("card-reveal");
    cardRevealTitle.addClass("card-title grey-text text-darken-4");
    cardRevealTitle.attr("id", "foodCardTitle2-0", foodRevealTitle);
    cardRevealIcon.addClass("material-icons right");
    cardRevealList.attr("id", "internalCard0");
    cardRevealBullet.addClass("servingsCard");
    cardRevealbulletTwo.addClass("healthscoreCard");
    cardRevealParagraph.addClass("card-per-serving");
    cardNutritionBullet1.addClass("caloriesCard");
    cardNutritionBullet2.addClass("fatCard");
    cardNutritionBullet3.addClass("satFatCard");
    cardNutritionBullet4.addClass("carbsCard");
    cardNutritionBullet5.addClass("sugarCard");
    cardNutritionBullet6.addClass("sodiumCard");
    cardNutritionBullet7.addClass("proteinCard");
    cardNutritionBullet8.addClass("fiberCard");
    cardSave.addClass("waves-effect green waves-light btn-small");

    recipeTitle.text(foodTitle);
    linkFont.text("Recipe Source Link");
    cardRevealTitle.text(foodTitle);
    cardRevealBullet.text(servings);
    cardRevealbulletTwo.text(healthscore);
    cardRevealServeItalic.text("per serving:");

    cardNutritionBullet1.text(calories);
    cardNutritionBullet2.text(fat);
    cardNutritionBullet3.text(satFat);
    cardNutritionBullet4.text(carbs);
    cardNutritionBullet5.text(sugar);
    cardNutritionBullet6.text(sodium);
    cardNutritionBullet7.text(protein);
    cardNutritionBullet8.text(fiber);
    cardSave.text("save");

    foodResultsSection.append(recipeCol);
    recipeCol.append(recipeCard);
    recipeCard.append(cardImageContainer);
    cardImageContainer.append(cardRecipeImage);
    cardContent.insertAfter(recipeCard);
    cardContent.append(recipeTitle);
    recipeTitle.append(cardArrow);
    cardArrow.append(recipeParagragh);
    recipeParagragh.insertAfter(recipeTitle);

    recipeParagragh.append(anchorLink);
    anchorLink.append(linkFont);
    cardReveal.insertAfter(cardContent);
    cardReveal.append(cardRevealTitle);
    cardRevealTitle.append(cardRevealIcon);
    cardRevealIcon.append(cardRevealList);
    cardRevealList.insertAfter(cardRevealTitle);

    cardRevealList.append(cardRevealBullet);
    cardRevealbulletTwo.insertAfter(cardRevealBullet);
    cardRevealParagraph.insertAfter(cardRevealbulletTwo);
    cardRevealParagraph.append(cardRevealServe);
    cardRevealServe.append(cardRevealServeItalic);
    cardNutritionBullet1.insertAfter(cardRevealParagraph);
    cardNutritionBullet2.insertAfter(cardNutritionBullet1);
    cardNutritionBullet3.insertAfter(cardNutritionBullet2);
    cardNutritionBullet4.insertAfter(cardNutritionBullet3);
    cardNutritionBullet5.insertAfter(cardNutritionBullet4);
    cardNutritionBullet6.insertAfter(cardNutritionBullet5);
    cardNutritionBullet7.insertAfter(cardNutritionBullet6);
    cardNutritionBullet8.insertAfter(cardNutritionBullet7);
    cardNutritionBullet9.insertAfter(cardNutritionBullet8);
    cardNutritionBullet9.append(cardSave);
  }
};
///////end off dynamically generated cards//
