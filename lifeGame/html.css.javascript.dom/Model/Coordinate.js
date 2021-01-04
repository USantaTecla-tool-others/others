<!--  
var Coordinate = function(x, y) {
	this.x = x;
	this.y = y;
	this.alive = false;
	this.lifeGoesOn = false;
};

Coordinate.prototype = {

	getCoordinate: function() {
		return this;
	},
	
	isAlive: function() {
		return this.alive;
	},
	
	setAlive: function(coordinate) {
		this.alive = true;
	},
	
	setDead: function(coordinate) {
		this.alive = false;
	},
	
	willBeAlive: function() {
		return this.lifeGoesOn;
	},
	
	setWillBeAlive: function(coordinate) {
		this.lifeGoesOn = true;
	},
	
	setWillBeDead: function(coordinate) {
		this.lifeGoesOn = false;
	}
};
//-->