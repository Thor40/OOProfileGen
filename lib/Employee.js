class Employee {
    constructor(name = '') {
        this.name = name;
        this.id = 1;
        this.email = 'test@gmail.com';
        this.officeNumber = 1;
    }

};

module.exports = Employee;

console.log(new Employee)