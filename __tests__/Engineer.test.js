const Engineer = require('../lib/Engineer')

test('creates a engineer object', () => {
    const engineer = new Engineer(`Nick`, `id`, `email`, 'gitHub');

    expect(engineer.getName()).toEqual('Nick');
    expect(engineer.getID()).toEqual('id');
    expect(engineer.getEmail()).toEqual('email');
    expect(engineer.getGH()).toEqual('gitHub');
});