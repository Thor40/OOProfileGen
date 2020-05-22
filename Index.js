const inquirer = require('inquirer');

function Role() {
    this.roleM = [];
    this.manager;
    this.engineer;
    this.intern;
}

Role.prototype.getRole = function() {
    // console.log(`Please fill out the following prompt to build your team!`);
    inquirer
        .prompt({
        type: 'text',
        name: 'manager',
        message: 'What is your team managers name? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false
                }
            }
        },
        {
        type: 'text',
        name: 'managerEmail',
        message: 'What is your team managers email? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the email!');
                    return false
                }
            }
        },
        {
        type: 'text',
        name: 'managerOfficeNumber',
        message: 'What is your team managers office number? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the office number!');
                    return false
                }
            }
        })
        // .then(({name}) => {
        //     this.name = new Manager(name);
        // });
};

new Role().getRole();