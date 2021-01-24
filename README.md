# TeamProfileGenerator

## Description
My task was to build a Node.js command-line application that takes in information about employees on a software engineering team. With that information, it would then generate an HTML webpage that displays summaries for each person using the terminal. 
## Table of Contents
1. [Description](#description)
2. [Walkthrough Video](#Walkthrough-Video)
3. [Installation](#Installation)
4. [Code Snippet](#code-snippet)
5. [Built with](#built-with)
6. [Licenses](#licenses)
7. [Author](#author)
8. [Questions](#Questions)
9. [Acknowledgements](#acknowledgements)

## Walkthrough Video
[Link to Walkthrough Video](https://drive.google.com/file/d/1Gue_Xc4gLCDanfCfIU2TEGIYzsDtuLCh/view?usp=sharing)

## Installation
First, branch the Github Repo and clone the repo to your local machine. Next, install project dependecies by typing "npm install" into your gitbash terminal. 

 ## Code Snippet
 ```
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
```
This code shows the employee type question function that gives the option to choose either engineer, intern, or none. The none option will call the fs.writefile and render a new html page that displays the information that was collected in the inquirer questions

```
])
        .then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
            outputArray.push(manager);
            console.log(outputArray);
            employeeType()
        })

}

```
This code shows how I push the gathered information (answers) for manager, intern, and engineer into the output array. After gathering the required information I call the employeeType question to either add another employee or select "none" which will render the team html file. 

 ## Built with
- Node
- Gitbash
- Inquirer 
- Jest
- OOP

 ## Licenses
   MIT License

## Author
   Austin Woo

## Questions

- For any questions related to this application, please contact me at: austinwoo123@gmail.com or visit my Github Profile here: https://github.com/austinwoo123
  
## Acknowledgements
- Jerome Chenette (Instructor)
- Manuel Nunes (TA)
- Mahisha Manikandan (TA)
- UC Berkeley Coding Bootcamp

