import type { BreadCrumbsType } from 'types/index';

export const generateBreadcrumbs = (path: string): BreadCrumbsType[] => {
  const pathSegments = path.split('/').filter((segment) => segment);

  const breadcrumbs = pathSegments.map((segment, index) => {
    const breadcrumbPath = `/${pathSegments.slice(0, index + 1).join('/')}`;
    const name = segment.charAt(0).toUpperCase() + segment.slice(1);

    return { path: breadcrumbPath, name };
  });

  return breadcrumbs;
};
