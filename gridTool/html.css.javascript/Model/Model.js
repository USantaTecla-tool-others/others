<!--  
var Model = function() {
	this.meshSize = 19;
	this.exerciseTitleDatabase = new ExerciseTitleDatabase();
	
};

Model.prototype = {
		
	getQuestionCells: function(exerciseNumber) {
		var expression = new Function("i", "j",this.getReturn(this.exerciseTitleDatabase.getExpression(exerciseNumber)));
		return this.getCells(expression);
	},

	getAnswerCells: function(answer) {
		var expression = new Function("x", "y", this.getReturn(answer));
		return this.getCells(expression);
	},

	getCells: function(expression) {
		cells = new Array();
		for (var i = 0; i < this.meshSize; i++) {
			for (var j = 0; j < this.meshSize; j++) {
				if (expression(i,j)) {
					cells.push(new Coordinate(i,j));
				}
			}
		} 
		return cells;
	},
	
	getMeshSize: function() {
		return this.meshSize;
	},
	
	getReturn: function(expression) {
		return "return " + expression + ";";
	},
	
	setCurrentExerciseNumber: function(currentExerciseNumber) {
		this.currentExerciseNumber = currentExerciseNumber;
	},
	
	getCurrentExerciseNumber: function() {
		return this.currentExerciseNumber;
	},
	
	getTotalExcerciseNumber: function() {
		return this.exerciseTitleDatabase.exercises.length;
	},
	
	getExerciseName: function(exerciseNumber) {
		return this.exerciseTitleDatabase.getExerciseName(exerciseNumber);
	},
	
	getExcercises: function() {
		return this.exerciseTitleDatabase.exercises;
	}

};

//-->