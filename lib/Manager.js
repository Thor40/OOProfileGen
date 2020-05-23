const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name = '') {
        super(name);
        this.role = `Manager`;
    }
    
    getON() {
        return {
            name: `${this.officeNumber}`
        }
    };
};

module.exports = Manager;