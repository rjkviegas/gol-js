function setUpGrid(rows, cols) {
    const array = new Array(rows).fill(0);
    let result = array.map(function () {
        return new Array(cols).fill(0);
    });
    return result;
}

module.exports = { setUpGrid };