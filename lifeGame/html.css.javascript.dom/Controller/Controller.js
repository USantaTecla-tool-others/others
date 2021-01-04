<!--  
var Controller = function(model, view) {
	this.model = model;
	this.view = view;
	this.DELAY = 100;
	this.init();
};

Controller.prototype = {
	init: function() {
		this.playHandler = this.play.bind(this);
		this.resetView();
		this.model.setInitialCells();
		
		this.play();

	},
	
	resetView: function() {
		this.view.reset();
	},
	
	drawCurrentCells: function() {
		this.view.draw();
	},
	
	play: function() {
		this.resetView();
		this.drawCurrentCells();
		this.model.update();
		setTimeout(this.playHandler, this.DELAY);
	}
};
    		
// -->
