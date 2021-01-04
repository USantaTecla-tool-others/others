<!-- 

var Game = function() {
	this.joystick = new Joystick();
	this.stage = new Stage(this.joystick.getDirection());
	this.score = 0;
};

Game.prototype = {
	getSnake: function() {
		return this.stage.getSnake();
	},
	
	getTarget: function() {
		return this.stage.getTarget();
	},
	
	changeDirection: function(direction) {
		this.joystick.changeDirection(direction);
	},
	
	isPossibleNextStep: function() {
		return this.stage.isPossibleNextStep(this.joystick.getDirection());
	},
	
	advanceNextStep: function() {
		this.stage.advanceNextStep(this.joystick.getDirection());
	},
	
	hitTarget: function() {
		return this.stage.hitTarget();
	},
	
	resetTarget: function() {
		this.stage.resetTarget();
	},
	
	setScore: function() {
		this.score += 1;
	},
	
	getScore: function() {
		return this.score;
	},
	
	getLength: function() {
		return this.stage.getLength();
	},
	
	enlarge: function(sizeToIncrease) {
		this.stage.enlarge(sizeToIncrease,this.joystick.getDirection());
	}
};
// -->
