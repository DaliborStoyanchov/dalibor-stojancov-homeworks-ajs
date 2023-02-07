/*
There is a JSON file with students. Make a call to the file and get the following data from it:

All students with an average grade higher than 3
All female student names with an average grade of 5
All male student full names who live in Skopje and are over 18 years old
The average grades of all female students over the age of 24
All male students with a name starting with B and average grade over 2
Use higher order functions to find the answers Link: https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json
*/

const allStudentsBtn = document.getElementById("allStudents");
const avgGrHigherThreeBtn = document.getElementById("avgGrHigherThree");
const femAvgFiveBtn = document.getElementById("femAvgFive");
const malSkAdltBtn = document.getElementById("malSkAdlt");
const femOverTwFourAvgGrBtn = document.getElementById("femOverTwFourAvgGr");
const malBAvgHigherTwoBtn = document.getElementById("malBAvgHigherTwo");
const resultDiv = document.getElementById("resultDiv");

const BASE_URL =
  "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";

let studentArray = [];

async function callToApi() {
  response = await fetch(BASE_URL);
  result = await response.json();
  return result;
}

function renderAllStudents(students) {
  resultDiv.innerHTML = "";
  const allStudentsList = document.createElement("ul");
  for (const student of students) {
    allStudentsList.innerHTML += `
          <li>
              ${student.id}. ${student.firstName} ${student.lastName},
          </li>
      `;
  }
  resultDiv.appendChild(allStudentsList);
}

function renderAvgGrHigherThree(students) {
  resultDiv.innerHTML = "";
  const avgGrHigherThreeHeader = document.createElement("h2");
  const avgGrHigherThreeList = document.createElement("ul");
  let counter = 0;
  for (const student of students) {
    if (student.averageGrade > 3) {
      counter++;
      avgGrHigherThreeHeader.innerText = `Number of students with average grade higher than three is ${counter}. The student list is as fallows: `;
      avgGrHigherThreeList.innerHTML += `
          <li>
              ${student.id}.
              ${student.firstName}
              ${student.lastName},
              Average Grade: ${student.averageGrade}
          </li>
      `;
    }
  }
  resultDiv.appendChild(avgGrHigherThreeHeader);
  resultDiv.appendChild(avgGrHigherThreeList);
}

function renderFemAvgFive(students) {
  resultDiv.innerHTML = "";
  const femAvgFiveHeader = document.createElement("h2");
  const femAvgFiveList = document.createElement("ul");
  let counter = 0;
  for (const student of students) {
    if (student.averageGrade === 5 && student.gender === "Female") {
      counter++;
      femAvgFiveHeader.innerText = `Number of female students with average grade of five is ${counter}. The female student list is as fallows: `;
      femAvgFiveList.innerHTML += `
          <li>
              ${student.id}.
              ${student.firstName}
          </li>
      `;
    }
  }
  resultDiv.appendChild(femAvgFiveHeader);
  resultDiv.appendChild(femAvgFiveList);
}

function renderMalSkAdlt(students) {
  resultDiv.innerHTML = "";
  const malSkAdltHeader = document.createElement("h2");
  const malSkAdltList = document.createElement("ul");
  let counter = 0;
  for (const student of students) {
    if (
      (student.geneder =
        "Male" && student.city === "Skopje" && student.age >= 18)
    ) {
      counter++;
      malSkAdltHeader.innerText = `Number of male adult students from Skopje is ${counter}. The male student list is as fallows: `;
      malSkAdltList.innerHTML += `
          <li>
              ${student.id}.
              ${student.firstName}
              ${student.lastName},
              Age: ${student.age},
          </li>
      `;
    }
  }
  resultDiv.appendChild(malSkAdltHeader);
  resultDiv.appendChild(malSkAdltList);
}

function renderfemOverTwFourAvgGr(students) {
  resultDiv.innerHTML = "";
  const femOverTwFourAvgGrHeader = document.createElement("h2");
  const femOverTwFourAvgGrList = document.createElement("ul");
  let counter = 0;
  for (const student of students) {
    if (student.gender === "Female" && student.age > 24) {
      counter++;
      femOverTwFourAvgGrHeader.innerText = `Number of female students over the age of 24 years is ${counter}. The female student's average grade list is as fallows: `;
      femOverTwFourAvgGrList.innerHTML += `
          <li>
              ${student.id}.
              Age: ${student.age},
              Average Grades: ${student.averageGrade},
          </li>
      `;
    }
  }
  resultDiv.appendChild(femOverTwFourAvgGrHeader);
  resultDiv.appendChild(femOverTwFourAvgGrList);
}

function renderMalBAvgHigherTwo(students) {
  resultDiv.innerHTML = "";
  const malBAvgHigherTwoHeader = document.createElement("h2");
  const malBAvgHigherTwoList = document.createElement("ul");
  let counter = 0;
  for (const student of students) {
    if (
      student.firstName[0] === "B" &&
      student.gender === "Male" &&
      student.averageGrade > 2
    ) {
      counter++;
      malBAvgHigherTwoHeader.innerText = `Number of male students with a name starting with B and average grade is over two is ${counter}. The male student list is as fallows: `;
      malBAvgHigherTwoList.innerHTML += `
          <li>
              ${student.id}.
              ${student.firstName} ${student.lastName},
              Average Grades: ${student.averageGrade},
          </li>
      `;
    }
  }
  resultDiv.appendChild(malBAvgHigherTwoHeader);
  resultDiv.appendChild(malBAvgHigherTwoList);
}

allStudentsBtn.addEventListener("click", async () => {
  studentArray = await callToApi();
  renderAllStudents(studentArray);
});

avgGrHigherThreeBtn.addEventListener("click", async () => {
  studentArray = await callToApi();
  renderAvgGrHigherThree(studentArray);
});

femAvgFiveBtn.addEventListener("click", async () => {
  studentArray = await callToApi();
  renderFemAvgFive(studentArray);
});

malSkAdltBtn.addEventListener("click", async () => {
  studentArray = await callToApi();
  renderMalSkAdlt(studentArray);
});

femOverTwFourAvgGrBtn.addEventListener("click", async () => {
  studentArray = await callToApi();
  renderfemOverTwFourAvgGr(studentArray);
});

malBAvgHigherTwoBtn.addEventListener("click", async () => {
  studentArray = await callToApi();
  renderMalBAvgHigherTwo(studentArray);
});
