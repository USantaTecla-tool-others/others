<!--  
var Controller = function(model, view) {
	this.model = model;
	this.view = view;
	this.textForm = document.getElementById("input-text-form");
	this.text = document.getElementById("input-text");
	this.DELAY = 400;
	this.init();
	};

Controller.prototype = {
	init: function() {
		this.onSubmitHandler = this.onSubmit.bind(this);
		addEventListener("submit", this.onSubmitHandler , false);
		this.moveHandler = this.move.bind(this);
		this.view.refresh();
		this.validation = false;
	},
	
	onSubmit: function (e) {
		this.view.refresh();
		this.setTextLetters();
		temp = this.textLetters.slice();
		if (this.model.isTextLengthValid(temp) === false) {
			this.validation = false;
			this.view.printMessage("Text length out of range! Please type a shorter text!", 'red');
			return;
		}
		this.validation = true;
		this.currentTextCells = this.model.getLetterCells(this.textLetters.pop());
		this.move();
	},

	setTextLetters: function () {
		this.textLetters = Array.from(this.text.value)
	},
	
	move: function() {
		if (this.validation === true) {
			this.draw();
			if (this.textLetters.length > 0 && this.validation === true) {
				var temp = this.textLetters.slice();
				var newTextCells = this.model.getLetterCells(temp.pop());
				if (this.model.exists(newTextCells, this.currentTextCells) === false){
					this.currentTextCells = this.model.getNextPosition(this.currentTextCells)
					this.draw();
					this.textLetters = temp;
					this.currentTextCells = this.currentTextCells.concat(newTextCells);
					this.draw();
				}
			}
			this.currentTextCells = this.model.getNextPosition(this.currentTextCells)
			setTimeout(this.moveHandler, this.DELAY);
		}
	},
	
	draw: function(){
		this.view.refresh();
		this.view.draw(this.currentTextCells);
	}
	
};

// -->
