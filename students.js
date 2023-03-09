let arrayOfStudents = [];

// student constructor
function Student(firstName, lastName, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = address;
}

// function to create student and push to student array
function newStudents(firstName, lastName, address) {
  let newStudent = new Student(firstName, lastName, address);
  arrayOfStudents.push(newStudent);
}

let Ajay = new newStudents("Ajaygopal", "Jayaprakash", "Palakkad");
let Arjun = new newStudents("Arjun", "J", "Palakkad");
let suraj = new newStudents("Suraj", "Kumar", "Coimbatore");
let Abhiram = new newStudents("Abhiram", "N.R", "Thrissur");
let Anuroop = new newStudents("Anuroop", "K", "Kozhikode");
let vishnu = new newStudents("Vishnu", "N.B", "Malappuram");
let sidharth = new newStudents("Sidharth", "R.Nair", "Ernakulam");

// table element get from DOM
let table = document.getElementById("tablebody");

// function to render table with data (rewrite the for loop using forEach)
function renderTable(array) {
  for (let student of array) {
    table.innerHTML += `<tr><td>${student.firstName}</td><td>${student.lastName}</td><td>${student.address}</td></tr>`;
  }
}

renderTable(arrayOfStudents);

// search implementation
function search() {
  let newlist = [];
  let input = document.getElementById("searchbox").value.toLowerCase();
  if (input.length === 0) {
    alert("Enter something to search");
  } else {
    for (let student of arrayOfStudents) {
      if (student.firstName.toLowerCase() === input) {
        newlist.push(student);
      }
    }
    if (newlist.length === 0) {
      alert("Not found");
    } else {
      table.innerHTML = "";
      renderTable(newlist);
    }
  }
}

// function to add new students
function addStudent() {
  let firstName = document.getElementById("first_name").value;
  let lastName = document.getElementById("last_name").value;
  let address = document.getElementById("address").value;
  if (firstName.length === 0 || lastName.length === 0 || address.length === 0) {
    alert("Enter all details");
  } else {
    for (let student of arrayOfStudents) {
      if (
        firstName.toLowerCase() == student.firstName &&
        lastName.toLowerCase() == student.lastName &&
        address.toLowerCase() == student.address
      ) {
        alert("student already exist");
        break;
      } else {
        newStudents(firstName, lastName, address);
        break;
      }
    }
  }
  table.innerHTML = "";
  renderTable(arrayOfStudents);
  document.getElementById("first_name").value = "";
  document.getElementById("last_name").value = "";
  document.getElementById("address").value = "";
}

document.getElementById("search").addEventListener("click", search);

document.getElementById("clearSearch").addEventListener("click", function () {
  document.getElementById("searchbox").value = "";
  table.innerHTML = "";
  renderTable(arrayOfStudents);
});

document.getElementById("submit").addEventListener("click", addStudent);
