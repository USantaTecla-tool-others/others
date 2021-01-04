<!--  
var PolyLine = function(coordinate) {
	this.coordinates = Array();
	this.coordinates[0] = coordinate;
	this.length = 1;
};

PolyLine.prototype = {
	advanceNextStep : function(direction) {
		this.addNewHeadToCoordinates(this.coordinates.length-1,direction);
	},
	
	enlarge : function(sizeToIncrease, direction) {
		for(i = 0; i< sizeToIncrease; i++){
			this.addNewHeadToCoordinates(this.coordinates.length,direction);
		}
		this.length += sizeToIncrease;
	},
	
	addNewHeadToCoordinates: function(length, direction) {
		for(j = length; j>0; j--) {
			this.coordinates[j] = this.coordinates[j-1];
		}
		this.coordinates[0] = this.coordinates[0].next(direction);
	},
	
	contains : function(coordinate) {
		for(i = 0; i< this.length; i++){
			if (this.coordinates[i].x == coordinate.x && this.coordinates[i].y == coordinate.y){
				return true;
			}
		}
		return false;
	},
	
	getHead: function() {
		return this.coordinates[0];
	},
	
	hitTarget : function(coordinate) {
		return this.getHead().x == coordinate.x && this.getHead().y == coordinate.y;
	},
};
//-->