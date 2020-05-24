const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name);
        this.name = name;
        this.id = id;
        this.email = email;
        this.gitHub = gitHub;
        this.role = `Engineer`;
    }
};

module.exports = Engineer;