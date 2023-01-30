/*
Task 1
Create an html page with a table and a button. When the button is clicked show results for the first 10 planets from the Star Wars api. 
The information in the table are:

Planet Name
Population
Climate
Gravity

There should be a function that makes the call to the api for the planets ( should have URL for a parameter ). 
There should be a function that prints planets in to the table 
**API URL: ** https://swapi.dev/api/planets/?page=1

Task 2
After the user clicks the button to get the first 10 planets, a button should be shown below the table that says: NEXT 10. 
When the button is clicked you should make another call and get the next 10 planets and change the table contents with information about the next 10 planets. 
After the next 10 planets are shown the button NEXT 10 should disapear and a new button PREVIOUS 10 shouldappear.
The previous button should return the first 10 planets in the table and hide the PREVIOUS 10 button and show the NEXT 10 button.
**API URL: ** https://swapi.dev/api/planets/?page=2
*/

const btn = document.getElementById("btnFirst");
const table = document.getElementById("table");
const btnNext = document.getElementById("btnNext");
const BASE_URL1 = "https://swapi.dev/api/planets/?page=1";
const BASE_URL2 = "https://swapi.dev/api/planets/?page=2";

async function callToApi(url) {
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
  createTable(result.results);
}

function createTable(planets) {
  table.innerHTML = "";
  for (let planet of planets) {
    let row = document.createElement("tr");
    row.innerHTML = "";

    let tdPlanetName = document.createElement("td");
    let tdPopulation = document.createElement("td");
    let tdClimate = document.createElement("td");
    let tdGravity = document.createElement("td");

    tdPlanetName.append(planet.name);
    tdPopulation.append(planet.population);
    tdClimate.append(planet.climate);
    tdGravity.append(planet.gravity);

    row.appendChild(tdPlanetName);
    row.appendChild(tdPopulation);
    row.appendChild(tdClimate);
    row.appendChild(tdGravity);

    table.appendChild(row);
  }
}

function createNexBtn() {
  const nextBtn = document.createElement("button");
  nextBtn.innerText = "Show Next 10 Planets";
  btnNext.appendChild(nextBtn);
  nextBtn.addEventListener("click", () => {
    callToApi(BASE_URL2);
    createPrevBtn();
    nextBtn.style.display = "none";
  });
}

function createPrevBtn() {
  const prevBtn = document.createElement("button");
  prevBtn.innerText = "Show Previous 10 Planets";
  btnNext.appendChild(prevBtn);
  prevBtn.addEventListener("click", () => {
    callToApi(BASE_URL1);
    createNexBtn();
    prevBtn.style.display = "none";
  });
}

btn.addEventListener("click", () => {
  callToApi(BASE_URL1);
  btn.style.visibility = "hidden";
  createNexBtn();
});
