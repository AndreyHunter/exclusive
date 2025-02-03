export const sliceString = (str: string, length: number, dots?: boolean): string => {
  return str.length >= length ? `${str.slice(0, length)}${dots ? '...' : ''}` : str;
};
