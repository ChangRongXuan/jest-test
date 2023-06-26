// --------------------------------------------------------

const myBeverage = {
  delicious: true,
  sour: false,
};

describe('nested desc: my beverage', () => {
  describe('check flavour', () => {
    test('is delicious', () => {
      expect(myBeverage.delicious).toBeTruthy();
    });

    test('is not sour', () => {
      expect(myBeverage.sour).toBeFalsy();
    });
  });
});

// describe.each(table) -------------------------------------

describe.each([
  [1, 1, 2],
  [1, 2, 3],
  [2, 2, 4],
])('addition: %i + %i equals %i', (a, b, expected) => {
  // 使用 printf 格式化，%i 表示整數參數
  test('adds two numbers', () => {
    expect(a + b).toBe(expected);
  });
});

// describe.only --------------------------------------------

describe('my beverage', () => {
  test('is delicious', () => {
    expect(myBeverage.delicious).toBeTruthy();
  });

  test('is not sour', () => {
    expect(myBeverage.sour).toBeFalsy();
  });
});

describe('my other beverage', () => {
  // ... will be skipped
});
