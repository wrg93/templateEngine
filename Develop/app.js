const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const workers = [];

//first inquiry which leads to a switch of functions
AddNewWorker = () => {

  inquirer.prompt([
    {
      type: "list",
      message: "Which worker would you like to add?",
      choices: ["Manager", "Engineer", "Intern", "None"],
      name: "WorkerEntry"
    }
  ])
  .then(answer => {
    switch(answer.WorkerEntry) {
      case "Manager":
        MakeManager();
        break;
      case "Engineer":
        MakeEngineer();
        break;
      case "Intern":
        MakeIntern();
        break;
      case "None":
        CreateDoc();
        break;

    }
  })
}


//MakeManager function
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
      //based on answers pass constructor
      let worker = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
      workers.push(worker);

      AddNewWorker();
    })
}

//Make Intern
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
      //based on answers pass constructor
      let worker = new Intern(answer.name, answer.id, answer.email, answer.school);
      workers.push(worker);

      AddNewWorker();
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
      //based on answers pass constructor
      let worker = new Engineer(answer.name, answer.id, answer.email, answer.github);
      workers.push(worker);

      AddNewWorker();
    }) 
}

//Create HTML dog based on collected array. 
CreateDoc = () => {
  console.log(workers);
  var doc = render (workers);
  fs.writeFile(outputPath, doc, err => {
    if (err) console.log (err);
  })
}

//initiates process
AddNewWorker();