<!--  
var Controller = function(model, view) {
	this.model = model;
	this.view = view;
	this.meshSize = this.model.getMeshSize();
	this.orderInput = document.getElementById("snowflake-order");
	this.canvas = document.getElementById("board");
	this.maxOrderNumber = 6;
	this.orderFlag = true;
	this.init();
};

Controller.prototype = {
	init: function() {
		this.reset();
		this.drawHandler = this.draw.bind(this);
		this.onSubmitHandler = this.onSubmit.bind(this);
		addEventListener("submit", this.onSubmitHandler , false);
		this.draw();
	},
	
	reset: function() {
		this.model.setPosition(this.canvas.width, this.canvas.height);
		this.model.setMin(this.canvas.width, this.canvas.height);
		this.model.setup();
		this.view.reset();
	},
	
	onSubmit: function(e) {
		var orderNumber = Number(this.orderInput.value);
		if (orderNumber < 1 || orderNumber > this.maxOrderNumber) {
			this.view.printMessage("Order out of range! Try Again!");
			this.view.reset();
			this.orderFlag = false;
			return;
		}
		this.model.setOrderNumber(orderNumber-1);
		this.reset();
		this.orderFlag = true;
		this.draw();
	},
	
	draw: function() {
		if(this.model.isFinished() === true) {
			return;
		}
		var nextMove = this.model.getNextMove();
		
		if(nextMove[0] === true) {
			this.view.draw(nextMove[1], nextMove[2], this.model.getColor());
		}
		this.model.addIndex();
		if (this.orderFlag === true){
			requestAnimationFrame(this.drawHandler);
		}
	}
	
};

//-->