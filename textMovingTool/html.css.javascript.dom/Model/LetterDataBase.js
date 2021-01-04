<!--  
var LetterDataBase = function(meshSize) {
	this.letters = new Array();
	this.meshSize = meshSize;
	this.startCellY = (this.meshSize - 1)/2 - 2;
	this.init();
	
};

LetterDataBase.prototype = {

    init: function() {
    	this.letters[0] = ["A", this.setCells("A"), 4];
    	this.letters[1] = ["B", this.setCells("B"), 4];
    	this.letters[2] = ["C", this.setCells("C"), 4];
    	this.letters[3] = ["D", this.setCells("D"), 4];
    	this.letters[4] = ["E", this.setCells("E"), 4];
    	this.letters[5] = ["F", this.setCells("F"), 4];
    	this.letters[6] = ["G", this.setCells("G"), 4];
    	this.letters[7] = ["H", this.setCells("H"), 4];
    	this.letters[8] = ["I", this.setCells("I"), 3];
    	this.letters[9] = ["J", this.setCells("J"), 4];
    	this.letters[10] = ["K", this.setCells("K"), 4];
    	this.letters[11] = ["L", this.setCells("L"), 4];
    	this.letters[12] = ["M", this.setCells("M"), 5];
    	this.letters[13] = ["N", this.setCells("N"), 4];
    	this.letters[14] = ["O", this.setCells("O"), 4];
    	this.letters[15] = ["P", this.setCells("P"), 4];
    	this.letters[16] = ["Q", this.setCells("Q"), 5];
    	this.letters[17] = ["R", this.setCells("R"), 4];
    	this.letters[18] = ["S", this.setCells("S"), 4];
    	this.letters[19] = ["T", this.setCells("T"), 5];
    	this.letters[20] = ["U", this.setCells("U"), 4];
    	this.letters[21] = ["V", this.setCells("V"), 4];
    	this.letters[22] = ["W", this.setCells("W"), 5];
    	this.letters[23] = ["X", this.setCells("X"), 5];
    	this.letters[24] = ["Y", this.setCells("Y"), 5];
    	this.letters[25] = ["Z", this.setCells("Z"), 4];
    	this.letters[26] = [" ", this.setCells(" "), 1];
	},
	
	setCells: function(letter) {
		var startPosition = new Coordinate(0, this.startCellY);
		var cells = new Array();
		cells.push(startPosition);
		switch(letter.toUpperCase()) {
			case "A":
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 1));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 1));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 3));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 3));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 4));
				break;
			case "B":
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 1));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 1));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 3));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 3));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y + 4));
				break;
			case "C":
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 1));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 1));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 3));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 3));
				break;
			case "D":
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 1));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 3));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 1));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 3));
				break;
			case "E":
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 1));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 3));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 4));
				break;
			case "F":
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 1));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 3));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 4));
				break;
			case "G":
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 1));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 3));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 3));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y + 2));
				break;
			case "H":
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 1));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 1));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 3));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 3));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 4));
				break;
			case "I":
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y));
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y + 1));
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y + 3));
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y + 4));
				break;
			case "J":
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 1));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 3));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 3));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y + 4));
				break;
			case "K":
				cells.push(new Coordinate(startPosition.x , startPosition.y + 1));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 3));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y + 1));
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y + 3));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 4));
				break;
			case "L":
				cells.push(new Coordinate(startPosition.x , startPosition.y + 1));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 3));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 4));
				break;
			case "M":
				cells.push(new Coordinate(startPosition.x , startPosition.y + 1));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 3));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y + 1));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 1));
				cells.push(new Coordinate(startPosition.x + 4 , startPosition.y));
				cells.push(new Coordinate(startPosition.x + 4 , startPosition.y + 1));
				cells.push(new Coordinate(startPosition.x + 4 , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x + 4 , startPosition.y + 3));
				cells.push(new Coordinate(startPosition.x + 4 , startPosition.y + 4));
				break;
			case "N":
				cells.push(new Coordinate(startPosition.x , startPosition.y + 1));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 3));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y + 1));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 3));
				cells.push(new Coordinate(startPosition.x + 4 , startPosition.y));
				cells.push(new Coordinate(startPosition.x + 4 , startPosition.y + 1));
				cells.push(new Coordinate(startPosition.x + 4 , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x + 4 , startPosition.y + 3));
				cells.push(new Coordinate(startPosition.x + 4 , startPosition.y + 4));
				break;
			case "O":
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 1));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 3));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 1));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 3));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y + 4));
				break;
			case "P":
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 1));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 1));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 3));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 4));
				break;
			case "Q":
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 1));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 3));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 1));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 3));
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x + 4 , startPosition.y + 4));
				break;
			case "R":
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 1));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 1));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 3));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y + 3));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 4));
				break;
			case "S":
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 1));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 3));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 3));
				break;
			case "T":
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y));
				cells.push(new Coordinate(startPosition.x + 4 , startPosition.y));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y + 1));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y + 3));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y + 4));
				break;
			case "U":
				cells.push(new Coordinate(startPosition.x , startPosition.y + 1));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 3));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 1));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 3));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y + 4));
				break;
			case "V":
				cells.push(new Coordinate(startPosition.x , startPosition.y + 1));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 3));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 1));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 3));
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y + 4));
				break;
			case "W":
				cells.push(new Coordinate(startPosition.x , startPosition.y + 1));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 3));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y + 3));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 3));
				cells.push(new Coordinate(startPosition.x + 4 , startPosition.y));
				cells.push(new Coordinate(startPosition.x + 4 , startPosition.y + 1));
				cells.push(new Coordinate(startPosition.x + 4 , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x + 4 , startPosition.y + 3));
				cells.push(new Coordinate(startPosition.x + 4 , startPosition.y + 4));
				break;
			case "X":
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y + 1));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 1));
				cells.push(new Coordinate(startPosition.x + 4 , startPosition.y));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y + 3));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 3));
				cells.push(new Coordinate(startPosition.x + 4 , startPosition.y + 4));
				break;
			case "Y":
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y + 1));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 1));
				cells.push(new Coordinate(startPosition.x + 4 , startPosition.y));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y + 3));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y + 4));
				break;
			case "Z":
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 1));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y + 2));
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y + 3));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x + 2 , startPosition.y + 4));
				cells.push(new Coordinate(startPosition.x + 3 , startPosition.y + 4));
				break;
			case " ":
				cells[0].setInvisible();
				cells.push(new Coordinate(startPosition.x , startPosition.y + 1, false));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 2, false));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 3, false));
				cells.push(new Coordinate(startPosition.x , startPosition.y + 4, false));
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y, false));
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y + 1, false));
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y + 2, false));
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y + 3, false));
				cells.push(new Coordinate(startPosition.x + 1 , startPosition.y + 4, false));
		}
		return cells;
	},
	
	getLetterLength: function(letter) {
		for (index in this.letters) {
			if (this.letters[index][0] == letter.toUpperCase()) {
				return this.letters[index][2] + 1;
			}
		}
	},
	
	getLetterCells: function(letter) {
		for (index in this.letters) {
			if (this.letters[index][0] == letter.toUpperCase()) {
				return this.letters[index][1];
			}
		}
		
	}

};
//-->