// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

    class Engineer extends Employee {
        constructor(github){
        if (!github) {
            throw new Error("You are missing the github username.");
        }
        this.github = github;
        super(name,id,email);
    }

    getGithub(){

    };

    getRole(){

    };
}

module.exports = Engineer;