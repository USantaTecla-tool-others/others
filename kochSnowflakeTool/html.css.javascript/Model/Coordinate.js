<!--  
var Coordinate = function(x, y) {
	this.x = x;
	this.y = y;
};

Coordinate.prototype = {
	getCoordinate: function() {
		return this;
	},
	
	getNext: function(angle, min, iterations) {
		return new Coordinate(this.x + this.rotateX(angle, min, iterations), this.y + this.rotateY(angle, min, iterations));
	},
	
	rotateX: function(angle, min, iterations) {
		return Math.round(Math.cos(angle) * min / (Math.pow(iterations+1, 3)));
	},
	
	rotateY: function(angle, min, iterations) {
		return Math.round(Math.sin(angle) * min / (Math.pow(iterations+1, 3))) * -1;
	}
	
};
//-->