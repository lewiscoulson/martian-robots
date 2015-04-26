var Grid = require('./grid');
var Robot = require('./robot');

var grid = new Grid(5, 3);

var input = [
	{
		position: '11E',
		instructions: 'RFRFRFRF'
	},
	{
		position: '32N',
		instructions: 'FRRFLLFFRRFLL'
	},
	{
		position: '03W',
		instructions: 'LLFFFLFLFL'
	}
];

input.forEach(function(item) {
	var position = item.position.split('');

	var robot = new Robot(position[0], position[1], position[2], item.instructions, grid);
	robot.processInstructions();

	var output = robot.showOutput();
	console.log(output);
});