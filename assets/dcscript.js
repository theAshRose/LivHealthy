$("#food-search-results").on("click", ".btn-small", function (event) {
    alert("working")
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
////////////////////////////////////////////////////////////////////
  // var UniqueCardId = data.results[i].id;
  // var foodPic = data.results[i].image;
  // var foodTitle = data.results[i].title;
  // var recipeLink = data.results[i].sourceUrl;
  // var foodRevealTitle = data.results[i].title;
  // var servings = "Servings: " + data.results[i].servings;
  // var healthscore = "Healthscore: " + data.results[i].healthScore;
  // var calories = data.results[i].nutrition.nutrients[0].amount + " Calories" ;
  // var protein = data.results[i].nutrition.nutrients[1].amount + "g Protein";
  // var fat = data.results[i].nutrition.nutrients[2].amount + "g Fat";
  // var carbs = data.results[i].nutrition.nutrients[3].amount + "g Carbohydrates";
  // var satFat = data.results[i].nutrition.nutrients[4].amount + "g Saturated Fat";
  // var fiber = data.results[i].nutrition.nutrients[5].amount + "g Fiber";
  // var sodium = data.results[i].nutrition.nutrients[6].amount + "g Sodium";
  // var sugar = data.results[i].nutrition.nutrients[7].amount + " g Sugar";
