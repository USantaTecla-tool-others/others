<!--  
var SelectionController = function(model, view) {
	this.model = model;
	this.view = view;
	this.DELAY = 50;
	this.init();
};

SelectionController.prototype = {
	init: function() {
		this.draw();
	    this.numbers = this.model.getYnumbers();
	    this.totalCellsNumber = this.numbers.length;
	    this.iCounter = 0;
	    this.sortHandler = this.sort.bind(this);
	    this.selectionSortHandler = this.selectionSort.bind(this);
	    this.sort();
	},

	draw: function() {
		this.view.drawNumbers();
	},

	sort: function() {
		this.minIndex = this.iCounter;
		this.deactiveCells();
		this.draw();
		this.jCounter = this.iCounter+1;
		this.selectionSortHandler();
	},
	
	selectionSort: function() {
		this.deactiveCells();
		this.model.setActiveCells([this.numbers[this.jCounter], this.numbers[this.minIndex]]);
		this.draw();
		this.minIndex = this.model.findMinIndex(this.jCounter, this.minIndex);
		this.jCounter += 1;
		if (this.jCounter < this.totalCellsNumber) {
        	setTimeout(this.selectionSortHandler, this.DELAY);	
        } else if (this.jCounter >= this.totalCellsNumber){
        	this.model.setActiveCells([this.numbers[this.iCounter],this.numbers[this.minIndex]]);
    		this.model.selectionSort(this.iCounter, this.minIndex);
    		this.draw();
    		this.iCounter += 1;
    		if (this.iCounter < this.totalCellsNumber-1) {
            	setTimeout(this.sortHandler, this.DELAY);	
            }
        }  
	},
	
	deactiveCells: function() {
		for(var i = this.iCounter; i<this.totalCellsNumber; i++){
			this.model.deactiveCells([this.numbers[i]]);
		}
	}

};

// -->
