const inquirer = require('inquirer');

const getRole = () => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmManager',
            message: 'Are you the lead of this team?',
            default: true,
            validate: confirmManager => {
                if (!confirmManager) {
                    console.log('Please find a project manager!');
                } else {
                    return true
                }
            }
        },
        {
            type: 'input',
            name: 'manager',
            message: 'What is your name? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false
                }
            },
            when: ({ confirmManager }) => confirmManager
        }
    ])
};

getRole();