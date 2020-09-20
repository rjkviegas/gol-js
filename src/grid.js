function setUp(rows, cols) {
    const result = new Array(rows);
    for (let i = 0; i < result.length; i += 1) {
        result[i] = new Array(cols).fill(0);
    }
    return result;
}

module.exports = { setUp }