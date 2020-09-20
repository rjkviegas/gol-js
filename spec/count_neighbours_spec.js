const { countNeighbours } = require("../src/count_neighbours")

describe("countNeighbours", function() {
    describe("returns total live neighbours", function() {
        it("for cell with no live neighbours", function() {
            const cell = [0];
            expect(countNeighbours(cell, 0)).toEqual(0);
        })
        it("for array of length 2 with 1 live element", function() {
            const pair = [1, 0];
            expect(countNeighbours(pair, 0)).toEqual(0);
            expect(countNeighbours(pair, 1)).toEqual(1);
        })
        it("for array with length 3 with 1 live element", function() {
            const four = [1, 0, 0];
            expect(countNeighbours(four, 0)).toEqual(0);
            expect(countNeighbours(four, 1)).toEqual(1);
            expect(countNeighbours(four, 2)).toEqual(0);
        })
    })
})
