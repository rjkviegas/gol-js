const { generation } =require("../src/generation");

describe("generation", function() {
    describe("updates 3x3 grid", function() {
        it("kills single live cell", function() {
            const grid = [[0, 0, 0],
                          [0, 1, 0],
                          [0, 0, 0]];
            expect(generation(grid)).toEqual(
                [[0, 0, 0],
                 [0, 0, 0],
                 [0, 0, 0]]
            );
        })
        it("makes dead cell alive due to 3 neighbours", function() {
            const grid = [[1, 0, 0],
                          [0, 1, 0],
                          [1, 0, 0]];
            expect(generation(grid)).toEqual(
                [[0, 0, 0],
                 [1, 0, 0],
                 [0, 0, 0]]
            );
        })
        it("kills live cell with 4 neighbours", function() {
            const grid = [[1, 1, 0],
                          [1, 0, 0],
                          [1, 1, 0]];
            expect(generation(grid)).toEqual(
                [[0, 0, 0],
                 [0, 0, 0],
                 [0, 0, 0]]
            );
        })
    })
})