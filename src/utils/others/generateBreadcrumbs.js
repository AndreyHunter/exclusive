const generateBreadcrumbs = (path) => {
    const pathSegments = path.split('/').filter((path) => path);

    const breadcrumbs = pathSegments.map((path) => {
        const name = path.charAt(0).toUpperCase() + path.slice(1);

        return { path: pathSegments, name };
    });

    return breadcrumbs;
};

export default generateBreadcrumbs;