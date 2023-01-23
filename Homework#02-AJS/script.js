/* Reminder App
Create a reminder app
  There should be:
    1. An input for entering the title
    2. An input for entering priority
    3. An input for color
    4. A textarea for adding a description
    5. A button for adding the reminder
    6. A button for showing all reminders
  When the button for adding is clicked an object needs to be created with the properties 
  from the inputs ( title, priority, color, and description )
  The object should then be added to an array of reminders
  When the button for showing all reminders is clicked it should show a table with title, 
  priority, and description columns
  The title should be the color of the "color" property
*/

let remindersArray = [];

let titleElem = document.getElementById("title");
let priorityElem = document.getElementById("priority");
let colorElem = document.getElementById("color");
let description = document.getElementById("description");
let createReminderBtn = document.getElementById("createRemainderButton");
let showRemainderButton = document.getElementById("showRemainderButton");
let result = document.getElementById("result");

function Reminder(title, priority, color, description) {
  this.title = title;
  this.priority = priority;
  this.color = color;
  this.description = description;
}

createReminderBtn.addEventListener("click", function () {
  remindersArray.push(
    new Reminder(
      titleElem.value,
      priorityElem.value,
      colorElem.value,
      description.value
    )
  );
  titleElem.value = "";
  priorityElem.value = "";
  colorElem.value = "#000000";
  description.value = "";
});

showRemainderButton.addEventListener("click", function () {
  result.innerText = "";
  let table = document.createElement("table");

  let rowHeader = document.createElement("tr");

  let thTitle = document.createElement("th");
  thTitle.innerText = "Title";
  rowHeader.appendChild(thTitle);

  let thPriority = document.createElement("th");
  thPriority.innerText = "Priority";
  rowHeader.appendChild(thPriority);

  let thDescription = document.createElement("th");
  thDescription.innerText = "Description";
  rowHeader.appendChild(thDescription);

  table.appendChild(rowHeader);

  for (const reminder of remindersArray) {
    let trData = document.createElement("tr");

    let tdTitle = document.createElement("td");
    tdTitle.innerText = reminder.title;
    trData.appendChild(tdTitle);

    let tdPriority = document.createElement("td");
    tdPriority.innerText = reminder.priority;
    tdPriority.style.color = reminder.color;
    trData.appendChild(tdPriority);

    let tdDescription = document.createElement("td");
    tdDescription.innerText = reminder.description;
    trData.appendChild(tdDescription);

    table.appendChild(trData);
  }
  result.appendChild(table);
});
