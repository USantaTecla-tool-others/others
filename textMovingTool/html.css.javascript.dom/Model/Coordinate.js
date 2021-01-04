<!--  
var Coordinate = function(x, y, visible) {
	this.x = x;
	this.y = y;
	if(typeof visible == 'undefined') {
		this.visible = true;
    } else {
    	this.visible = visible;
    }
	
};

Coordinate.prototype = {
	getNext: function(meshSize) {
		if (this.x >= meshSize -1) {
			this.x = this.x - meshSize;
		}
		var coordinate = new Coordinate(this.x, this.y, this.visible);
		coordinate.x++;
		return coordinate;
	},
	
	exists: function(cells) {
		for (index in cells) {
			if (cells[index].x == this.x && cells[index].y == this.y){
				return true;
			}
		}
		return false;
	},
	
	setInvisible: function() {
		this.visible = false;
	}

};
//-->