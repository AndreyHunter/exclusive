import { sliceString } from './index';

describe('Strings', () => {
  describe('SliceString', () => {
    it('returns clipped string', () => {
      expect(sliceString('Some string', 4)).toBe('Some');
    });

    it('returns clipped string with dots', () => {
      expect(sliceString('Some string', 4, true)).toBe('Some...');
    });

    it('returns passed string if string length equals the given length', () => {
      expect(sliceString('Some', 4)).toBe('Some');
    });

    it('returns original string if string length is less than the given length', () => {
      expect(sliceString('Hi', 4)).toBe('Hi');
    });

    it('returns empty string for empty input', () => {
      expect(sliceString('', 4)).toBe('');
    });
  });
});
