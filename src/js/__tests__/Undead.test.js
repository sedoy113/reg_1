import Character from '../Undead';

test('create Character ok', () => {
  const character = new Character('Rob', 'Undead');
  const result = {
    name: 'Rob',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(character).toMatchObject(result);
});
