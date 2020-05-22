const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name = '') {
        super(name);
        this.role = `Manager`;
        this.officeNumber = `${this.officeNumber}`
    }
};

module.exports = Manager;