<!--  
var MeshView = function(cellWidth, meshSize) {
	this.meshSize = meshSize;
	this.cellWidth = cellWidth;
	this.boardSide = this.meshSize * this.cellWidth;
	this.context = document.getElementById("the-board").getContext("2d");
};

MeshView.prototype = {
	drawMesh: function() {
		var i = 0;
		while (i <= this.boardSide) {
			this.drawLine(0, this.boardSide, i, i)
			this.drawLine(i, i, 0, this.boardSide)
			i = i + this.cellWidth;
		}
	},

	drawLine: function(x1, x2, y1, y2) {
		this.context.beginPath();
		this.context.moveTo(x1, y1);
		this.context.lineTo(x2, y2);
		this.context.stroke();
	},
	
	drawCell: function(coordinate, color) {
    	this.context.fillStyle = color;
		var x = coordinate.x * this.cellWidth;
    	var y = coordinate.y * this.cellWidth;
    	this.context.beginPath();
    	this.context.moveTo(x,y);
    	this.context.lineTo(x+this.cellWidth,y);
    	this.context.lineTo(x+this.cellWidth,y+this.cellWidth);
    	this.context.lineTo(x,y+this.cellWidth);
    	this.context.closePath();
    	this.context.fill();
    },
	
	clearMesh: function() {
		this.context.clearRect(0, 0, this.boardSide, this.boardSide);
    },
    
    printMessage: function(msg, color) {
    	this.context.fillStyle = color;
    	this.context.textBaseline = 'middle'; 
    	this.context.textAlign = 'center'; 
    	this.context.font = 'normal bold 18px serif';
    	this.context.fillText(msg, this.boardSide/2, this.boardSide/2);
    }

};

//-->