<!--  
var Controller = function(model, view) {
	this.model = model;
	this.view = view;
	this.answerForm = document.getElementById("answer-form");
	this.answer = document.getElementById("answer");
	this.previousButton = document.getElementById("previous_btn");
	this.nextButton = document.getElementById("next_btn");
	this.selectedExercise = document.getElementById('exercises_list');

	this.init();
};

Controller.prototype = {
	init: function() {
		this.setCurrentExerciseNumber(1);
		this.onSubmitHandler = this.onSubmit.bind(this);
		addEventListener("submit", this.onSubmitHandler , false);
		this.onClickPreviousHandler = this.onClickPrevious.bind(this);
		this.onClickNextHandler = this.onClickNext.bind(this);
		this.previousButton.addEventListener("click", this.onClickPreviousHandler);
		this.nextButton.addEventListener("click", this.onClickNextHandler);
		this.onChangeHandler = this.onChange.bind(this);
		this.selectedExercise.addEventListener("change", this.onChangeHandler);
		
		this.drawCurrentQuestion();
	},
	
	onSubmit: function (e) {
		this.view.drawAnswer(this.model.getAnswerCells(this.answer.value));
		this.view.drawResult(this.model.getAnswerCells(this.answer.value));
	},
	
	onClickPrevious: function (e) {
		if (this.getCurrentExerciseNumber() > 1) {
			this.refreshQuestion(this.getCurrentExerciseNumber() - 1);
		}
	},
	
	onClickNext: function (e) {
		if ( this.getCurrentExerciseNumber() < this.getTotalExcerciseNumber()) {
			this.refreshQuestion(this.getCurrentExerciseNumber() + 1);
		}
	},
	
	onChange: function (e) {
		this.refreshQuestion(this.selectedExercise.selectedIndex);
	},
	
	refreshQuestion: function(exerciseNumber) {
		this.setCurrentExerciseNumber(exerciseNumber);
		this.resetAllViews();
		this.drawCurrentQuestion();
	},
	
	drawCurrentQuestion: function() {
		this.view.drawQuestion(this.getCurrentExerciseNumber());
	},
	
	resetAllViews: function() {
		this.view.resetAllViews();
	},
	
	setCurrentExerciseNumber: function(currentExerciseNumber) {
		this.model.setCurrentExerciseNumber(currentExerciseNumber);
	},
	
	getCurrentExerciseNumber: function() {
		return this.model.getCurrentExerciseNumber();
	},
	
	getTotalExcerciseNumber: function() {
		return this.model.getTotalExcerciseNumber();
	}

};
    		
// -->
