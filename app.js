const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const outputArray = []
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)


const managerQuestions = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the team manager's name?",
            name: "managerName",
        },
        {
            type: "input",
            message: "What is the team manager's id?",
            name: "managerId",
        },
        {
            type: "input",
            message: "what is the team manager's email?",
            name: "managerEmail",
        },
        {
            type: "input",
            message: "What is the team manager's office number?",
            name: "officeNumber",
        },

    ])
        .then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
            outputArray.push(manager);
            console.log(outputArray);
            employeeType()
        })

}
managerQuestions()

const employeeType = () => {
    inquirer.prompt([
        {
            type: "list",
            message: "Which type of team member would you like to add?",
            name: "employeeType",
            choices: ["Engineer", "Intern", "None"],
        },
    ])
        .then(answer => {
            if (answer.employeeType === "Intern") {
                internQuestions();
            } else if
                (answer.employeeType === "Engineer") {
                engineerQuestions();
            }

            if (answer.employeeType === "None") {

                fs.writeFile(outputPath, render(outputArray), (err) => {
                    if (err) throw err;
                    console.log('Your file was sucessfully recorded');
                });
            }

        })
}


const engineerQuestions = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the engineer's name?",
            name: "engineerName",
        },
        {
            type: "input",
            message: "What is the engineer's id#?",
            name: "engineerId",
        },
        {
            type: "input",
            message: "What is the engineer's email address?",
            name: "engineerEmail",

        },
        {
            type: "input",
            message: "What is the engineer's github username?",
            name: "engineerGithub",
        },

    ])
        .then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            outputArray.push(engineer);
            console.log(outputArray);
            employeeType()
        })
}
const internQuestions = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your intern's name?",
            name: "internName",
        },
        {
            type: "input",
            message: "What is your intern's id?",
            name: "internId",
        },
        {
            type: "input",
            message: "What is your intern's email address?",
            name: "internEmail",
        },
        {
            type: "input",
            message: "What is your intern's school?",
            name: "internSchool",
        },
    ])
        .then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            outputArray.push(intern);
            console.log(outputArray);
            employeeType()

        })
}
















// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
