<!--  
var Controller = function(model, view) {
	this.model = model;
	this.view = view;
	this.answerForm = document.getElementById("input-form");
	this.firstInput = document.getElementById("first-number");
	this.secondInput = document.getElementById("second-number");
	this.nextButton = document.getElementById("next_btn");
	this.startPointX = 1;
	this.startPointY = 1;
	this.meshSize = this.model.getMeshSize();
	this.init();
};

Controller.prototype = {
	init: function() {
		this.onSubmitHandler = this.onSubmit.bind(this);
		addEventListener("submit", this.onSubmitHandler , false);
		this.onClickNextHandler = this.onClickNext.bind(this);
		this.nextButton.addEventListener("click", this.onClickNextHandler);
        this.reset();

	},
	
	reset: function() {
		this.view.reset();
		this.startPointCoordinate = this.model.getCoordinate(this.startPointX,this.startPointY);
	},
	
	onSubmit: function(e) {
		this.reset();
		this.firstNumber = Number(this.firstInput.value);
		this.secondNumber = Number(this.secondInput.value);
		if (this.firstNumber + this.startPointX > this.meshSize || this.secondNumber + this.startPointY > this.meshSize ||
				this.firstNumber < 1 || this.secondNumber < 1) {
			this.view.printMessage("Numbers out of range! Try Again!", 'red');
			return;
		}
		this.model.setRectangle(this.firstNumber, this.secondNumber, this.startPointCoordinate);
		this.view.drawRectangle(this.model.getR1().x, this.model.getR1().y, this.firstNumber, this.secondNumber);
		this.start();
	},

	onClickNext: function(e) {
		this.model.setFreeCells();
		this.view.drawCells();
		this.view.drawRectangle(this.startPointX, this.startPointY, Number(this.firstInput.value), Number(this.secondInput.value));
		if (this.firstNumber != 0 && this.secondNumber != 0) {
			this.start();
		} else {
			this.showResult();
		}
		
	},
	
	start: function() {
		if (this.firstNumber >= this.secondNumber){
			this.drawArc(this.model.getR3(), this.secondNumber, 1.5, 0);
			this.model.setR1(this.model.getR1().x + this.secondNumber, this.model.getR1().y);
			this.model.setR3(this.model.getR3().x + this.secondNumber, this.model.getR3().y);
			this.startPointCoordinate = this.model.getR1();
			this.endPointCoordinate = this.model.getR3();
			this.drawLine();
			this.firstNumber -= this.secondNumber;
		} else {
			this.drawArc(this.model.getR1(), this.firstNumber, 0, 0.5);
			this.model.setR1(this.model.getR1().x, this.model.getR1().y + this.firstNumber);
			this.model.setR2(this.model.getR2().x, this.model.getR2().y + this.firstNumber);
			this.startPointCoordinate = this.model.getR2();
			this.endPointCoordinate = this.model.getR1();
			this.drawLine();
			this.secondNumber -= this.firstNumber;
		}
		
	},
	
	drawLine: function(){
		this.view.drawLine(this.startPointCoordinate.x, this.endPointCoordinate.x, this.startPointCoordinate.y, this.endPointCoordinate.y)
	},
	
	drawArc: function(center, r, sAngle, eAngle){
		this.view.drawArc(center, r, sAngle, eAngle);
	},
	
	showResult: function(){
		if (this.firstNumber == 0) {
			this.gcd = this.secondNumber;
		} else {
			this.gcd = this.firstNumber;
		}
		var finished = true;
		this.view.drawCells(finished);
		var x = Number(this.firstInput.value);
		var y = Number(this.secondInput.value);
		for (var i=this.startPointX ; i<=this.startPointX + x; i+=this.gcd) {
			this.view.drawLine(i, i, this.startPointY, this.startPointY+y, finished);
		}
		for (var i=this.startPointY ; i<=this.startPointY + y; i+=this.gcd){
			this.view.drawLine(this.startPointX, this.startPointX + x, i, i, finished);
		}
		this.view.printMessage("The Greatest Common Divisor is: " + this.gcd, 'blue');
	}

};

// -->
