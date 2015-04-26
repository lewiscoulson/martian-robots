var assert = require("chai").assert
var Grid = require("../grid");

describe('Grid', function() {
	var grid;

	beforeEach(function() {
    grid = new Grid(5, 3);
  })

	it('Can create instance of grid', function() {
		assert.instanceOf(grid, Grid);
	});

	it('Can pass arguments to grid', function() {
		assert.equal(grid.max_x, 5);
		assert.equal(grid.max_y, 3);
	});

	it('Can add scent trail', function() {
		grid.addScentTrail(3, 3, 'N');
		assert.include(grid.scent_trails, '3,3,N');
	});
});
  