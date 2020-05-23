const Employee = require('../lib/Employee')

test('creates employee object', () => {
    const employee = new Employee(`Nick`, `id`, `email`);

    expect(employee.getName()).toEqual('Nick');
    expect(employee.getID()).toEqual('id');
    expect(employee.getEmail()).toEqual('email');
})