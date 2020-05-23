const Engineer = require('../lib/Engineer')

test('creates a engineer object', () => {
    const engineer = new Engineer('Nick');

    expect(engineer.getName()).toHaveProperty('name');
    expect(engineer.getID()).toHaveProperty('id');
    expect(engineer.getEmail()).toHaveProperty('email');
    expect(engineer.getGH()).toHaveProperty('gitHub');
});