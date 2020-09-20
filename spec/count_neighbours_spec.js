const { countNeighbours } = require("../src/count_neighbours")

describe("countNeighbours", function() {
    describe("returns total live neighbours", function() {
        it("for single cell", function() {
            const cell = [0];
            expect(countNeighbours(cell)).toEqual(0);
        })
        it("for cell if 1 alive west neighbour", function() {
            const pair = [1, 0];
            expect(countNeighbours(pair[1])).toEqual(1);
        })
    })
})
