// TODO: Write code to define and export the Employee class
class Employee{
    constructor(name,id,email){
        if (!name) {
            throw new Error("You are missing the name.");
        }
        if (!id) {
            throw new Error("You are missing the id.");
        }
        if (!email) {
            throw new Error("You are missing the email.");
        }

    }  
}