function countNeighbours(array, cell) {
    let result = 0;
    if (array.length === 1) {
        return result;
    }
    array.forEach(function(e) {
        if (e === 1) {
            result += 1;
        }
    })
    return result - cell;

}

module.exports = { countNeighbours }
