import Validator from '../app';

test('validate 0-9 a-z _ -', () => {
  const username = 'example1for_unit-test';
  expect(Validator.validateUsername(username)).toBeTruthy();
});

test.each([
  ['example%test'],
  ['example!test'],
  ['example;test'],
  ['example.test']])(
  ('spec`s should be falsy'),
  (str) => {
    expect(Validator.validateUsername(str)).toBeFalsy();
  },
);

test('validate 3 digits', () => {
  const username = 'example123for_unit-test';
  expect(Validator.validateUsername(username)).toBeTruthy();
});

test('4 digits should be falsy', () => {
  const username = 'example1234for_unit-test';
  expect(Validator.validateUsername(username)).toBeFalsy();
});

test.each([
  ['1example1for_unit-test'],
  ['example1for_unit-test2'],
  ['-example1for_unit-test'],
  ['example1for_unit-test-'],
  ['_example1for_unit-test'],
  ['example1for_unit-test_']])(
  ('no specs or digits at begin/start'),
  (str) => {
    expect(Validator.validateUsername(str)).toBeFalsy();
  },
);
