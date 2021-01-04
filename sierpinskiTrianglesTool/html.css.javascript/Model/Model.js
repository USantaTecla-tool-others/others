<!-- 

var Model = function() {
	this.meshSize = 80;
	this.cellWidth = 10;
	this.iterations = 1;
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
		this.result = "A";
		var rules = {
		  A: "B-A-B",
		  B: "A+B+A"
		};

		for(var i = 0; i < this.iterations; ++i) {
		  this.result = this.replaceAll(this.result, rules);
		}
		
		this.index = 0;
		this.numberOfA = (this.result.match(/A/g) || []).length;
		this.currentAIndex = 0;
		if(this.iterations % 2 == 1) {
			this.angle = Math.PI/3;
		} else {
			this.angle = 0;
		}
	},
	
	replaceAll: function(text, mapObj){
		var expression = new RegExp(Object.keys(mapObj).join("|"), "gi");
		return text.replace(expression, function(matched){
			return mapObj[matched];
		});
	},
	
	getNextMove: function() {
		if(this.result[this.index] === "A" || this.result[this.index] === "B") {
			var temp = this.position.getNext(this.angle, this.min, this.iterations);
			var toDraw = [true, this.position, temp];
			this.position = temp;
			++this.currentAIndex;
			return toDraw;
		} 
		if(this.result[this.index] === "+") {
			this.angle += Math.PI/3;
		} else if(this.result[this.index] === "-") {
			this.angle -= Math.PI/3;
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
		this.position = new Coordinate(Math.round(width*0.1), Math.round(height*0.9));
	},
	
	setMin: function(width, height) {
		this.min = Math.min(width, height);
	},
	
	setOrderNumber: function(orderNumber) {
		this.iterations = orderNumber;
	},
	
	getColor: function() {
		return this.currentAIndex / this.numberOfA * 360;
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
