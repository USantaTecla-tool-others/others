<!--  
var InsertionController = function(model, view) {
	this.model = model;
	this.view = view;
	this.DELAY = 50;
	this.init();
};

InsertionController.prototype = {
	init: function() {
		this.draw();
	    this.numbers = this.model.getYnumbers();
	    this.iCounter = 1;
	    this.sortHandler = this.sort.bind(this);
	    this.insertionSortHandler = this.insertionSort.bind(this);
	    this.sort();
	},
	
	drawActiveCells: function(numbers) {
		this.model.setActiveCells(numbers);
		this.draw();
	},

	draw: function() {
		this.view.drawNumbers();
	},

	sort: function() {
		this.toInsert = this.numbers[this.iCounter];
		this.jCounter = this.iCounter;
		this.insertionSortHandler();
	},
	
	insertionSort: function() {
		if (this.jCounter > 0 && this.numbers[this.jCounter-1] > this.toInsert) {
			this.model.deactiveCells(this.numbers);
			this.drawActiveCells([this.numbers[this.iCounter],this.numbers[this.jCounter], this.numbers[this.jCounter-1]]);
			this.model.insertionSort(this.jCounter, this.toInsert, false);
			this.draw();
			this.jCounter -= 1;
        	setTimeout(this.insertionSortHandler, this.DELAY);	

        } else {
        	this.model.insertionSort(this.jCounter, this.toInsert, true);
			this.draw();
			this.iCounter += 1;
			if (this.iCounter < this.numbers.length) {
				setTimeout(this.sortHandler, this.DELAY);
			} else {
				this.drawActiveCells(this.numbers);
			}
        }
	}

};

// -->
