const Employee = require('../lib/Employee')

test('creates employee object', () => {
    const employee = new Employee(`${name}`);

    expect(employee.getName()).toHaveProperty('name');
    expect(employee.getID()).toHaveProperty('id');
    expect(employee.getEmail()).toHaveProperty('email');
})