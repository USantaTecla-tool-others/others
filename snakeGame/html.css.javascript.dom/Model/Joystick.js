<!--  
var Joystick = function() {
	this.direction = Joystick.UP_KEY;
};

Joystick.LEFT_KEY = 37;
Joystick.RIGHT_KEY = 39;
Joystick.UP_KEY = 38;
Joystick.DOWN_KEY = 40;

Joystick.prototype = {
	changeDirection: function(direction) {
    	if (((direction == Joystick.LEFT_KEY) && (this.direction != Joystick.RIGHT_KEY)) || 
    			((direction == Joystick.RIGHT_KEY) && (this.direction != Joystick.LEFT_KEY))|| 
    			((direction == Joystick.UP_KEY) && (this.direction != Joystick.DOWN_KEY)) || 
    			((direction == Joystick.DOWN_KEY) && (this.direction != Joystick.UP_KEY))){
    		this.direction = direction;
    	}
	},
	
	getDirection: function() {
		return this.direction;
	},
};
//-->