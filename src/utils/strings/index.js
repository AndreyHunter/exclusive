const sliceString = (str, length, dots = false) => {
    if (typeof length !== 'number') return 'length argument should be a number';

    return str.length >= length ? `${str.slice(0, length)}${dots ? '...' : ''}` : str;
};

export { sliceString };