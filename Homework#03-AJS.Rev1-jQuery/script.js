/*
Exercise 2 - jQuerry
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

let h1Name = document.getElementById("nameH1");
let table = document.getElementById("tbody");
let button = document.getElementById("btn");
let nameH1 = document.getElementById("nameH1");

$(document).ready(function () {
  document.getElementById("btn").addEventListener("click", function () {
    $.ajax({
      url: "https://swapi.dev/api/people/1",

      success: function (response) {
        console.log("Request successful!");
        console.log(response);

        nameH1.innerText = "";
        nameH1.innerText = `${response.name}`;

        table.innerHTML = "";

        let tr = document.createElement("tr");
        let tdHeight = document.createElement("td");
        let tdWeight = document.createElement("td");
        let tdEyeColor = document.createElement("td");
        let tdHairColor = document.createElement("td");

        tdHeight.append(response.height);
        tdWeight.append(response.mass);
        tdEyeColor.append(response.eye_color);
        tdHairColor.append(response.hair_color);

        table.appendChild(tr);
        tr.appendChild(tdHeight);
        tr.appendChild(tdWeight);
        tr.appendChild(tdEyeColor);
        tr.appendChild(tdHairColor);
      },

      error: function (response) {
        console.log("The request has failed: " + response.status);
        console.log(response.responseText);
      },
    });
  });
});
