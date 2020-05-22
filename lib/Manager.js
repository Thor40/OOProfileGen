const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name = '') {
        super(name);
    }
    getRole() {
        return {
            id: this.id,
            email: this.email,
            officeNumber: this.officeNumber
        };
    };
}

module.exports = Manager;