const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name, gitHub) {
        super(name);
        this.role = `Engineer`;
    }

    getGH() {
        return {
            name: `${this.gitHub}`
        }
    };

};

module.exports = Engineer;