export const getCategoryName = (pathName: string): string => {
  const pathSegments = pathName.split('/').filter(Boolean);

  const lastElement = pathSegments[pathSegments.length - 1];

  if (lastElement) {
    return lastElement.charAt(0).toUpperCase() + lastElement.slice(1).toLowerCase();
  }
  throw new Error('Unknown Category');
};
