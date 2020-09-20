const { countNeighbours } = require("../src/count_neighbours")

describe("countNeighbours", function() {
    describe("returns total live neighbours", function() {
        describe("for single array", function() {
            it("1 element", function() {
                const cell = [0];
                expect(countNeighbours(cell, 0)).toEqual(0);
            })
            it("of length 2 with 1 live element", function() {
                const pair = [1, 0];
                expect(countNeighbours(pair, 0)).toEqual(0);
                expect(countNeighbours(pair, 1)).toEqual(1);
            })
            it("of length 3 with 1 live element", function() {
                const arr = [1, 0, 0];
                expect(countNeighbours(arr, 0)).toEqual(0);
                expect(countNeighbours(arr, 1)).toEqual(1);
                expect(countNeighbours(arr, 2)).toEqual(0);
            })
            it("of length 3 with 2 live element", function() {
                const arr = [0, 1, 1];
                expect(countNeighbours(arr, 0)).toEqual(1);
                expect(countNeighbours(arr, 1)).toEqual(1);
                expect(countNeighbours(arr, 2)).toEqual(1);
            })
        })
    })
})
