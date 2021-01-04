<!-- 

var Model = function() {
	this.meshSize = 80;
	this.cellWidth = 10;
	this.iterations = 0;
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
		this.setup();
	},
	
	setup: function() {	
//		Information at README file
		this.result = "F-F-F";
		for(var i = 0; i < this.iterations; ++i) {
		  this.result = this.result.replace(/F/gi, "F+F-F+F");
		}
		this.index = 0;
		this.numberOfF = (this.result.match(/F/g) || []).length;
		this.currentFIndex = 0;
		this.angle = Math.PI / 3;
	},
	
	getNextMove: function() {
		if(this.result[this.index] === "F") {
			var temp = this.position.getNext(this.angle, this.min, this.iterations);
			var toDraw = [true, this.position, temp];
			this.position = temp;
			++this.currentFIndex;
			return toDraw;
		} 
		if(this.result[this.index] === "+") {
			this.angle += Math.PI/3;
		} else if(this.result[this.index] === "-") {
			this.angle -= Math.PI/3*2;
		}
		return [false];
	},
	
	isFinished: function() {
		if(this.index === this.result.length) {
			return true;
		}
		return false;
	},
	
	addIndex: function() {
		this.index += 1;
	},
	
	getIndex: function() {
		return this.index;
	},
	
	setPosition: function(width, height) {
		this.position = new Coordinate(Math.round(width / 4), Math.round(height / 4*3));
	},

	setMin: function(width, height) {
		this.min = Math.min(width * 3 / 4, height * 3 / 4);
	},
	
	setOrderNumber: function(orderNumber) {
		this.iterations = orderNumber;
	},
	
	getColor: function() {
		return this.currentFIndex / this.numberOfF * 360;
	},

    getCells: function() {
		return this.allCells;
	},
	
	getMeshSize: function() {
		return this.meshSize;
	},
    
    getCellWidth: function() {
		return this.cellWidth;
	}

};
// -->
