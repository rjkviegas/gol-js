const { countNeighbours } = require("../src/count_neighbours")

describe("countNeighbours", function() {
    describe("returns total live neighbours", function() {
        describe("for center element within 3x3 grid", function() {
            it("no live neighbours", function() {
                const grid = [[0, 0, 0],
                              [0, 0, 0],
                              [0, 0, 0]];
                expect(countNeighbours(grid, 1, 1)).toEqual(0);
            })
            it("live west neighbour", function() {
                const grid = [[0, 0, 0],
                              [1, 0, 0],
                              [0, 0, 0]];
                expect(countNeighbours(grid, 1, 1)).toEqual(1);
            })
            it("live north neighbour", function() {
                const grid = [[0, 1, 0],
                              [0, 0, 0],
                              [0, 0, 0]];
                expect(countNeighbours(grid, 1, 1)).toEqual(1);
            })
            it("live east neighbour", function() {
                const grid = [[0, 0, 0],
                              [0, 0, 1],
                              [0, 0, 0]];
                expect(countNeighbours(grid, 1, 1)).toEqual(1);
            })
            it("live south neighbour", function() {
                const grid = [[0, 0, 0],
                              [0, 0, 0],
                              [0, 1, 0]];
                expect(countNeighbours(grid, 1, 1)).toEqual(1);
            })
            it("live south west neighbour", function() {
                const grid = [[0, 0, 0],
                              [0, 0, 0],
                              [1, 0, 0]];
                expect(countNeighbours(grid, 1, 1)).toEqual(1);
            })
            it("live north west neighbour", function() {
                const grid = [[1, 0, 0],
                              [0, 0, 0],
                              [0, 0, 0]];
                expect(countNeighbours(grid, 1, 1)).toEqual(1);
            })
            it("live north east neighbour", function() {
                const grid = [[0, 0, 1],
                              [0, 0, 0],
                              [0, 0, 0]];
                expect(countNeighbours(grid, 1, 1)).toEqual(1);
            })
            it("live south east neighbour", function() {
                const grid = [[0, 0, 0],
                              [0, 0, 0],
                              [0, 0, 1]];
                expect(countNeighbours(grid, 1, 1)).toEqual(1);
            })
        })
    })
})
