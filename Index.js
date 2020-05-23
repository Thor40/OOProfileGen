const inquirer = require('inquirer');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer');

function Role() {
    this.role = [];
    this.engineer;
    this.intern;
}

Role.prototype.buildTeam = function() {
    console.log(`Please fill out the following prompt to build your team!`);
};

Role.prototype.getManager = function() {
    inquirer
        .prompt([
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
            name: 'name',
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
    ]);
};

Role.prototype.getRole = function(tData) {
    if (!tData.role) {
        tData.role = [];
    }
    console.log(`
    =================
    ${this.name} added
    =================
    `)
};
    return inquirer.prompt([
        {
            type: 'list',
            name: 'confirmAdd',
            message: 'Would you like to add addition team members?',
            choices: ['Engineer', 'Intern', 'Done']
        }
    ]).then(rData => {
        tData.role.push(rData);
        if(rData.confirmAdd[0]) {
            return getEng(tData);
        } else if(rData.confirmAdd[1]) {
            return getInt(tData);
        } else {
            return tData;
        }
    });

Role.prototype.getEngineer = function() {
    inquirer
        .prompt([
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
            name: 'nameE',
            message: 'What is your engineers name?',
                validate: nameE => {
                    if (nameE) {
                        return true;
                    } else {
                        console.log('Please enter a name!');
                        return false
                    }
                },
            when: ({ confirmAdd }) => confirmAdd.choices.Engineer
        },
        ])
        .then(promptData => {
            // const template = template(promptData); 
    
            console.log(promptData);
        });
};

module.exports = Role;

new Role().getRole()
