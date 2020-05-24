const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let manager;
let employee;
let tData = [];

getManager = async () => {
    console.log(`Please fill out the following prompt to build your team!`);
    const result = await inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your team title?',
            validate: title_1 => {
                if (title_1) {
                    return true;
                }
                else {
                    console.log('Please enter your team title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'nameM',
            message: `What is your manager's name?`,
            validate: name_1 => {
                if (name_1) {
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
            name: 'idM',
            message: 'What is your team managers id number?',
            validate: idM_1 => {
                if (idM_1) {
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
            name: 'emailM',
            message: 'What is your team managers email?',
            validate: emailM_1 => {
                if (emailM_1) {
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
            name: 'officeNumberM',
            message: 'What is your team managers office number?',
            validate: officeNumberM_1 => {
                if (officeNumberM_1) {
                    return true;
                }
                else {
                    console.log('Please enter the office number!');
                    return false;
                }
            }
        }
    ]);
    let $manager = new Manager(result.nameM, result.idM, result.emailM, result.officeNumberM);
    manager = $manager;
    console.log(manager);
    getRole();
};

const getRole = role => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'confirmAdd',
            message: 'Would you like to add addition team members?',
            choices: ['Engineer', 'Intern', 'Done'],
        }
    ])
    .then(role => {
        console.log(role.confirmAdd)
        if(role.confirmAdd === 'Engineer') {
            getEng()
        } else if (role.confirmAdd === `Intern`) {
            getInt()
        } else {
            return role
        }
    })
};

const getEng = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `What is your engineers's name?`,
                validate: name => {
                    if (name) {
                        return true;
                    } else {
                        console.log('Please enter your name!');
                        return false
                    }
                }
        },
        {
            type: 'input',
            name: 'id',
            message: `What is your engineers's id number?`,
                validate: idM => {
                    if (idM) {
                        return true;
                    } else {
                        console.log('Please enter a valid ID!');
                        return false
                    }
                }
            },
        {
            type: 'input',
            name: 'email',
            message: `What is your engineers's email?`,
                validate: emailM => {
                    if (emailM) {
                        return true;
                    } else {
                        console.log('Please enter the email!');
                        return false
                    }
                }
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'Provide employee GitHub Username',
        }
    ])
    .then((result) => {
        let $engineer = new Engineer(result.name, result.id, result.email, result.gitHub)
        engineer = $engineer
        console.log(engineer)
            getRole();
    });
};

const getInt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `What is your Intern's name?`,
                validate: name => {
                    if (name) {
                        return true;
                    } else {
                        console.log('Please enter your name!');
                        return false
                    }
                }
        },
        {
            type: 'input',
            name: 'id',
            message: `What is your Intern's id number?`,
                validate: idM => {
                    if (idM) {
                        return true;
                    } else {
                        console.log('Please enter a valid ID!');
                        return false
                    }
                }
            },
        {
            type: 'input',
            name: 'email',
            message: `What is your Intern's email?`,
                validate: emailM => {
                    if (emailM) {
                        return true;
                    } else {
                        console.log('Please enter the email!');
                        return false
                    }
                }
        },
        {
            type: 'input',
            name: 'school',
            message: `Provide Intern's school`,
        }
    ])
    .then((result) => {
        let $intern = new Intern(result.name, result.id, result.email, result.school)
        intern = $intern
        console.log(intern)
            getRole();
    });
};

getManager();
