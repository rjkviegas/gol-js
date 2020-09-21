const { countNeighbours } = require("./count_neighbours");
const { setUp } = require("./grid");

function generation(grid) {
    const result = setUp(3, 3);
    const maxRows = grid.length;
    const maxCols = grid[0].length;

    function isAlive(cell) {
        return cell === 0;
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

    for(i = 0; i < maxRows; i += 1) {
        for(j = 0; j < maxCols; j += 1) {
            let cell = grid[i][j];
            let neighbours = countNeighbours(grid, j, i);
            if (isDead(cell) && makeAlive(neighbours)) {
                result[i][j] = 1;
            } else if (isAlive(cell) && makeDead(neighbours)) {
                result[i][j] = 0;
            }
        }
    }
    return result;
}

module.exports = { generation };