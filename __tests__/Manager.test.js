const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Nick');

    expect(manager.getName()).toHaveProperty('name');
    expect(manager.getID()).toHaveProperty('id');
    expect(manager.getEmail()).toHaveProperty('email');
    expect(manager.getON()).toHaveProperty('officeNumber');
});