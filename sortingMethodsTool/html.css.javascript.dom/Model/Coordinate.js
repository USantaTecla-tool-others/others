<!--  
var Coordinate = function(x, y) {
	this.x = x;
	this.y = y;
	this.visible = false;
	this.active = false;
};

Coordinate.prototype = {
	setInvisible: function() {
		this.visible = false;
	},
	
	setVisible: function() {
		this.visible = true;
	},
	
	isVisible: function() {
		return this.visible;
	},
	
	setActive: function() {
		this.active = true;
	},
	
	setDeactive: function() {
		this.active = false;
	},
	
	isActive: function() {
		return this.active;
	}

};
//-->