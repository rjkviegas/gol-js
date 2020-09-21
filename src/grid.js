function setUp(rows, cols) {
    const array = new Array(rows).fill(0);
    return result = array.map(function() {
        return new Array(cols).fill(0);
    })
}

module.exports = { setUp };