const { setUpGrid } = require("../src/grid");

describe("grid", function() {
    describe("setUpGrid", function() {
        it("returns 2D array", function() {
            let rows = 10;
            let cols = 8;
            const grid = setUpGrid(rows, cols);
            expect(grid).toBeInstanceOf(Array);
            expect(grid.length).toEqual(rows);
            expect(grid[0]).toBeInstanceOf(Array);
            expect(grid[0].length).toEqual(cols);
        });
        it("all elements equal 0", function() {
            const grid = setUpGrid(10, 8);
            const elementsTotal = grid.flat().reduce(function(accumulator, currentValue) {
                return accumulator + currentValue;
            });
            expect(elementsTotal).toEqual(0);
        })
    });
});
