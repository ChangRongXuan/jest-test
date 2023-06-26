import { sum } from '../func/sum';

// Clears the database and adds some testing data.
// Jest will wait for this promise to resolve before running tests.
// beforeAll(() => {
//   // Clears the database and adds some testing data.
//   // Jest will wait for this promise to resolve before running tests.
//   console.log('執行 beforeEach');
// });

// --------------------------------------------------------

test('basic test case', () => {
  expect(sum(1, 2)).toBe(3);
});

// --------------------------------------------------------

test('example test with timeout', () => {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}, 500);

// --------------------------------------------------------

test.skip('test skip', () => {
  expect(inchesOfSnow()).toBe(0);
});

// --------------------------------------------------------

test.todo('to do test case');

// --------------------------------------------------------

test.each([
  { a: 1, b: 1, expected: 2 },
  { a: 1, b: 2, expected: 3 },
  { a: 2, b: 1, expected: 3 },
])('.add($a, $b)', ({ a, b, expected }) => {
  expect(a + b).toBe(expected);
});

// --------------------------------------------------------

test.failing('it is not equal', () => {
  expect(5).toBe(6); // this test will pass
});

test.failing('it is equal', () => {
  expect(10).toBe(10); // this test will fail
});

// --------------------------------------------------------
