<!-- 

var Model = function() {
	this.meshSize = 40;
	this.cellWidth = 10;
};

Model.prototype = {

	setRectangle: function(x, y, startPointCoordinate) {
		this.rectangle = new Rectangle(x, y, startPointCoordinate);
		this.rectangleCells = new Array(x);
		for (var i=startPointCoordinate.x ; i<startPointCoordinate.x + x; i++) {
			this.rectangleCells[i] = new Array(y);
		}
		for (var i=startPointCoordinate.x ; i<startPointCoordinate.x + x; i++) {
			for (var j=startPointCoordinate.y ; j<startPointCoordinate.y + y; j++) {
				this.rectangleCells[i][j] = new Coordinate(i,j);
			}
		}
	},
	
	setFreeCells: function() {
		this.resetCells();
		for (var i=this.getR1().x ; i<this.getR2().x; i++) {
			for (var j=this.getR1().y ; j<this.getR3().y; j++) {
				this.rectangleCells[i][j].setFreeCell();
			}
		}
	},
	
	resetCells: function() {
		for (xIndex in this.rectangleCells) {
			for (yIndex in this.rectangleCells[xIndex]) {
				this.rectangleCells[xIndex][yIndex].resetCell();
			}
		}
	},
	
	isUsed: function(coordinate) {
		return coordinate.isUsed();
	},
	
	getRectangleCells: function() {
		return this.rectangleCells;
	},
	
	getMeshSize: function() {
		return this.meshSize;
	},
	
	getCellWidth: function() {
		return this.cellWidth;
	},
	
	setR1: function(x,y) {
		this.rectangle.setR1(x,y);
	},
	
	setR2: function(x,y) {
		this.rectangle.setR2(x,y);
	},
	
	setR3: function(x,y) {
		this.rectangle.setR3(x,y);
	},
	
	getR1: function() {
		return this.rectangle.getR1();
	},
	
	getR2: function() {
		return this.rectangle.getR2();
	},
	
	getR3: function() {
		return this.rectangle.getR3();
	},
	
	getCoordinate: function(x,y) {
		return new Coordinate(x,y);
	}
};
// -->
