const { setUp } = require("../src/grid");

describe("grid", function() {
    describe("setUp", function() {
        it("returns 2D array", function() {
            let rows = 10;
            let cols = 8;
            const grid = setUp(rows, cols);
        expect(grid).toBeInstanceOf(Array);
        expect(grid.length).toEqual(rows);
        expect(grid[0]).toBeInstanceOf(Array);
        expect(grid[0].length).toEqual(cols);
    });
  });
});
