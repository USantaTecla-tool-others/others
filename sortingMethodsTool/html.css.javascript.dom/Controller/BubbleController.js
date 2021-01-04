<!--  
var BubbleController = function(model, view) {
	this.model = model;
	this.view = view;
	this.DELAY = 50;
	this.init();
};

BubbleController.prototype = {
	init: function() {
		this.draw();
	    this.numbers = this.model.getYnumbers();
	    this.iCounter = this.numbers.length;
	    this.sortHandler = this.sort.bind(this);
	    this.bubbleSortHandler = this.bubbleSort.bind(this);
	    this.sort();
	},

	draw: function() {
		this.view.drawNumbers();
	},
	
	sort: function() {
        this.jCounter = 1;
        this.bubbleSort();
        this.iCounter -= 1;
	},
	
	bubbleSort: function() {
		this.model.setActiveCells([this.numbers[this.jCounter],this.numbers[this.jCounter-1]]);
        this.draw();
        this.model.bubbleSort(this.jCounter);
        this.draw();
        this.jCounter +=1;
        this.model.deactiveCells([this.numbers[this.jCounter-2]]);
        if (this.jCounter <= this.iCounter) {
        	setTimeout(this.bubbleSortHandler, this.DELAY);			
        } else if (this.iCounter > 0){
        	setTimeout(this.sortHandler, this.DELAY);
        }
	}

};

// -->
