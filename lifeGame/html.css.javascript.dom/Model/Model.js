<!-- 
var Model = function() {
	this.meshSize = 41;
	this.initialCellsNumber = 150;
	this.allCells = new Array(this.meshSize);
	for (var i=0 ; i<this.meshSize; i++) {
		this.allCells[i] = new Array(this.meshSize);
	}
	this.init();
	
};

Model.prototype = {
	init: function() {
		for (var i=0 ; i<this.meshSize; i++) {
			for (var j=0 ; j<this.meshSize; j++) {
				this.allCells[i][j] = new Coordinate(i,j);
			}
		}
	},
	
	setInitialCells : function() {
		var initialCells = new Array();
		initialCells = [[0,4], [0,5], [1,4], [1,5], [10,4], [10,5], [10,6], [11,3], [11,7], [12,2], [12,8], [13,2], [13,8], 
						[14,5], [15,3], [15,7], [16,4], [16,5], [16,6], [17,5], [20,2], [20,3], [20,4], [21,2], [21,3], [21,4], 
						[22,1], [22,5], [24,0], [24,1], [24,5], [24,6], [34,2], [34,3], [35,2], [35,3]]
		for (index in initialCells) {
			this.allCells[initialCells[index][0]][initialCells[index][1]].setAlive();
		}
	},
	
	getCells: function() {
		return this.allCells;
	},

	getMeshSize: function() {
		return this.meshSize;
	},

	positionExists: function(x, y) {
		if (0 <= x && x < this.meshSize && 0 <= y && y < this.meshSize){
			return true;
		}
		return false;
	},
	
	update: function() {
		for (var i=0 ; i<this.meshSize; i++) {
			for (var j=0 ; j<this.meshSize; j++) {
				this.setNeighborsNextMove(this.allCells[i][j]);
			}
		}
		for (var i=0 ; i<this.meshSize; i++) {
			for (var j=0 ; j<this.meshSize; j++) {
				this.allCells[i][j].alive = this.allCells[i][j].lifeGoesOn;
				this.allCells[i][j].setWillBeDead();
			}
		}
	},
	
	setNeighborsNextMove: function(coordinate) {
		allNeighbors = new Array();
		counter = 0;
		allNeighbors = this.getNeighbors(coordinate);
		for (var i=0 ; i<allNeighbors.length; i++) {
			if (allNeighbors[i].isAlive() === true){
				counter += 1;
			}
		}
		if (coordinate.isAlive() === true){
			if (counter == 2 || counter == 3){
				coordinate.setWillBeAlive();
			}
		} else {
			if (counter == 3){
				coordinate.setWillBeAlive();
			}
		}
	},
		
	getNeighbors: function(coordinate) {
		neighbors = new Array();
		for (var i=0 ; i<3; i++) {
			for (var j=0 ; j<3; j++) {
				if ((this.positionExists(coordinate.x + 1 - i, coordinate.y + 1 - j) === true) && 
						!((coordinate.x == coordinate.x + 1 - i) && (coordinate.y == coordinate.y + 1 - j))){
					neighbors.push(this.allCells[coordinate.x + 1 - i][coordinate.y + 1 - j]);
				}
			}
		}
		return neighbors;
	},

};

//-->