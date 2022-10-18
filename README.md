# Liv-Healthy app

## Description

Here we have a wonderful, wonderful weather app. This app delivers weather data to the user for a selected city. [Here is a link to the application](https://thedomconrad.github.io/weather-reader1/)
A user may view todays weather along with a 5 day forecast.

## How to use

Simply enter the name of the city and click "submit". The current weather along with a 5 day forecast will be displayed! You may keep entering cities and a list of clickable buttons will aggregate on the left. You may revisit selected cities' weather at any time and if you refresh the page your list will persist! Enjoy :)

## Screenshot of app

![screenshot](./assets/screenshot/ss.png)

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

function updateChartData() {
  let storedChart = JSON.parse(localStorage.getItem("storedChart")) || [0 ,0, 0, 0, 0, 0];
  
  let calories = storedChart[0];
  let fat = storedChart[1];
  let saturatedFat = storedChart[2];
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

## Author Links
---[Linkedin](https://www.linkedin.com/in/dominic-conradson-76638b172/)---
[GitHub](https://github.com/theDomConrad/)---
[Portfolio](https://thedomconrad.github.io/Dominic-Conradson-Portfolio/)---
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

## The Journey:

Learning new skills is a part of any development. Here are links to our blog posts regarding skills learned for LivHealthy:

[How to use Chart.js by Dominic Conradson](https://medium.com/@them.and.us.2013/bb5a0d9ff750)
