const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager(`Nick`, `id`, `email`, 'officeNumber');

    expect(employee.getName()).toEqual('Nick');
    expect(employee.getID()).toEqual('id');
    expect(employee.getEmail()).toEqual('email');
    expect(manager.getON()).toHaveProperty('officeNumber');
});