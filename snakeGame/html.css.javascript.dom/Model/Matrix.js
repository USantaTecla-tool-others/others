<!--  
var Matrix = function() {
	this.meshSize = 20;
	this.allCells = new Array(this.meshSize);
	for (i=0 ; i<this.meshSize; i++) {
		this.allCells[i] = new Array(this.meshSize);
	}
	this.init();
}

Matrix.prototype = {
	init: function() {
		for (i=0 ; i<this.meshSize; i++) {
			for (j=0 ; j<this.meshSize; j++) {
				this.allCells[i][j] = new Coordinate(i,j);
			}
		}
	},
	
	getCenter: function(){
		return new Coordinate(this.allCells.length/2, this.allCells[0].length/2);
	},
	
	getRandomCoordinate: function() {
		return new Coordinate(Math.floor(Math.random() * this.meshSize), Math.floor(Math.random() * this.meshSize));
	},
	
	getLength: function() {
		return this.meshSize;
	},
	
	contains: function(coordinate) {
		for (i=0 ; i<this.meshSize; i++) {
			for (j=0 ; j<this.meshSize; j++) {
				if (this.allCells[i][j].x == coordinate.x && this.allCells[i][j].y == coordinate.y){
					return true;
				}
			}
		}
		return false;
	}
};
//-->