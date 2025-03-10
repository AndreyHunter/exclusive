import { calcDiscount, sum } from './index';

describe('Numbers', () => {
  describe('Calculate discount', () => {
    it('calculate discount', () => {
      expect(calcDiscount(100, 80)).toBe(20);
    });

    it('returns old-price if discount is 0', () => {
      expect(calcDiscount(100, 0)).toBe(100);
    });
  });

  it('sum', () => {
    expect(sum(1, 1)).toBe(2);
  });
});
