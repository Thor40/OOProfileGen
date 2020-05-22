const inquirer = require('inquirer');
const Manager = require('./lib/Manager')

function Role() {
    this.roleM = [];
    this.manager;
    this.engineer;
    this.intern;
}

Role.prototype.getRole = function(manager) {
    console.log(`Please fill out the following prompt to build your team!`);
    inquirer
        .prompt([
        {
        type: 'input',
        name: 'name',
        message: 'What is your team managers name? (Required)',
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
            message: 'What is your team managers id number? (Required)',
                validate: id => {
                    if (id) {
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
        message: 'What is your team managers email? (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter the email!');
                    return false
                }
            }
        },
        {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your team managers office number? (Required)',
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log('Please enter the office number!');
                    return false
                }
            }
        }
        ])
        .then(managerData => {
            const pageManager = getName(managerData); 
    
            console.log(`${managerData.name}`);
        });
};

module.exports = Role;

new Role().getRole()
