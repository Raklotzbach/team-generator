const inquirer = require('inquirer')
const Manager = require("./assets/utils/manager")

inquirer.prompt({
    name: "FirstQuestion", 
    type: "list",
    message: "What type of employee would you like to choose?",
    choices: ["Manager", "Engineer", "Intern"],
})
    .then ((answer) => {
        if (answer.FirstQuestion === "Manager")  {
        console.log("You chose manager") 
     }
    })