// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

    class Intern extends Employee {
        constructor(school){
        if (!school) {
            throw new Error("You are missing the school name.");
        }
        this.school = school;
        super(name,id,email);
    }

    getSchool(){

    };

    getRole(){

    };
}

module.exports = Intern;