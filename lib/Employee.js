class Employee {
    constructor(name = '') {
        this.name = name;
    }

    getName() {
        return {
            name: `${this.name}`
        }
    };

    getID() {
        return {
            id: `${this.id}`
        }
    }
    getEmail() {
        return {
            email: `${this.email}`
        }
    };

};

module.exports = Employee;

console.log(new Employee)