<!--  
var Coordinate = function(x, y) {
	this.x = x;
	this.y = y;
	this.used = true;
};

Coordinate.prototype = {
	resetCell: function() {
		this.used = true;
	},
	
	setFreeCell: function() {
		this.used = false;
	},
	
	isUsed: function() {
		return this.used;
	}
	
};
//-->