function setUp(rows, cols) {
    const result = new Array(rows);
    for (let i = 0; i < result.length; i += 1) {
        result[i] = new Array(cols);
    }
    return result;
}

module.exports = { setUp }