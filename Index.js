const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./dist/template.js')

let roles = []

let getManager = () => {
    console.log(`Please fill out the following prompt to build your team!`);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `What is your manager's name?`,
            validate: name => {
                if (name) {
                    return true;
                }
                else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your team managers id number?',
            validate: id => {
                if (id) {
                    return true;
                }
                else {
                    console.log('Please enter a valid ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your team managers email?',
            validate: email => {
                if (email) {
                    return true;
                }
                else {
                    console.log('Please enter the email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your team managers office number?',
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                }
                else {
                    console.log('Please enter the office number!');
                    return false;
                }
            }
        }
    ]).then(a => {
        let newManager = new Manager(a.name, a.id, a.email, a.officeNumber)
        roles.push(newManager)
        getRole();
    });

};

const getRole = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'confirmAdd',
            message: 'Would you like to add addition team members?',
            choices: ['Engineer', 'Intern', 'Done'],
        }
    ])
    .then(role => {
        if(role.confirmAdd === 'Engineer') {
            getEng()
        } else if (role.confirmAdd === `Intern`) {
            getInt()
        } else { 
            const pageHTML = generateHTML(roles)
            fs.writeFile('./index.html', pageHTML, err => {
                if(err) throw new Error(err);
            })
        console.log("Check out the new HTML page!")
        }
    })
};

 let getEng = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `What is your engineers's name?`,
            validate: name => {
                if (name) {
                    return true;
                }
                else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: `What is your engineers's id number?`,
            validate: id => {
                if (id) {
                    return true;
                }
                else {
                    console.log('Please enter a valid ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: `What is your engineers's email?`,
            validate: email => {
                if (email) {
                    return true;
                }
                else {
                    console.log('Please enter the email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'Provide employee GitHub Username',
        },
    ]).then(a => {
        let newEngineer = new Engineer(a.name, a.id, a.email, a.gitHub)
        roles.push(newEngineer)
        getRole();
    })
};

let getInt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `What is your Intern's name?`,
            validate: name => {
                if (name) {
                    return true;
                }
                else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: `What is your Intern's id number?`,
            validate: id => {
                if (id) {
                    return true;
                }
                else {
                    console.log('Please enter a valid ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: `What is your Intern's email?`,
            validate: email => {
                if (email) {
                    return true;
                }
                else {
                    console.log('Please enter the email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: `Provide Intern's school`,
        }
    ]).then(a => {
        let newIntern = new Intern(a.name, a.id, a.email, a.school)
        roles.push(newIntern)
        getRole();
    });
};

getManager();
