<!--  
var ExerciseTitleDatabase = function() {
	this.exercises = new Array();
	this.init();
	
};

ExerciseTitleDatabase.prototype = {

    init: function() {
			this.exercises[0] = ["Expression A", "j == 1 && i == 2"];
			this.exercises[1] = ["Expression B", "j == 9 && i == 9"];
			this.exercises[2] = ["Expression C", "j == 18"];
			this.exercises[3] = ["Expression D", "i == 1"];
			this.exercises[4] = ["Expression E", "j == 9 || i == 9"];
			this.exercises[5] = ["Expression F", "j < 5 && i < 5"];
			this.exercises[6] = ["Expression G", "j < 5 || i < 5"];
			this.exercises[7] = ["Expression H", "i - j == 0"];
			this.exercises[8] = ["Expression I", "i + j == 18"];
			this.exercises[9] = ["Expression J", "i - j == 0 || i + j == 18"];
			this.exercises[10] = ["Expression K", "i - j == 1 || i - j == -1"];
			this.exercises[11] = ["Expression L", "j == 0 || j==18 || i==0 || i==18"];
			this.exercises[12] = ["Expression M", "j == 1 || j==17 || i==1 || i==17"];
			this.exercises[13] = ["Expression N", "(j == 1 || j==17 || i==1 || i==17) && j != 0 && j != 18 && i!=0 && i!=18"];
			this.exercises[14] = ["Expression N", "7 <= j && j<= 11"];
			this.exercises[15] = ["Expression O", "7 <= j && j<= 11 && 7 <= i && i<= 11"];
			this.exercises[16] = ["Expression P", "j - i == 9 || j - i == -9 || j + i == 9 || j + i == 27"];
			this.exercises[17] = ["Expression Q", "!(i == 9 && j == 9)"];
			this.exercises[18] = ["Expression R", "i != 9 && j != 9"];
			this.exercises[19] = ["Expression S", "true"];
			this.exercises[20] = ["Expression T", "(i + j)%2==0"];
			this.exercises[21] = ["Expression U", "(i + j)%2==1"];
			this.exercises[22] = ["Expression V", "y%3==0  || x%3==0"];
			this.exercises[21] = ["Expression X", "(y%3==0  || x%3==0) && j >2 0 && j <16 && i>2 && i<16"];
		},
	
	getExpression: function(exerciseNumber) {
		return this.exercises[exerciseNumber-1][1];
	},
	
	getExerciseName: function(exerciseNumber) {
		return this.exercises[exerciseNumber][0];
	}

};

//-->