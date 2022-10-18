# Liv-Healthy app

    (https://thedomconrad.github.io/LivHealthy/)

![](assets/Images/search-recipe.gif)

## Description

This is the Liv-Healthy interactive web site build as a collaboration between four web developers to act as a guide to develop a better nutrition and fitness regimen. This is accomplished by providing inspirational quotes with search capabilities for recipes and fitness routines with a current emphasis on the former search functions.

When a user saves a recipe it is populated to a chart. Each subsequent recipe information is added to a chart until the user decides to reset the information.

The main function of the site is a web based third party APIs, parse the data and use it the page. We designed the search using the APIs to give the user parameters to narrow down the results and filter out unwanted results. 

## Technologies and Tools

    To build this site we used the following technologies 

        Html
        Javascript
        Materialize 1.0.0 CSS Framework and CSS 
        Chart.js
        jQuery
        Google Fonts

    Third Party APIs

        Exercises API by API Ninjas: (https://api-ninjas.com/api/exercises)
        Spoonacular API: (https://spoonacular.com/food-api)
        pquotes rapid API: (https://rapidapi.com/primisign-pBrt_l-Weeu/api/pquotes/details)

## the Code!

The most challenging part of LivHealthy for the team was learning and implimenting new technology on the fly. 
Below is an prime example of that: Chart.js implementation. We not only managed to sucessfully impliment Chart.js according 
to our project goals, but managed to add functionality above and beyond what was required. This, we are proud of, so enjoy our code snippet of Chart.js updating AND saving data for the user -while allowing user input only to clear said data.

```
        $("#homeNutrients").on("click", "#eat-me", function (event) {
        event.preventDefault();
        updateChartData(event);
});

    console.log($("#homeHealthScore"));
    const myChart = new Chart(document.getElementById("myChart"), config);

    updateChartData() {
        let storedChart = JSON.parse(localStorage.getItem("storedChart")) || [0 ,0, 0, 0, 0, 0];
  
        let calories = storedChart[0];
        let fat = storedChart[1];
        saturatedFat = storedChart[2];
        let carbohydrates = storedChart[3];
        let sugar = storedChart[4];
        let protein = storedChart[5];

    myChart.data.datasets[0].data[0] = calories += parseInt(
        $("#homeCaloriesLi").text()
    );
    myChart.data.datasets[0].data[1] = fat += parseInt(
        $("#homeFatLi").text()
    );
    myChart.data.datasets[0].data[2] = saturatedFat += parseInt(
        $("#homeSatFatLi").text()
    );
    myChart.data.datasets[0].data[3] = carbohydrates += parseInt(
        $("#homeCarbsLi").text()
    );
    myChart.data.datasets[0].data[4] = sugar += parseInt(
        $("#homeSugarLi").text()
    );
    myChart.data.datasets[0].data[6] = protein += parseInt(
        $("#homeProteinLi").text()
    );

    storedChart = myChart.data.datasets[0].data
    localStorage.setItem("storedChart", JSON.stringify(storedChart))
    myChart.update();
}

    $(document).ready(function () {
        let storedChart = JSON.parse(localStorage.getItem("storedChart")) || [0, 0, 0, 0, 0, 0];
        myChart.data.datasets[0].data = storedChart;
        myChart.update();
    })

    $("#delete-me-chart").on("click", function (event) {
    event.preventDefault()
    let storedChart = [0, 0, 0, 0 ,0 ,0]
    myChart.data.datasets[0].data = storedChart
    localStorage.removeItem("storedChart")
    myChart.update()
})

```        

## User Stories
        
    AS A parent
    I WANT to adapt a positive mindset
    SO THAT I may live longer

    AS A User
    I WANT Overcome a sedentary lifestyle
    SO THAT I may be healthier

    AS A User
    I WANT Find food options that fit my diet
    SO THAT I may be healthier

    AS A User
    I WANT To find exercises that fit my current ability
    SO THAT I can be more energetic and nimble.

    AS A User
    I WANT To be given suggestions if I can’t choose.
    SO THAT I may find guidance towards healthy activities and nutrition options

## Authors

    -Dominic Conradson GitHub: (https://github.com/theDomConrad)
    -Chris Gibson GitHub: (https://github.com/chrischarlesgibson)
    -Aaron Socher GitHub: (https://github.com/AMESocker)
    -Angel Matias GitHub: (https://github.com/robogf)



