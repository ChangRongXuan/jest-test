// toBe toEqual --------------------------------------------

const can1 = {
  flavor: 'grapefruit',
  ounces: 12,
};
const can2 = {
  flavor: 'grapefruit',
  ounces: 12,
};

describe('toBe toEqual Test', () => {
  test('have all the same properties', () => {
    expect(can1).toEqual(can2);
  });
  test('are not the exact same can', () => {
    expect(can1).not.toBe(can2);
  });
});

// string 判斷 ----------------------------------------

test('regex: check if email is valid', () => {
  const email = 'example@example.com';
  expect(email).toMatch(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
});

test('grapefruits are a fruit', () => {
  expect('grapefruits').toMatch('fruit'); //grapefruits 含有 fruit 字串內容
});

// 數字判斷 --------------------------------------------

test('test integer', () => {
  //整數可以使用 toBe 或 toEqual 斷言
  expect(5).toBe(5);
  expect(5).toEqual(5);

  //測試輸出值是否大於期望值(>)
  expect(5).toBeGreaterThan(4);

  //測試輸出值是否大於等於期望值(>=)
  expect(5).toBeGreaterThanOrEqual(5);

  //測試輸出值是否小於期望值(<)
  expect(5).toBeLessThan(6);

  //測試輸出值是否小於期望值(<=)
  expect(5).toBeLessThanOrEqual(5);
});

// 數字判斷 --------------------------------------------

test('Test float', () => {
  //會忽略些微的誤差
  expect(0.1 + 0.2).toBeCloseTo(0.3);
  //需完全相等
  expect(0.1 + 0.2).toBe(0.3);
});

// Array --------------------------------------------

test('For array test in jest', () => {
  let arrA = ['A', 'B', 'C'];

  //檢查陣列內是否含有某值
  expect(arrA).toContain('B');

  //搭配迴圈檢查每個位置都不等於空
  for (let i in arrA) {
    expect(arrA[i]).not.toBe('');
  }
});

// Boolean、undefined、null -------------------------

test('Special value', () => {
  //期望值為 true
  expect(true).toBeTruthy();

  //期望值為 false
  expect(false).toBeFalsy();

  //期望值為 null
  expect(null).toBeNull();

  //期望值為 undefined
  expect(undefined).toBeUndefined();

  //期望值為 undefined 之外的值
  expect(null).toBeDefined();
});
