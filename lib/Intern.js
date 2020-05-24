const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name);
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
        this.role = `Intern`;
    }

};

module.exports = Intern;