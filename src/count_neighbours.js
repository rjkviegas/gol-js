function countNeighbours(grid, x, y) {
    let result = 0;
    const maxY = grid.length;
    const maxX = grid[0].length;
    const OFFSETS_ARRAY = [
        {i: -1, j: -1},
        {i: 0, j: -1},
        {i: 1, j: -1},
        {i: -1, j: 0},
        {i: 1, j: 0},
        {i: -1, j: 1},
        {i: 0, j: 1},
        {i: 1, j: 1}
    ];
    OFFSETS_ARRAY.forEach(function (spec) {
        let {i, j} = spec;
        if ((x + i < maxX)
            && (x + i >= 0)
            && (y + j >= 0)
            && (y + j < maxY)) result += grid[y + j][x + i];
    })
    return result;
}

module.exports = { countNeighbours };
