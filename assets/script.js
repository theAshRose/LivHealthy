let homeFoodList = $("#fav-food-btns");
let homeFoodImg = $("#homeFoodImg");
$(document).ready(function () {
  $("#homeFoodShowcase").hide();
  $("select").formSelect();
}); //to get dropdowns working for food selection
// $("#myChart").hide();

//----Show-Hide-Sections----

//----Home Tag----
$("#homeTag").on("click", function () {
  $("#homePage").show();
  $("#foodPage-wrapper").hide();
  $("#exercisePage").hide();
  $("#chartPage").hide();
});

$("#headerLogo").on("click", function () {
  $("#homePage").show();
  $("#foodPage-wrapper").hide();
  $("#exercisePage").hide();
  $("#chartPage").hide();
});

//----Recipe Section----
$("#recipes").on("click", function () {
  $("#foodPage-wrapper").show();
  $("#homePage").hide();
  $("#exercisePage").hide();
  $("#chartPage").hide();
});

//----Exercise Section----
$("#exercises").on("click", function () {
  $("#exercisePage").show();
  $("#foodPage-wrapper").hide();
  $("#homePage").hide();
  $("#chartPage").hide();
});

//----End Show-Hide----

// $("#foodResult") card id to be modified upon population of data

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

// let userQuery = [];
// let finalQuery = [
//   "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=" +
//     userQuery +
//     "&instructionsRequired=true&addRecipeInformation=true&sort=calories&sortDirection=asc",
// ];

// var searchButton = $("#searchButtonLeft");
// searchButton.on("click", function (event) {
//   event.preventDefault();

//   console.log("button pressed");
//   let userQuery = [];

var exerciseSelection = $("#exercise-search-result");

function getExerciseApi(muscle, difficulty, type) {
  const exerciseOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6e62526b2bmsh6ea8d6b04968f6dp1bf673jsn462c96ed6e67",
      "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
    },
  };

  var muscle;
  var type;
  var difficulty;
  //fetching exercise API
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
      // console.log(data[0].instructions);
      displayExerciseCards(data);
      console.log(data);
    });

  function displayExerciseCards(data) {
    console.log(data);
    for (i = 0; i < data.length; i++) {
      var exerciseCol = $("<div>");
      var exerciseCard = $("<div>");
      var exerciseBackground = $("<div>");
      var exerciseTextColor = $("<div>");
      var exerciseTitle = $("<span>");
      var exerciseListParent = $("<ul>");
      var exerciseInstruction = $("<p>");
      var exerciseListChildren = $("<li>");
      var children1 = $("<li>");
      var children2 = $("<li>");

      var exerciseDifficulty = data[i].difficulty;
      var exerciseName = data[i].name;
      var exerciseInstructions = data[i].instructions;
      var exerciseEquipment = data[i].equipment;

      exerciseCol.addClass("row");
      exerciseCard.addClass("col s12 m6");
      exerciseBackground.addClass("card blue-grey darken-1");
      exerciseTextColor.addClass("card-content white-text");
      exerciseTitle.addClass("card-title");
      exerciseInstruction.attr("id", "instructionCard");
      exerciseListParent.attr("id", "exrCardList");
      exerciseListChildren.addClass("exerciseLi");

      exerciseSelection.append(exerciseCol);
      exerciseCol.append(exerciseCard);
      exerciseCard.append(exerciseBackground);
      exerciseBackground.append(exerciseTextColor);
      exerciseTextColor.append(exerciseTitle);
      exerciseTitle.append(exerciseListParent);

      // we start list here :p
      exerciseListParent.append(exerciseListChildren);
      exerciseListParent.append(children1);
      exerciseListParent.append(children2);
      exerciseListParent.append(exerciseInstruction);
      exerciseListParent.children().eq(0).text(exerciseName);
      exerciseListParent
        .children()
        .eq(1)
        .text("difficulty: " + exerciseDifficulty);
      exerciseListParent
        .children()
        .eq(2)
        .text("equipment: " + exerciseEquipment);
      exerciseInstruction.text(exerciseInstructions);
    }
  }
}

$("#searchButton").on("click", function (event) {
  event.preventDefault();
  var muscle = $("#muscle-dropdown").val();
  if (muscle) {
    muscle;
  } else {
    muscle = "chest";
  }
  var type = $("#type-dropdown").val();
  if (type) {
    type;
  } else {
    type = "strength";
  }
  var difficulty = $("#difficulty-dropdown").val();
  if (difficulty) {
    difficulty;
  } else {
    difficulty = "beginner";
  }

  console.log(type);
  console.log(difficulty);
  console.log(muscle);
  getExerciseApi(muscle, difficulty, type);
});

// }
// paths to get the data on the screen are below
// data[i].difficulty; //difficulty of exercise
// data[i].name; //name of exercise
// data[i].instructions; //detailed summary of how to do exercise
// data[i].equipment; //equipment the user will need

/////////////////////////////////////chart skeleton just an example:

// const labels = ["January", "February", "March", "April", "May", "June"];

// const data = {
//   labels: labels,
//   datasets: [
//     {
//       label: "My First dataset",
//       backgroundColor: "rgb(255, 99, 132)",
//       borderColor: "rgb(255, 99, 132)",
//       data: [0, 10, 5, 2, 20, 30, 45],
//     },
//   ],
// };

// const config = {
//   type: "line",
//   data: data,
//   options: {},
// };

// const myChart = new Chart(document.getElementById("myChart"), config);

///////////FEATURES TO ADD AFTER MVP
// save buttons on search page that delete after pressed
//

//////////////////////////////////////////////////////////fetch seperated by long lines like this, below is recipe API(use sparingly, its not free)

function getRecipeAPI(userFinalInput) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6e62526b2bmsh6ea8d6b04968f6dp1bf673jsn462c96ed6e67",
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };
  fetch(userFinalInput, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      displayRecipeCards(data);
    });
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
    var carbs =
      data.results[i].nutrition.nutrients[3].amount + "g Carbohydrates";
    var satFat =
      data.results[i].nutrition.nutrients[4].amount + "g Saturated Fat";
    var fiber = data.results[i].nutrition.nutrients[5].amount + " g Fiber";
    var sodium = data.results[i].nutrition.nutrients[6].amount + " g Sodium";
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
let userQuery = [];
let finalQuery = [
  "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=" +
    userQuery +
    "&instructionsRequired=true&addRecipeInformation=true&sort=calories&sortDirection=asc",
];

var searchButton = $("#searchButtonLeft");
searchButton.on("click", function (event) {
  event.preventDefault();

  console.log("button pressed");
  let userQuery = [];

  let recipeName = $("#foodName").val();
  if (recipeName) {
    userQuery += recipeName;
  }

  let cuisine = $("#cuisine-dropdown").val();
  if (cuisine) {
    userQuery += "&cuisine=" + cuisine;
    console.log(userQuery);
  }

  let diet = $("#diet-dropdown").val();
  if (diet) {
    userQuery += "&diet=" + diet;
    console.log(userQuery);
  }

  let intolerances = $("#allergy-dropdown").val();
  if (intolerances) {
    userQuery += "&intolerances=" + intolerances;
    console.log(userQuery);
  }

  let carbs = $("#maxCarbsInput").val();
  if (carbs && !NaN) {
    userQuery += "&maxCarbs=" + carbs;
    console.log(userQuery);
  } else userQuery += "&maxCarbs=9999";

  let protein = $("#minProteinInput").val();
  if (protein && !NaN) {
    userQuery += "&minProtein=" + protein;
    console.log(userQuery);
  } else userQuery += "&minProtein=0";

  let cal = $("#maxCaloriesInput").val();
  if (cal && !NaN) {
    userQuery += "&maxCalories=" + cal;
    console.log(userQuery);
  } else userQuery += "&maxCalories=9999";

  let fat = $("#maxFatInput").val();
  if (fat && !NaN) {
    userQuery += "&maxFat=" + fat;
    console.log(userQuery);
  } else userQuery += "&maxFat=9999";

  let satFat = $("#maxSatFatInput").val();
  if (satFat && !NaN) {
    userQuery += "&maxSaturedFat=" + satFat;
    console.log(userQuery);
  } else userQuery += "&maxSaturatedFat=9999";

  let fiber = $("#minFiberInput").val();
  if (fiber && !NaN) {
    userQuery += "&minFiber=" + fiber;
    console.log(userQuery);
  } else userQuery += "&minFiber=0";

  let sodium = $("#maxSodiumInput").val();
  if (sodium && !NaN) {
    userQuery += "&maxSodium=" + sodium;
    console.log(userQuery);
  } else userQuery += "&maxSodium=9999";

  let sugar = $("#maxSugarInput").val();
  if (sugar && !NaN) {
    userQuery += "&maxSugar=" + sugar;
    console.log(userQuery);
  } else userQuery += "&maxSugar=400";

  let resultNumber = $("#resultsNumber").val();
  if (resultNumber < 50 && !NaN) {
    userQuery += "&number=" + resultNumber;
    console.log(userQuery);
  } else userQuery += "&number=50";

  let finalQuery = [
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=" +
      userQuery +
      "&instructionsRequired=true&addRecipeInformation=true&sort=calories&sortDirection=asc",
  ];

  getRecipeAPI(finalQuery);
});

$("#food-search-results").on("click", ".btn-small", function (event) {
  event.preventDefault();
  let clickedButton = $(event.target);
  let savedRecipe = JSON.parse(localStorage.getItem("favoritedRecipe")) || [];
  let storedRecipe = {
    id: clickedButton.closest(".col").attr("id"),
    img: clickedButton.closest(".col").children().eq(0).children().eq(0)[0]
      .firstElementChild.currentSrc,
    title: clickedButton
      .closest(".col")
      .children()
      .eq(1)
      .children()
      .eq(0)
      .text(),
    recipeLink: clickedButton
      .closest(".col")
      .children()
      .eq(1)
      .children()
      .eq(1)
      .children()
      .eq(0)[0].href,
    servings: clickedButton
      .parents()
      .eq(1)
      .children()
      .eq(0)
      .text()
      .replace(/[^0-9]/g, ""),
    healthScore: clickedButton
      .parents()
      .eq(1)
      .children()
      .eq(1)
      .text()
      .replace(/[^0-9]/g, ""),
    calories: parseInt(clickedButton.parents().eq(1).children().eq(3).text()),
    fat: parseInt(clickedButton.parents().eq(1).children().eq(4).text()),
    satFat: parseInt(clickedButton.parents().eq(1).children().eq(5).text()),
    carbs: parseInt(clickedButton.parents().eq(1).children().eq(6).text()),
    sugar: parseInt(clickedButton.parents().eq(1).children().eq(7).text()),
    sodium: parseInt(clickedButton.parents().eq(1).children().eq(8).text()),
    protein: parseInt(clickedButton.parents().eq(1).children().eq(9).text()),
    fiber: parseInt(clickedButton.parents().eq(1).children().eq(10).text()),
  };
  window.localStorage.clear(savedRecipe);
  savedRecipe.push(storedRecipe);
  localStorage.setItem("favoritedRecipe", JSON.stringify(savedRecipe));
  let favFoodBtn = $("<li></li>");
  favFoodBtn.text(
    clickedButton.closest(".col").children().eq(1).children().eq(0).text()
  );
  favFoodBtn.attr("id", clickedButton.closest(".col").attr("id"));
  favFoodBtn.addClass("waves-effect waves-light green btn-large");
  $("#fav-food-btns").append(favFoodBtn);
});

$(document).ready(function () {
  let savedRecipe = JSON.parse(localStorage.getItem("favoritedRecipe")) || [];
  savedRecipe.forEach(function (food) {
    localStorage.setItem("" + food.id, JSON.stringify(food));
    let favFoodBtn = $("<li></li>");
    favFoodBtn.addClass("waves-effect waves-light green btn-large");
    favFoodBtn.attr("id", food.id);
    favFoodBtn.text(food.title);
    homeFoodList.append(favFoodBtn);
  });
});

$("#fav-food-btns-wrapper").on("click", ".btn-large", function (event) {
  event.preventDefault();
  $("#homeFoodShowcase").show();
  let frisbee = $(event.target);
  console.log(frisbee.attr("id"));
  let pulledRecipe = JSON.parse(localStorage.getItem("" + frisbee.attr("id")));
  homeFoodImg.attr("src", pulledRecipe.img);
  $("#homeFoodTitle1").text(pulledRecipe.title);
  $("#homeFoodTitle2").text(pulledRecipe.title);
  $("#homeFoodLink").attr("href", pulledRecipe.recipeLink);
  $("#homeHealthScore").text("Healthscore: " + pulledRecipe.healthScore);
  $("#homeServings").text(pulledRecipe.servings + " Servings");
  $("#homeCaloriesLi").text(pulledRecipe.calories + " Calories");
  $("#homeFatLi").text(pulledRecipe.fat + "g Fat");
  $("#homeSatFatLi").text(pulledRecipe.satFat + "g Saturated Fat");
  $("#homeCarbsLi").text(pulledRecipe.carbs + " Carbohydrates");
  $("#homeSugarLi").text(pulledRecipe.sugar + "g Sugar");
  $("#homeSodiumLi").text(pulledRecipe.sodium + "mg Sodium");
  $("#homeProteinLi").text(pulledRecipe.protein + "g Protein");
});

//////chart code////

var nutritionalValuesObject = [
  {
    day: "Monday",
    nutritionalValues: {
      calories: 200,
      Fat: 5,
      SaturatedFat: 543,
      carbohydrates: 34,
      sugar: 234,
      sodium: 5555,
      protein: 4534,
    },
  },
];
var data = {
  // labels: [
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday",
  //   "Sunday",
  // ],
  datasets: [
    {
      label: "Calories Eaten",
      backgroundColor: "green",
      borderColor: "green",
      data: nutritionalValuesObject,
      parsing: {
        xAxisKey: "day",
        yAxisKey: "nutritionalValues.totalCalories",
      },
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

const myChart = new Chart(document.getElementById("myChart"), config);

function updateChart(option) {
  console.log(option.value);
  myChart.data.datasets[0].parsing.yAxisKey = `nutritionalValues.${option.value}`;
  myChart.update();
}
