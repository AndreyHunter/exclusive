const getCategoryName = (pathName) => {
    
    const pathSegments = pathName.split('/').filter(Boolean);

    const lastElement = pathSegments[pathSegments.length - 1];

    if (lastElement) {
        return lastElement.charAt(0).toUpperCase() + lastElement.slice(1).toLowerCase();
    }

    return 'Unknown Category';
};

export default getCategoryName;