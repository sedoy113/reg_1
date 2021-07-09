import Character from '../Zombie';

test('create Character ok', () => {
  const character = new Character('Rob', 'Zombie');
  const result = {
    name: 'Rob',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(character).toMatchObject(result);
});
