<!-- 

var Stage = function(direction) {
	this.matrix = new Matrix();
	this.snake = new Snake(direction, this.matrix.getCenter());
	this.target = this.getFreeCoordinate();
};

Stage.prototype = {
	getFreeCoordinate: function() {
		var coordinate;
		do {
			coordinate = this.matrix.getRandomCoordinate();
		} while (this.snake.contains(coordinate));
		return coordinate; 
	},
	
	isPossibleNextStep: function(direction) {
		return this.matrix.contains(this.snake.getNextStep(direction)) && !this.snake.contains(this.snake.getNextStep(direction));
	},
	
	advanceNextStep: function(direction) {
		this.snake.advanceNextStep(direction);
	},
	
	hitTarget: function() {
		return this.snake.hitTarget(this.target);
	},
	
	resetTarget: function() {
		this.target = this.getFreeCoordinate();
	},
	
	getLength: function() {
		return this.matrix.getLength();
	},
	
	getSnake: function() {
		return this.snake;
	},
	
	getTarget: function() {
		return this.target;
	},
	
	enlarge: function(sizeToIncrease, direction) {
		this.snake.enlarge(sizeToIncrease, direction);
	}
};
//-->