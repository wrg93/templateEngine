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


