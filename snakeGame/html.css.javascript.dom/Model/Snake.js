<!--  
var Snake = function(direction, coordinate) {
	this.polyline = new PolyLine(coordinate);
	this.polyline.enlarge(4, direction);
};

Snake.prototype = {
	contains : function(coordinate) {
		return this.polyline.contains(coordinate);
	},
	
	getNextStep : function(direction) {
		return this.polyline.getHead().next(direction);
	},
	
	advanceNextStep : function(direction) {
		this.polyline.advanceNextStep(direction);
	},
	
	getPolyline: function() {
		return this.polyline;
	},
	
	hitTarget : function(coordinate) {
		return this.polyline.hitTarget(coordinate);
	},
	
	enlarge: function(sizeToIncrease, direction) {
		this.polyline.enlarge(sizeToIncrease, direction);
	}
};
//-->