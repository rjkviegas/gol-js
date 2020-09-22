const { countNeighbours } = require("./count_neighbours");

function generation(grid) {
    let result = grid.map(function(arr) {
        return arr.slice();
    });
    const maxY = grid.length;
    const maxX = grid[0].length;

    function isAlive(cell) {
        return cell === 1;
    }

    function isDead(cell) {
        return cell === 0;
    }

    function makeAlive(neighbours) {
        return neighbours === 3;
    }

    function makeDead(neighbours) {
        return (neighbours > 3 || neighbours < 2);
    }

    for(i = 0; i < maxY; i += 1) {
        for(j = 0; j < maxX; j += 1) {
            let cell = grid[i][j];
            let neighbours = countNeighbours(grid, j, i);
            if (isDead(cell) && makeAlive(neighbours)) result[i][j] = 1;
            if (isAlive(cell) && makeDead(neighbours)) result[i][j] = 0;
        }
    }
    return result;
}

module.exports = { generation };