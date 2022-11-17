const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const helper = require('./src/Helper');

const objList = [];

inquirer.prompt([
    {
        type: "input",
        message: "Please enter the name of the Manager.",
        name: "name",
    },
    {
        type: "input",
        message: "Please enter the enployee id.",
        name: "id",
    },
    {
        type: "input",
        message: "Please enter the email address.",
        name: "email",
    },
    {
        type: "input",
        message: "Please enter the office number.",
        name: "officeNumber",
    }
])
.then(answers => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    helper.addManager(manager);
    menu();
});

function engnieerQuestionnaire(){
    return inquirer.prompt([
        {
            type: "input",
            message: "Please enter the name of the engineer.",
            name: "name",
        },
        {
            type: "input",
            message: "Please enter the eyployee id.",
            name: "id",
        },
        {
            type: "input",
            message: "Please enter the email address",
            name: "email",
        },
        {
            type: "input",
            message: "Please enter the github url",
            name: "url",
        },
    ])
    .then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.url);
        helper.addEngineer(engineer);
        menu();
    });
}

function internQuestionnaire(){
    return inquirer.prompt([
        {
            type: "input",
            message: "Please enter the name of the intern.",
            name: "name",
        },
        {
            type: "input",
            message: "Please enter the eyployee id.",
            name: "id",
        },
        {
            type: "input",
            message: "Please enter the email address.",
            name: "email",
        },
        {
            type: "input",
            message: "Please enter the school name.",
            name: "school",
        },
    ])
    .then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        helper.addIntern(intern);
        menu();
    });
}

function menu(){
    return inquirer.prompt([
        {
            type: "list",
            message: "Pick an option: ",
            choices: ["Add Engineer", "Add Intern", "Exit"],
            name: "option",
        }
    ])
    .then( ({option}) => {
        switch(option){
            case "Add Engineer":
                engnieerQuestionnaire();
                break;
            case "Add Intern":
                internQuestionnaire();
                break;
            case "Exit":
                return;
        }
    });
}
