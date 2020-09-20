function countNeighbours(array, x) {
    let result = 0;
    if (array.length === 1) { return result }
    if (array[x - 1] !== undefined) {
        result += array[x - 1];
    }
    if (array[x + 1] !== undefined){
        result += array[x + 1];
    }
    return result;
}

module.exports = { countNeighbours }
