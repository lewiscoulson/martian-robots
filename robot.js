var Robot = function(x, y, orientation, instructions, grid) {
	this.position_x = x;
	this.position_y = y;
	this.orientation = orientation;
	this.instructions = instructions;
	this.grid = grid;
	this.isLost = false;
}

Robot.prototype.moveLeft = function() {
	if (this.orientation === 'N') {
		this.orientation = 'W';
	} else if (this.orientation === 'E') {
		this.orientation = 'N';
	} else if (this.orientation === 'S') {
		this.orientation = 'E';
	} else if (this.orientation === 'W') {
		this.orientation = 'S';
	}
};

Robot.prototype.moveRight = function() {
	if (this.orientation === 'N') {
		this.orientation = 'E';
	} else if (this.orientation === 'E') {
		this.orientation = 'S';
	} else if (this.orientation === 'S') {
		this.orientation = 'W';
	} else if (this.orientation === 'W') {
		this.orientation = 'N';
	}
};

Robot.prototype.isOnScentTrail = function() {
	return this.grid.scent_trails.indexOf(this.position_x + ',' + this.position_y + ',' + this.orientation) !== -1;
};

Robot.prototype.updatePosition = function(position, operator) {
	if (position === 'x') {
		if (operator === 'increment') {
			this.position_x++;

			if (this.position_x > this.grid.max_x) {
				this.isLost = true;
				this.position_x--;
			}
		} else if (operator === 'decrement') {
			this.position_x--;

			if (this.position_x < this.grid.min_x) {
				this.isLost = true;
				this.position_x++;
			}
		} 
	} else if (position === 'y') {
		if (operator === 'increment') {
			this.position_y++;

			if (this.position_y > this.grid.max_y) {
				this.isLost = true;
				this.position_y--;
			}
		} else if (operator === 'decrement') {
			this.position_y--;

			if (this.position_y < this.grid.min_y) {
				this.isLost = true;
				this.position_y++;
			}
		}
	}
};

Robot.prototype.moveForward = function() {
	if (this.isOnScentTrail()) return;

	if (this.orientation === 'N') {
		this.updatePosition('y', 'increment');
	} else if (this.orientation === 'E') {
		this.updatePosition('x', 'increment');
	} else if (this.orientation === 'S') {
		this.updatePosition('y', 'decrement');
	} else if (this.orientation === 'W') {
		this.updatePosition('x', 'decrement');
	}
};

Robot.prototype.processInstructions = function() {
	var instructions = this.instructions.split('');
	var self = this;

	instructions.forEach(function(i) {
		if (self.isLost) {
			self.grid.addScentTrail(self.position_x, self.position_y, self.orientation);
		} else {
			if (i === 'L') {
				self.moveLeft();
			} else if (i === 'R') {
				self.moveRight();
			} else if (i === 'F') {
				self.moveForward();
			}
		};
	});
}

Robot.prototype.showOutput = function() {
	return this.position_x.toString() + this.position_y + this.orientation + (this.isLost ? 'LOST' : '');
};

module.exports = Robot;