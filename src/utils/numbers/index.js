function calcDiscount(oldPrice, newPrice) {
    return Math.floor(100 - (newPrice / oldPrice) * 100);
}

export { calcDiscount };
