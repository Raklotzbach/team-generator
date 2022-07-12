const Employee=require("./employee")
class Manager extends Employee {
    constructor (first, last, email, id, title, officeNumber) {
        super(first, last, email, id,)
        this.title = "manager"
        this.officeNumber = Math.floor(Math.random()*100)
    }
    getOfficeNumber() {
        console.log(`The office is ${this.officeNumber}`)
    }
    makeHTML() {
        return`
        <h1>${this.first}</h1>
        `
    }
}

const managerOne = new Manager("Bob", "Wilson") 
console.log(managerOne)
managerOne.getOfficeNumber()
console.log(managerOne.makeHTML())
module.exports = Manager