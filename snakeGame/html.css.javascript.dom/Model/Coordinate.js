<!--  
var Coordinate = function(x, y) {
	this.x = x;
	this.y = y; 
};

Coordinate.prototype = {
	next: function(direction) {
		var coordinate = new Coordinate(this.x, this.y);
		switch(direction) {
			case Joystick.UP_KEY:
				coordinate.y--;
				break;
			case Joystick.DOWN_KEY:
				coordinate.y++;
				break;
			case Joystick.RIGHT_KEY:
				coordinate.x++;
				break;
			case Joystick.LEFT_KEY:
				coordinate.x--;
				break;
		}
		return coordinate;
	},
	
	equal: function(coordinate){
		return this.x == coordinate.x && this.y == coordinate.y;
	},
	
	getCoordinate: function() {
		return this;
	}
};
//-->