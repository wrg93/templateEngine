const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];

//first inquiry which leads to a switch of constructors
AddNewEmployee = () => {

  inquirer.prompt([
    {
      type: "list",
      message: "Which employee would you like to employee?",
      choices: ["Manager", "Engineer", "Intern", "I'm finished"],
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
      case "I'm finished":
        CreateHTML();
        break;

    }
  })
}


//MakeManager constructor
MakeManager = () => {
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
      type: "Input",
      message: "Which office do they manage?",
      name: "officeNumber"
    }
  ])
    .then(answer => {
      let employee = new Manager(answer.name, answer.email, answer.id, answer.officeNumber);
      employees.push(employee);

      AddNewEmployee();
    })
}

//Make Intern Constructor
MakeIntern = () => {
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
      type: "Input",
      message: "Which school do they attend?",
      name: "school"
    }
  ])
    .then(answer => {
      let employee = new Intern(answer.name, answer.email, answer.id, answer.school);
      employees.push(employee);

      AddNewEmployee();
    }) 
}

//Make Engineer Constructor
MakeEngineer = () => {
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
      type: "Input",
      message: "Which is their GitHub Username?",
      name: "github"
    }
  ])
    .then(answer => {
      let employee = new Employee(answer.name, answer.email, answer.id, answer.school);
      employees.push(employee);

      AddNewEmployee();
    }) 
}

CreateHTML = () => {
  console.log(employees);
  var html = render(employees);
  fs.writeFile(outputPath, html, err => {
    if (err) console.log (err);
  })
}

AddNewEmployee();