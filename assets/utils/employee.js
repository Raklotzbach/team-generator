const { createPromptModule } = require("inquirer")

class Employee {
    constructor(first, last) {
        this.first = first
        this.last = last
        this.email = `${this.first}.${this.last}@company.com`
        this.id = Math.floor(Math.random()*100)
        this.title = "employee"
    }
}
const employeeOne = new Employee ("John", "Smith")
console.log(employeeOne)
module.exports = Employee
