const Employee = require('../lib/Employee')

test('creates employee object', () => {
    const employee = new Employee(`Nick`, `id`, `email`);

    expect(employee.name).toEqual('Nick');
    expect(employee.id).toEqual('id');
    expect(employee.email).toEqual('email');
})