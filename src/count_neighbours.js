function countNeighbours(grid, x, y) {
    let result = 0;
    const maxRows = grid.length;
    const maxCols = grid[0].length;
    const OFFSETS_ARRAY = [
        {i: -1, j: -1},
        {i: -1, j: 0},
        {i: -1, j: 1},
        {i: 0, j: -1},
        {i: 0, j: 1},
        {i: 1, j: -1},
        {i: 1, j: 0},
        {i: 1, j: 1}
    ];
    OFFSETS_ARRAY.forEach(function (spec) {
        let {i, j} = spec;
        if (x + j < maxCols && x + j >= 0 && y + i >= 0 && y + 1 < maxRows) {
            result += grid[y + i][x + j];
        }
    })
    return result;
}

module.exports = { countNeighbours };
