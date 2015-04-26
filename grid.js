var Grid = function(x, y) {
	this.min_x = 0;
	this.max_x = x;
	this.min_y = 0;
	this.max_y = y;
	this.scent_trails = [];
}

Grid.prototype.addScentTrail = function(x, y, orientation) {
	this.scent_trails.push(x + ',' + y + ',' + orientation);
};

module.exports = Grid;