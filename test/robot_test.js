var assert = require("chai").assert
var Robot = require("../robot");
var Grid = require("../grid");

describe('Robot', function() {
	var grid;

	beforeEach(function() {
    grid = new Grid(5, 3);
  })

	it('Can create instance of robot', function() {
		var robot = new Robot();
		assert.instanceOf(robot, Robot);
	});

	it('Can pass arguments to robot', function() {
		var robot = new Robot(1, 2, 'N', 'LRLRF');
		assert.equal(robot.position_x, 1);
		assert.equal(robot.position_y, 2);
		assert.equal(robot.orientation, 'N');
		assert.equal(robot.instructions, 'LRLRF');
	});

	it('Can process instructions', function() {
		var robot = new Robot(0, 0, 'N', 'RFLFL', grid);
		robot.processInstructions();

		assert.equal(robot.position_x, 1);
		assert.equal(robot.position_y, 1);
		assert.equal(robot.orientation, 'W');
	});

	it('Can show output', function() {
		var robot = new Robot(1, 1, 'E', 'RFRFRFRF', grid);
		robot.processInstructions();

		var output = robot.showOutput();

		assert.equal(output, '11E');
	});

	it('Can be lost', function() {
		var robot = new Robot(0, 0, 'S', 'F', grid);
		robot.processInstructions();

		var output = robot.showOutput();

		assert.equal(output, '00SLOST');
	});
});
  