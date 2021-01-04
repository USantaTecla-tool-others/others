<!-- 
var Model = function() {
	this.meshSize = 41;
	this.letterDataBase = new LetterDataBase(this.meshSize);
};

Model.prototype = {
	isTextLengthValid: function(text) {
		var length = 0;
		while (text.length > 0) {
			length += this.getLetterLength(text.pop());
		}
		if (length <= this.meshSize) {
			return true;
		}
		return false;
	},
	
	getLetterLength: function(letter) {
		return this.letterDataBase.getLetterLength(letter);
	},
	
	getLetterCells: function(letter) {
		return this.letterDataBase.getLetterCells(letter);
	},
	
	getNextPosition: function(currentLetterCells) {
		var newPositionCells = new Array();
		for (index in currentLetterCells) {
			newPositionCells.push(currentLetterCells[index].getNext(this.meshSize));
		}
		return newPositionCells;
	},
	
	getMeshSize: function() {
		return this.meshSize;
	},
	
	exists: function(newTextCells, currentTextCells) {
		for (index in newTextCells) {
			if (newTextCells[index].exists(currentTextCells) === true) {
				return true;
			}
		}
		return false;
	}
};
// -->
