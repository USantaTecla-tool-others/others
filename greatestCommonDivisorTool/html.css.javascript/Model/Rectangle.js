<!--  
var Rectangle = function(x, y, startPointCoordinate) {
	this.x = x;
	this.y = y;
	this.init(startPointCoordinate);
};

Rectangle.prototype = {
	init: function(startPointCoordinate) {
		this.r1 = startPointCoordinate;
		this.r2 = new Coordinate(startPointCoordinate.x + this.x, startPointCoordinate.y);
		this.r3 = new Coordinate(startPointCoordinate.x, startPointCoordinate.y + this.y);
		this.r4 = new Coordinate(startPointCoordinate.x + this.x, startPointCoordinate.y + this.y);
	},
	
	setR1: function(x,y) {
		this.r1.x = x;
		this.r1.y = y;
	},
	
	setR2: function(x,y) {
		this.r2.x = x;
		this.r2.y = y;
	},
	
	setR3: function(x,y) {
		this.r3.x = x;
		this.r3.y = y;
	},
	
	getR1: function() {
		return this.r1;
	},
	
	getR2: function() {
		return this.r2;
	},
	
	getR3: function() {
		return this.r3;
	},
	
	getR4: function() {
		return this.r4;
	}
	
};
//-->