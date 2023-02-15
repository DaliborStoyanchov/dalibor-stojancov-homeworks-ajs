class Academy {
  constructor(name, students, subjects, start, end) {
    this.academyName = name;
    this.students = students;
    this.subjects = subjects;
    this.startDate = start;
    this.endDate = end;
    this.numberOfClasses = subjects.length * 10;
  }
  printStudents() {
    console.log(`The students enrolled in "${this.academyName}" academy are: `);
    this.students.forEach((student) => {
      console.log(`- ${student.firstName} ${student.lastName}`);
    });
  }
  printSubjects() {
    console.log(`The subjects of "${this.academyName}" academy are:`);
    this.subjects.forEach((subject) => {
      console.log(
        `- ${subject.title}; Is this subject elective? Answer: ${subject.isElective}!`
      );
    });
  }
}

class Students {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;
  }
  startAcademy(academy) {
    this.academy = academy;
    studentsArray.push(this.academy);
  }
  startSubject(subject) {
    this.currentSubject = subject;
    subjectsArray.push(this.subject);
  }
}

class Subjects {
  constructor(title, isElective, academy, students) {
    this.title = title;
    this.numberOfClasses = 10;
    this.isElective = isElective;
    this.academy = academy;
    this.students = students;
  }
  overrideClass(numberOfClasses) {
    if (numberOfClasses < 3) {
      console.log("The number of classes cannot be smaller than 3!");
      return;
    } else {
      this.numberOfClasses = numberOfClasses;
    }
  }
}

let studentsArray = [];
let subjectsArray = [];

let student001 = new Students("Bob", "Plisky", 18);
let student002 = new Students("Michael", "Jordan", 33);
let student003 = new Students("Nikola", "Tesla", 28);
studentsArray.push(student001);
studentsArray.push(student002);
studentsArray.push(student003);

let academy001 = new Academy(
  "SEDC - Code Academy",
  studentsArray,
  subjectsArray,
  new Date("2023-01-01"),
  new Date("2023-12-31")
);
let academy002 = new Academy(
  "FINKI",
  studentsArray,
  subjectsArray,
  new Date("2022-07-07"),
  new Date("2026-08-22")
);

let subject001 = new Subjects("HTML and CSS", false, academy001, studentsArray);
let subject002 = new Subjects("JavaScript", false, academy001, studentsArray);
let subject003 = new Subjects("TypeScript", true, academy001, studentsArray);

subjectsArray.push(subject001);
subjectsArray.push(subject002);
subjectsArray.push(subject003);

academy001.printStudents();
academy001.printSubjects();

student001.startAcademy(academy001);
student001.startSubject(subject001);

student002.startAcademy(academy002);
student002.startSubject(subject001);

student003.startAcademy(academy001);
student003.startSubject(subject003);
