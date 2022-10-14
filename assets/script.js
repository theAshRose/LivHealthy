$(document).ready(function () {
  $("select").formSelect();
}); //to get dropdowns working for food selection
$("#myChart").hide();

//----Show-Hide-Sections----

//----Home Tag----
$("#homeTag").on("click", function () {
  $("#homePage").show();
  $("#foodPage-wrapper").hide();
  $("#exercisePage").hide();
});

$("#headerLogo").on("click", function () {
  $("#homePage").show();
  $("#foodPage-wrapper").hide();
  $("#exercisePage").hide();
});

//----Recipe Section----
$("#recipes").on("click", function () {
  $("#foodPage-wrapper").show();
  $("#homePage").hide();
  $("#exercisePage").hide();
});

//----Exercise Section----
$("#exercises").on("click", function () {
  $("#exercisePage").show();
  $("#foodPage-wrapper").hide();
  $("#homePage").hide();
});

//----End Show-Hide----

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
var displayQuote = $("#quote");
var displayAuthor = $("#author");
const optionsQ = {
  method: "POST",
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Key": "6e62526b2bmsh6ea8d6b04968f6dp1bf673jsn462c96ed6e67",
    "X-RapidAPI-Host": "pquotes.p.rapidapi.com",
  },
  body: '{"topic":"health"}',
};
/*
fetch("https://pquotes.p.rapidapi.com/api/quote", optionsQ)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(data.quote);

    displayQuote.text(data.quote);

    displayAuthor.text("-" + data.by);
  });
*/
// fetch('https://pquotes.p.rapidapi.com/api/quote', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response.quote +" by " +response.by)) //response.quote is the quote, response.by is the author
// 	.catch(err => console.error(err));

//////////////////////////////////////////////////////////below is excercise///////////////////////////////////////////////////////////////////////////////////////////////////////

// const exerciseOptions = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "6e62526b2bmsh6ea8d6b04968f6dp1bf673jsn462c96ed6e67",
//     "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
//   },
// };

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
// var muscle = "biceps";
// var type = "strength";
//possible types:
//cardio
// olympic_weightlifting
// plyometrics
// powerlifting
// strength
// stretching
// strongman
// var difficulty = "beginner";
//possible difficulties"
// beginner
// intermediate
// expert
// fetch(
//   "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=" +
//     muscle +
//     "&difficulty=" +
//     difficulty +
//     "&type=" +
//     type +
//     "",
//   exerciseOptions
// )
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data[0].instructions);
//   });

// paths to get the data on the screen are below
// data[i].difficulty; //difficulty of exercise
// data[i].name; //name of exercise
// data[i].instructions; //detailed summary of how to do exercise
// data[i].equipment; //equipment the user will need

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

//////////////////////////////////////////////////////////fetch seperated by long lines like this, below is recipe API(use sparingly, its not free)

function getRecipeAPI(
  cuisine,
  diet,
  intolerances,
  maxCarbs,
  minProtein,
  maxCalories,
  maxFat,
  maxSatFat,
  MinFiber,
  maxSodium,
  maxSugar
) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6e62526b2bmsh6ea8d6b04968f6dp1bf673jsn462c96ed6e67",
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };

  var cuisine;
  var diet;
  var intolerances;
  var maxCarbs;
  var minProtein;
  var maxCalories;
  var maxFat;
  var maxSatFat;
  var MinFiber;
  var maxSodium;
  var maxSugar;
  var title = "";
  console.log(cuisine);
  console.log(diet);
  console.log(intolerances);
  console.log(maxCarbs);
  console.log(minProtein);
  console.log(maxCalories);
  console.log(maxFat);
  console.log(maxSatFat);
  console.log(maxSodium);
  console.log(maxSugar);
/*
  fetch(
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=" +
      title +
      "&cuisine=" +
      cuisine +
      "&diet=" +
      diet +
      "&intolerances=" +
      intolerances +
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
    });*/
}
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

    var UniqueCardId = data.results[i].id;
    var foodPic = data.results[i].image;
    var foodTitle = data.results[i].title;
    var recipeLink = data.results[i].sourceUrl;
    var foodRevealTitle = data.results[i].title;
    var servings = "Servings: " + data.results[i].servings;
    var healthscore = "Healthscore: " + data.results[i].healthScore;
    var calories = data.results[i].nutrition.nutrients[0].amount + " Calories";
    var protein = data.results[i].nutrition.nutrients[1].amount + "g Protein";
    var fat = data.results[i].nutrition.nutrients[2].amount + "g Fat";
    var carbs = data.results[i].nutrition.nutrients[3].amount + "g Carbohydrates";
    var satFat = data.results[i].nutrition.nutrients[4].amount + "g Saturated Fat";
    var fiber = data.results[i].nutrition.nutrients[5].amount + "g Fiber";
    var sodium = data.results[i].nutrition.nutrients[6].amount + "g Sodium";
    var sugar = data.results[i].nutrition.nutrients[7].amount + " g Sugar";

    recipeCol.addClass("col 3");
    recipeCol.attr("id", UniqueCardId);
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

//////////event listener for search button/////
var searchButton = $("#searchButtonLeft");
searchButton.on("click", function (event) {
  event.preventDefault();
  // cityInput = cityName.value.trim();
  console.log("button pressed");

  ///extraction users cuisine selection and putting it into the cuisine variable
  var cuisineInput = $("#cuisine-dropdown");
  cuisine = cuisineInput.find(":selected").text();
  console.log(cuisine);
  ///extraction users diet selection and putting it into the diet variable
  var dietInput = $("#diet-dropdown");
  diet = dietInput.find(":selected").text();
  console.log(diet);
  ///extraction users diet selection and putting it into the diet variable
  var intolerancesInput = $("#allergy-dropdown");
  intolerances = intolerancesInput.find(":selected").text();
  console.log(intolerances);

  ///extraction users carb selection and putting it into the maxCarbs variable
  var carbsInput = $("#maxCarbsInput");
  maxCarbs = carbsInput.val();
  console.log(maxCarbs);
  ///extraction users protien selection and putting it into the minprotein variable
  var proteinInput = $("#minProteinInput");
  minProtein = proteinInput.val();
  console.log(minProtein);

  ///extraction users protien selection and putting it into the minprotein variable
  var calorieInput = $("#maxCaloriesInput");
  maxCalories = calorieInput.val();
  console.log(maxCalories);

  ///extraction users maxFatInput selection and putting it into the maxFat variable
  var maxFatInput = $("#maxFatInput");
  maxFat = maxFatInput.val();
  console.log(maxFat);
  ///extraction users satfat selection and putting it into the satfat variable
  var satFatInput = $("#maxSatFatInput");
  maxSatFat = satFatInput.val();
  console.log(maxSatFat);
  ///extraction users fiber selection and putting it into the minfiber variable
  var fiberInput = $("#minFiberInput");
  MinFiber = fiberInput.val();
  console.log(MinFiber);
  ///extraction users sodium selection and putting it into the sodium variable
  var sodiumInput = $("#maxSodiumInput");
  maxSodium = sodiumInput.val();
  console.log(maxSodium);
  ///extraction users sugar selection and putting it into the maxsugar variable
  var sugarInput = $("#maxSugarInput");
  maxSugar = sugarInput.val();
  console.log(maxSugar);
  getRecipeAPI(
    cuisine,
    diet,
    intolerances,
    maxCarbs,
    minProtein,
    maxCalories,
    maxFat,
    maxSatFat,
    MinFiber,
    maxSodium,
    maxSugar
  );
});

$("#food-search-results").on("click", ".btn-small", function (event) {
  event.preventDefault();
  let clickedButton = $(event.target)
  let savedRecipe = {
      img: clickedButton.closest(".col").children().eq(0).children().eq(0)[0].firstElementChild.currentSrc,
      title: clickedButton.closest(".col").children().eq(1).children().eq(0).text(),
      recipeLink: clickedButton.closest(".col").children().eq(1).children().eq(1).children().eq(0)[0].href,
      servings: clickedButton.parents().eq(1).children().eq(0).text().replace(/[^0-9]/g, ""),
      healthScore: clickedButton.parents().eq(1).children().eq(1).text().replace(/[^0-9]/g, ""),
      calories: parseInt(clickedButton.parents().eq(1).children().eq(3).text()),
      fat: parseInt(clickedButton.parents().eq(1).children().eq(4).text()),
      satFat: parseInt(clickedButton.parents().eq(1).children().eq(5).text()),
      carbs: parseInt(clickedButton.parents().eq(1).children().eq(6).text()),
      sugar: parseInt(clickedButton.parents().eq(1).children().eq(7).text()),
      sodium: parseInt(clickedButton.parents().eq(1).children().eq(8).text()),
      protein: parseInt(clickedButton.parents().eq(1).children().eq(9).text()),
      fiber: parseInt(clickedButton.parents().eq(1).children().eq(10).text()),
  }
  localStorage.setItem("" + clickedButton.closest(".col").attr("id"), JSON.stringify(savedRecipe))
  let favFoodBtn = $("<li></li>")
  favFoodBtn.text(clickedButton.closest(".col").children().eq(1).children().eq(0).text())
  favFoodBtn.attr("id", clickedButton.closest(".col").attr("id"))
  favFoodBtn.addClass("waves-effect waves-light green btn-large")
  $("#fav-food-btns").append(favFoodBtn)
});