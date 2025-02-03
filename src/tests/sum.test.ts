import { Numbers } from '@utils/index';

test('sums two numbers', () => {
  expect(Numbers.sum(20, 20)).toBe(40);
});
