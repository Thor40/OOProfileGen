const Employee = require('../lib/Employee')

test('creates employee object', () => {
    const employee = new Employee('Nick');

    expect(employee.name).toBe('Nick');
    expect(player.id).toEqual(expect.any(Number));
    expect(player.email).toEqual(expect.any(String));
})