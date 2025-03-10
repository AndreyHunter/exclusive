import { AxiosError } from 'axios';

import { generateBreadcrumbs, getCategoryName, handleAxiosError } from './index';

describe('Utilities', () => {
  describe('GenerateBreadcrumbs', () => {
    it('returns breadcrumbs correctly', () => {
      expect(generateBreadcrumbs('/electronics/gaming')).toEqual([
        { name: 'Electronics', path: '/electronics' },
        { name: 'Gaming', path: '/electronics/gaming' },
      ]);
    });

    it('returns an empty array when path is empty string', () => {
      expect(generateBreadcrumbs('')).toEqual([]);
    });

    it('returns an empty array for root path', () => {
      expect(generateBreadcrumbs('/')).toEqual([]);
    });

    it('returns correct breadcrumbs when path has unnecessary slash', () => {
      expect(generateBreadcrumbs('//electronics//gaming/')).toEqual([
        { name: 'Electronics', path: '/electronics' },
        { name: 'Gaming', path: '/electronics/gaming' },
      ]);
    });

    it('returns correct path with 1 segment', () => {
      expect(generateBreadcrumbs('/electronics')).toEqual([
        { name: 'Electronics', path: '/electronics' },
      ]);
    });
  });

  describe('GetCategoryName', () => {
    it('returns an empty string for an empty input', () => {
      expect(getCategoryName('')).toBe('');
    });

    it('returns the correct category name for a typical path', () => {
      expect(getCategoryName('/electronics/gaming')).toBe('Gaming');
    });

    it('returns the correct category name for a path without a leading slash', () => {
      expect(getCategoryName('clothing')).toBe('Clothing');
    });

    it('returns the correct category name for a path with a trailing slash', () => {
      expect(getCategoryName('/fashion/')).toBe('Fashion');
    });

    it('returns the correct category name with mixed casing', () => {
      expect(getCategoryName('/ELECtronics/COMPUTERS')).toBe('Computers');
    });

    it('throws an error for a path that results in no segments', () => {
      expect(() => getCategoryName('///')).toThrow('Unknown Category');
    });

    it('throws an error for a root slash input', () => {
      expect(() => getCategoryName('/')).toThrow('Unknown Category');
    });
  });

  describe('handleAxiosError', () => {
    it('returns the custom message from response when AxiosError has a response', () => {
      const errorResponse = { data: { message: 'Custom server error' } } as any;
      const axiosError = new AxiosError(
        'Some error',
        'ERR_CODE',
        undefined,
        undefined,
        errorResponse,
      );
      expect(handleAxiosError(axiosError)).toBe('Custom server error');
    });

    it('returns the error message when AxiosError has no response', () => {
      const axiosError = new AxiosError('Network error', 'ERR_CODE');
      expect(handleAxiosError(axiosError)).toBe('Network error');
    });

    it('returns the error message when error is a generic Error', () => {
      const error = new Error('Generic error');
      expect(handleAxiosError(error)).toBe('Generic error');
    });

    it('returns the string representation when error is a non-error value (string)', () => {
      expect(handleAxiosError('Simple string error')).toBe('Simple string error');
    });

    it('returns the string representation when error is a non-error value (number)', () => {
      expect(handleAxiosError(404)).toBe('404');
    });
  });
});
