const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager(`Nick`, `id`, `email`, 'officeNumber');

    expect(manager.name).toEqual('Nick');
    expect(manager.id).toEqual('id');
    expect(manager.email).toEqual('email');
    expect(manager.officeNumber).toEqual('officeNumber');
});