# Liv-Healthy app

[link to deployed app](https://thedomconrad.github.io/LivHealthy/)

## About
This is an app for guidance on living healthy(or, LivHealthy). Here is a place for any individual to visit - searching for detailed recipes and exercises to fit their lifestyle needs and capacity while guided by inspirational, motivating quotes. 

## Why?

Since Covid-19 our world has been more isolated than ever. Isolation can lead to unhealthy habits, ways of thinking and lower quality of life as such. LivHealthy seeks to mitigate the negative health effects of isolation and lack of direction. If you cant make up your mind as to whats for dinner - dont order out: LivHealthy. 


![sample:](./assets/Images/search-recipe.gif)/![](./assets/Images/search-recipe.gif)

## User Stories
Painting the picture of purpouse for our direction:
        
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

## How to use

Simply nagivate to the "Recipes" tab to search for a tasty recipe based on something as simple as a keyword(salad, cake, pizza, potatoe, etc) and/or a specific dietary need such as dairy, gluten, vegan, vegetarian, nut allergy, etc. - one may even specify by amount of nutrients per serving with carbs, protein etc.. Once the user entered their 
requested parameters a list of recipes appear. Livhealthy dynamically generates a list of recipes with a, title, nutrients and a link to detailed instructions on how to cook it.

A user may hit the "save" button attatched to a recipe, that recipe is saved into their local storage within a specific array and then saved into its own unique slot - which gets written into a button on their "home" page(click "home" to view home page). The user may return home to revisit their saved recipes and exercises, view their nutrition facts or instructions and have the option to delete their item. If the user deletes a recipe or exercise their button associated with it dissapears until they search and select it again. 

![Button save feature](./assets/images/button-save.gif)/![](./assets/images/button-save.gif)


Just as one navigates recipes they navigate exercises, simple as that. Albeit short of nutrient values, exercises function in the same way as recipes - except they cant be eaten.

That gets us to our next point; Chart.js:

    Below in "## the Code!" you will see our explaination of chart.js as well as a code snippet, but lets talk about how it interacted with our saved recipes: we didnt pull recipe data from the web to populate and save chart.js - we pulled it from the saved recipes of the users themselves. That make a fun juggle of information using localstorage and the user for us developers of LivHealthy.

## the Code!

The most challenging part of LivHealthy for the team was learning and implimenting new technology on the fly. 
Below is an prime example of that: Chart.js implementation. We not only managed to sucessfully impliment Chart.js according
to project goals, but managed to add functionality above and beyond what was required. This, we are proud of, so enjoy our code snippet of Chart.js updating AND saving data for the user - while allowing user input only to clear said data.


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

 ![Chart in action](./assets/gifs/chart-livHealthy)/![](./assets/gifs/chart-livHealthy)

## Technologies and Tools/Credits

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


## Authors

    -Dominic Conradson GitHub: (https://github.com/theDomConrad)
    -Chris Gibson GitHub: (https://github.com/chrischarlesgibson)
    -Aaron Socher GitHub: (https://github.com/AMESocker)
    -Angel Matias GitHub: (https://github.com/robogf)


## Repo Owner Links
---[Linkedin](https://www.linkedin.com/in/dominic-conradson-76638b172/)---
[GitHub](https://github.com/theDomConrad/)---
[Portfolio](https://thedomconrad.github.io/Dominic-Conradson-Portfolio/)---


## The Journey:

Learning new skills is a part of any development. Here are links to our blog posts regarding skills learned for LivHealthy:

[How to use Chart.js by Dominic Conradson](https://medium.com/@them.and.us.2013/bb5a0d9ff750)









































































































































































































































































