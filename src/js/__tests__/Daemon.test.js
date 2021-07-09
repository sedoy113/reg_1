import Character from '../Daemon';

test('create Character ok', () => {
  const character = new Character('Rob', 'Daemon');
  const result = {
    name: 'Rob',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(character).toMatchObject(result);
});
