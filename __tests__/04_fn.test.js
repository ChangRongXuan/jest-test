// add all jest-extended matchers
import * as matchers from 'jest-extended';
expect.extend(matchers);

// or just add specific matchers
import { toBeArray, toBeSealed } from 'jest-extended';
expect.extend({ toBeArray, toBeSealed });

// 創建一個模擬函數 ------------------------------------------

const mockFunc = jest.fn((x) => x + 1);

test('mockFunc value', () => {
  const test = jest.fn();
  expect(test()).toBe(undefined);
});

// --------------------------------------------------------

test('.mockName()/.getMockName(): 命名', () => {
  const mockFuncName = jest.fn().mockName('test_name');
  console.log(mockFuncName.getMockName());
});

// --------------------------------------------------------

test('mock.calls() mock.lastCall(): 取得傳入 mockFn 的參數', () => {
  mockFunc(1, 2, 3);
  mockFunc('a', 'b');

  console.log(mockFunc.mock.calls);
  console.log(mockFunc.mock.lastCall); //最後一組參數(array)
  // console.log(mockFunc.mock.lastCall[0]);
});

// --------------------------------------------------------

test('mock.results() - type return', () => {
  const customFn = (x) => {
    return x * 2;
  };
  const customFn01 = jest.fn(customFn);

  // const customFn02 = jest.fn((x) => x + 1);

  customFn01(2);
  customFn01(4);

  console.log(customFn01.mock.results); //  [ { type: 'return', value: 4 }, { type: 'return', value: 8 } ]
  console.log(customFn01.mock.results[0].value); // 4
  console.log(customFn01.mock.results[1].value); // 8
});

// --------------------------------------------------------

// TODO: incomplete
test('mock.results() - type throw/incomplete', () => {
  //type: throw
  const mockFnThrow = jest.fn(() => {
    throw new Error('Something went wrong');
  });

  try {
    mockFnThrow();
  } catch (error) {
    console.log(error);
  }

  console.log(mockFnThrow.mock.results);
});

// --------------------------------------------------------

test('mockClear/mockReset/mockRestore', () => {
  const mockFn = jest.fn((x) => x + 1);

  mockFn(2);
  console.log(mockFn.mock.results); //3

  mockFn.mockClear();
  // mockFn.mockReset();

  mockFn(1);
  console.log(mockFn.mock.results);
});

test('mockReturnValue(value), mockReturnValueOnce(value)', () => {
  const mockFn = jest.fn();

  mockFn.mockReturnValueOnce(1);
  //equal to: mockFn.mockImplementation(() => value);

  mockFn();

  console.log(mockFn.mock.results);
});

// --------------------------------------------------------

test('mockResolved / mockRejected', async () => {
  const asyncResolveMock = jest.fn().mockResolvedValue(43);
  //jest.fn().mockImplementation(() => Promise.resolve(43));

  await asyncResolveMock(); // 43

  const asyncRejectMock = jest
    .fn()
    .mockRejectedValue(new Error('Async error message'));
  //jest.fn().mockImplementation(() => Promise.reject(value));

  await asyncRejectMock(); // throws 'Async error message'
});

// --------------------------------------------------------

// TODO: 解釋 withImplementation 何時使用
test('withImplementation', () => {
  const mock = jest.fn(() => 'outside callback');

  mock.withImplementation(
    () => 'inside callback', //fn
    () => {
      //callback fn
      mock(); // 'inside callback'
    }
  );

  //withImplementation 不影響原本的 mock
  mock(); // 'outside callback'
});
