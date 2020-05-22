const Employee = require('../lib/Employee')

test('creates employee object', () => {
    const employee = new Employee('Nick');

    expect(employee.name).toBe('Nick');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toString(expect.any(String));
})