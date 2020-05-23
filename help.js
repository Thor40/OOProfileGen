const inquirer = require('inquirer');
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
};
class Engineer extends Employee {
    constructor(name, id, email, role) {
        super();
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
};
let employee;
let engineer;
getEmployeeData = () => {
    inquirer.prompt([ 
        {
            type: 'input',
            name: 'name',
            message: 'What is your name',
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
            name: 'id',
            message: 'What is your id',
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
            name: 'email',
            message: 'What is your email',
                validate: title => {
                    if (title) {
                        return true;
                    } else {
                        console.log('Please enter your team title!');
                        return false
                    }
                }
        },
    ]).then((result) => {
        let $employee = new Employee(result.name, result.id, result.email);
        employee = $employee
        console.log(employee)
        getEngineer();
    })
}
getEngineer = () => {
    inquirer.prompt([ 
        {
            type: 'input',
            name: 'name',
            message: 'What is your name',
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
            name: 'id',
            message: 'What is your id',
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
            name: 'email',
            message: 'What is your email',
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
            name: 'role',
            message: 'What is your role',
                validate: title => {
                    if (title) {
                        return true;
                    } else {
                        console.log('Please enter your team title!');
                        return false
                    }
                }
        },
    ]).then((result) => {
        let $engineer = new Engineer(result.name, result.id, result.email, result.role);
        engineer = $engineer
        console.log(engineer)
    })
}
getEmployeeData();