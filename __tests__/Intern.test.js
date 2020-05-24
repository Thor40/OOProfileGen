const Intern = require('../lib/Intern')

test('creates a intern object', () => {
    const intern = new Intern(`Nick`, `id`, `email`, 'school');

    expect(intern.name).toEqual('Nick');
    expect(intern.id).toEqual('id');
    expect(intern.email).toEqual('email');
    expect(intern.school).toEqual('school');
});