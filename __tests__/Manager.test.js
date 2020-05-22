const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const Manager = new Manager('Nick');

    expect(manager.name).toBe('Nick');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toString(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});