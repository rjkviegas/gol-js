const { countNeighbours } = require("../src/count_neighbours")

describe("countNeighbours", function() {
    describe("returns total live neighbours", function() {
        it("for cell with no live neighbours", function() {
            const cell = [0];
            expect(countNeighbours(cell, cell)).toEqual(0);
        })
        it("for array with 1 live element", function() {
            const pair = [1, 0];
            expect(countNeighbours(pair, pair[0])).toEqual(0);
            expect(countNeighbours(pair, pair[1])).toEqual(1);
        })
    })
})
