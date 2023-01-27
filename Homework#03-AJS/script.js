/*
Exercise 2
Create a button When the button is clicked, call the StarWars api for the first person.
Print the person name in an h1 tag.
Print the person stats in a table:

Height
Weight
Eye color
Hair color
URL: https://swapi.dev/api/people/1
NOTE: JQuery will autmatically parse this call (js will not).
*/

let BASE_URL = "https://swapi.dev/api/people/1";

let h1Name = document.getElementById("nameH1");
let table = document.getElementById("tbody");
let button = document.getElementById("btn");

let nameH1 = document.getElementById("nameH1");

async function getDataFromAPI() {
  const response = await fetch(BASE_URL);
  const result = await response.json();
  renderData(result);
}

function renderData(starWars) {
  nameH1.innerText = "";
  nameH1.innerText = `${starWars.name}`;

  table.innerHTML = "";

  let tr = document.createElement("tr");
  let tdHeight = document.createElement("td");
  let tdWeight = document.createElement("td");
  let tdEyeColor = document.createElement("td");
  let tdHairColor = document.createElement("td");

  tdHeight.append(starWars.height);
  tdWeight.append(starWars.mass);
  tdEyeColor.append(starWars.eye_color);
  tdHairColor.append(starWars.hair_color);

  table.appendChild(tr);
  tr.appendChild(tdHeight);
  tr.appendChild(tdWeight);
  tr.appendChild(tdEyeColor);
  tr.appendChild(tdHairColor);
}

button.addEventListener("click", getDataFromAPI);
