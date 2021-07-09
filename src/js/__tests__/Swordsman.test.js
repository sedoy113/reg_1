import Character from '../Swordsman';

test('create Character ok', () => {
  const character = new Character('Rob', 'Swordsman');
  const result = {
    name: 'Rob',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(character).toMatchObject(result);
});
