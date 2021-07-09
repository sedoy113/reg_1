import Character from '../Character';

test('create Character name < 2', () => {
  expect(() => new Character('a', 'Bowman')).toThrowError(new Error('Имя должно быть не менее 2 и не более 10 символов'));
});

test('create Character name > 10', () => {
  expect(() => new Character('a1234567890', 'Bowman')).toThrowError(new Error('Имя должно быть не менее 2 и не более 10 символов'));
});

test('create Character type Error', () => {
  expect(() => new Character('Rob', 'Warlock')).toThrowError(new Error('Такого класса нет'));
});

test('create Character name ok', () => {
  const character = new Character('Rob', 'Magician');
  expect(character.name).toBe('Rob');
});

test('create Character type ok', () => {
  const character = new Character('Rob', 'Magician');
  expect(character.type).toBe('Magician');
});

test('create Character ok', () => {
  const character = new Character('Rob', 'Magician');
  const result = {
    name: 'Rob',
    type: 'Magician',
    health: 100,
    level: 1,
  };
  expect(character).toMatchObject(result);
});
