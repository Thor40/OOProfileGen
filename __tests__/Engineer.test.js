const Engineer = require('../lib/Engineer')

test('creates a engineer object', () => {
    const engineer = new Engineer(`Nick`, `id`, `email`, 'gitHub');

    expect(engineer.name).toEqual('Nick');
    expect(engineer.id).toEqual('id');
    expect(engineer.email).toEqual('email');
    expect(engineer.gitHub).toEqual('gitHub');
});