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

///////////PSUEDOCODE://///////////////////////  //NEED event listeners corresponding base functions for: //Navbars(Page switching functions) //submit buttons on searches w/ inputs w/ variable inside to be put into api queries //submit buttons also need to append buttons/lists, input into local storage //if appended buttons are called, lets have them pull from local storage instead of API. why??? // here is why: we will be able to re-plug that data back into our content population function // the data is static. it is not the weather, it does not change.    // we need an option for the user to add the meal they select to the calorie counter // the calorie counter will be coded to save the data of each day and display it on page load. //this way the user can keep track of their caloric intake, we also need an option for them to  // put the calories in manually. the chart will function with moment.js intervals and display current dates.  //only make api calls on respective pages(excec

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
