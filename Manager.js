// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

    class Manager extends Employee {
        constructor(officeNumber){
        if (!officeNumber) {
            throw new Error("You are missing the school name.");
        }
        this.officeNumber = officeNumber;
        super(name,id,email);
    }

    getRole(){

    };
}

module.exports = Manager;