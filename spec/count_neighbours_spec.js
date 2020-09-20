const { countNeighbours } = require("../src/count_neighbours")

describe("countNeighbours", function() {
    describe("returns total live neighbours", function() {
        it("for cell with no live neighbours in 3x3 grid", function() {
            const grid = [[0, 0, 0],
                          [0, 0, 0],
                          [0, 0, 0]];
            const cell = grid[1][1];
            expect(countNeighbours(cell)).toEqual(0);
        })
    })
})
