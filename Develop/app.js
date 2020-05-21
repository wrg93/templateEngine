const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


const employees = [];

firstQuestion = () => {
inquirer.prompt([
  {
    type: "list",
    message: "Would you like to add an Employee?",
    choices: ["Yes", "No"],
    name: "firstQuestion"
  },
])
.then(answer =>{
  switch(answer.firstQuestion){
    case "Yes":
    AddNewEmployee();
    break;
    case "No":
      CreateHTML();
      break;
  }
})
}

firstQuestion();
//first inquiry which leads to a switch of constructors
AddNewEmployee = () => {

  inquirer.prompt([
    {
      type: "Input",
      message: "What is their name?",
      name: "name"
    },
    {
      type: "Input",
      message: "What is their email address?",
      name: "email"
    },
    {
      type: "Input",
      message: "What is their ID number?",
      name: "id"
    },
    {
      type: "list",
      message: "Which employee would you like to employee?",
      choices: ["Manager", "Engineer", "Intern"],
      name: "EmployeeEntry"
    }
  ])
  .then(answer => {
    switch(answer.EmployeeEntry) {
      case "Manager":
        MakeManager();
        break;
      case "Engineer":
        MakeEngineer();
        break;
      case "Intern":
        MakeIntern();
        break;

    }
  })
}


//MakeManager constructor
MakeManager = () => {
  inquirer.prompt([
    {
      type: "Input",
      message: "Which office do they manage?",
      name: "officeNumber"
    }
  ])
    .then(answer => {
    let employee = new Manager(answer.officeNumber);
      employees.push(employee);

      firstQuestion();
    })
}

//Make Intern Constructor
MakeIntern = (employee => {
  inquirer.prompt([
    {
      type: "Input",
      message: "Which school do they attend?",
      name: "school"
    }
  ])
    .then(answer => {
      employee = new Intern(answer.name, answer.id, answer.email, answer.school);
      employees.push(employee);

      firstQuestion();
    }) 
})

//Make Engineer Constructor
MakeEngineer = (employee => {
  inquirer.prompt([

    {
      type: "Input",
      message: "Which is their GitHub Username?",
      name: "github"
    }
  ])
    .then(answer => {
      employee = new Engineer(answer.name, answer.id, answer.email, answer.github);
      employees.push(employee);

      firstQuestion();
    }) 
})

CreateHTML = () => {
  console.log(employees);
  var html = render(employees);
  fs.writeFile(outputPath, html, err => {
    if (err) console.log (err);
  })
}

