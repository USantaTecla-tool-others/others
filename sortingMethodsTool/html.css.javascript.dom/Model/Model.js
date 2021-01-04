<!-- 

var Model = function(yNumbers) {
	this.meshSize = 41;
	this.allCells = new Array(this.meshSize);
	for (var i=0 ; i<this.meshSize; i++) {
		this.allCells[i] = new Array(this.meshSize);
	}
	this.yNumbers = yNumbers;
	this.init();
	
};

Model.prototype = {
	init: function() {
		for (var i=0 ; i<this.meshSize; i++) {
			for (var j=0 ; j<this.meshSize; j++) {
				this.allCells[i][j] = new Coordinate(i,j);
			}
		}
		this.setCells();
	},

	setActiveCells: function(numbers) {
		for (index in numbers) {
			var index = this.yNumbers.indexOf(numbers[index]);
			for (var i=0 ; i<=this.yNumbers.length; i++) {
				this.allCells[index][this.meshSize-i-1].setActive();
			}
		}
		
	},
	
	deactiveCells: function(numbers) {
		for (index in numbers) {
			var index = this.yNumbers.indexOf(numbers[index]);
			for (var i=0 ; i<=this.yNumbers.length; i++) {
				this.allCells[index][this.meshSize-i-1].setDeactive();
			}
		}
	},
	
	setCells: function() {
		this.resetVisibility();
		for (var i=0 ; i<this.yNumbers.length; i++) {
			for (var j=0 ; j<=this.yNumbers[i]; j++) {
				this.allCells[i][this.meshSize-j-1].setVisible();
			}
		}
	},
	
	getCells: function() {
		return this.allCells;
	},
	
	resetVisibility: function() {
		for (var i=0 ; i<this.meshSize; i++) {
			for (var j=0 ; j<this.meshSize; j++) {
				this.allCells[i][j].setInvisible();
			}
		}
	},
	
	getMeshSize: function() {
		return this.meshSize;
	},
	
	setYnumbers: function(numbers) {
		this.yNumbers = numbers;
	},
	
	getYnumbers: function() {
		return this.yNumbers;
	},
	
	bubbleSort: function(counter) {
		if (this.yNumbers[counter-1] > this.yNumbers[counter]) {
        	var temp = this.yNumbers[counter-1];
            this.yNumbers[counter-1] = this.yNumbers[counter];
            this.yNumbers[counter] = temp;
        }
        this.setCells();
	},
	
	findMinIndex: function(counter, minIndex) {
		if(this.yNumbers[counter]<this.yNumbers[minIndex]){
			minIndex = counter;
		}
		return minIndex;
	},
	
	selectionSort: function(counter, minIndex) {
		var temp = this.yNumbers[counter];
	    this.yNumbers[counter] = this.yNumbers[minIndex];
	    this.yNumbers[minIndex] = temp;
	    this.setCells();
	},
	
	insertionSort: function(counter, toInsert, swap) {
		if (swap === false) {
			this.yNumbers[counter] = this.yNumbers[counter-1];
		} else {
			this.yNumbers[counter] = toInsert;
		}
		this.setCells();
	}
	
};
// -->
