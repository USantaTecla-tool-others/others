<!--  
var View = function(model) {
	this.model = model;
	this.questionColor = '#2baaf7';
	this.answerColor = '#0FF';
	this.missedResultColor ='#b9b8b7';
	this.correctAnswerColor ='#0F0';
	this.wrongAnswerColor ='#f6361f';
	
	this.cellWidth = 20;
	this.meshSize = this.model.getMeshSize();
	this.boardSide = this.meshSize * this.cellWidth;
	
	var questionContext = document.getElementById("question-board").getContext("2d");
	this.questionView = new MeshView(this.cellWidth, this.meshSize, questionContext);
	var answerContext = document.getElementById("answer-board").getContext("2d");
	this.answerView = new MeshView(this.cellWidth, this.meshSize, answerContext);
	var resultContext = document.getElementById("result-board").getContext("2d");
	this.resultView = new MeshView(this.cellWidth, this.meshSize, resultContext);
	this.selectedExercise = document.getElementById('exercises_list');
	
	this.init();

};

View.prototype = {
	init: function() {
		this.resetAllViews();
		exercises = this.model.getExcercises();
		for (exerciseNumber in exercises) {
			this.selectedExercise.add(new Option(this.model.getExerciseName(exerciseNumber)));
			
		}
	},
	
	resetAllViews: function() {
		this.reset(this.questionView);
		this.reset(this.answerView);
		this.reset(this.resultView);
    },
	
    reset: function(mesh) {
    	mesh.clearMesh();
    	mesh.drawMesh();
    },
	
	drawQuestion: function(exerciseNumber) {
		this.reset(this.questionView);
		this.draw(this.model.getQuestionCells(exerciseNumber),this.questionColor, this.questionView);
	},
	
	drawAnswer: function(coordinates) {
		this.reset(this.answerView);
		this.draw(coordinates,this.answerColor, this.answerView);
	},
	
	drawResult: function(coordinates) {
		this.reset(this.resultView);
		questionCells = this.model.getQuestionCells(this.model.getCurrentExerciseNumber());
		this.draw(questionCells,this.missedResultColor, this.resultView);
		this.draw(coordinates,this.wrongAnswerColor, this.resultView);
		for (var i = 0; i < questionCells.length; i++) {
			for (var j = 0; j < coordinates.length; j++) {
				if (questionCells[i].x == coordinates[j].x && questionCells[i].y == coordinates[j].y){
					this.resultView.drawCell(questionCells[i], this.correctAnswerColor);
				}
			}
			
		}
	},

    draw: function(coordinates, color, mesh) {
    	for (var i = 0; i < coordinates.length; i++) {
    		mesh.drawCell(coordinates[i], color);
    	}
	}
};

//-->