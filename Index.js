const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer');

let manager;
let employee;
let tData = [];

getManager = () => {
    console.log(`Please fill out the following prompt to build your team!`);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your team title?',
                validate: title => {
                    if (title) {
                        return true;
                    } else {
                        console.log('Please enter your team title!');
                        return false
                    }
                }
        },
        {
            type: 'input',
            name: 'nameM',
            message: `What is your manager's name?`,
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
            name: 'idM',
            message: 'What is your team managers id number?',
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
            name: 'emailM',
            message: 'What is your team managers email?',
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
            name: 'officeNumberM',
            message: 'What is your team managers office number?',
                validate: officeNumberM => {
                    if (officeNumberM) {
                        return true;
                    } else {
                        console.log('Please enter the office number!');
                        return false
                    }
                }
        }
    ])
    .then((result) => {
        let $manager = new Manager(result.nameM, result.idM, result.emailM, result.officeNumberM)
        manager = $manager
        console.log(manager)
        getRole();
    })
};

const getRole = tData => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmAdd',
            message: 'Would you like to add addition team members?',
            default: true
        }
    ])
    .then(rData => {
        if(rData.confirmAdd) {
            return getMember(tData);}
         else {
            return tData;
        }
    });
};

const getMember = tData => {
    // if (!tData.employees) {
    //     tData.employees = [];
    // }
    // console.log(`
    // ================
    //  Employee added
    // ================
    // `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `What is your employee's name?`,
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
            message: `What is your employee's id number?`,
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
            message: `What is your employee's email?`,
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
            type: 'confirm',
            name: 'confirmGH',
            message: 'Would you like to add a gitHub Username?',
            default: true
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'Provide employee GitHub Username',
            when: ({ confirmGH }) => confirmGH
        },
        {
            type: 'confirm',
            name: 'confirmSch',
            message: 'Would you like to add a school? (Intern)',
            default: true
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'Provide employee school',
            when: ({ confirmSch }) => confirmSch
        },
        {
            type: 'confirm',
            name: 'confirmAdd',
            message: 'Would you like to add addition team members?',
            default: true
        }
    ])
    .then((result) => {
        let $employee = new Manager(result.name, result.id, result.email, result.officeNumber, result.school, result,github)
        employee = $employee
        console.log(employee)
    .then(tData => {
        if(tData.confirmAdd) {
            return getMember(tData);}
         else {
            return tData;
        }
    });
});
};
getManager()
    // .then(getRole)
    // .then(getEngineer(tData))