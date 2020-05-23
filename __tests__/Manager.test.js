const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager(`Nick`, `id`, `email`, 'officeNumber');

    expect(manager.getName()).toEqual('Nick');
    expect(manager.getID()).toEqual('id');
    expect(manager.getEmail()).toEqual('email');
    expect(manager.getON()).toEqual('officeNumber');
});