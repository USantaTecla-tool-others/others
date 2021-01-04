<!--  
var MeshView = function(cellWidth, meshSize, context) {
	this.meshSize = meshSize;
	this.cellWidth = cellWidth;
	this.boardSide = this.meshSize * this.cellWidth;
	this.context = context;
	this.fractalColor = '#0F0';
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

	drawLine: function(x1, x2, y1, y2, color) {
		this.context.beginPath();
		this.context.moveTo(x1, y1);
		this.context.lineTo(x2, y2);
		if(typeof color == 'undefined') {
			color = '#b9b8b7';
	    }
		this.context.strokeStyle = color;
		this.context.stroke();
	},
	
	draw: function(x1, y1, x2, y2, color) {
		this.context.strokeStyle = "hsl(" + color + ", 100%, 50%)";
		this.context.beginPath();
		this.context.moveTo(x1, y1);
		this.context.lineTo(x2, y2);
		this.context.stroke();
    },
	
	clearMesh: function() {
		this.context.clearRect(0, 0, this.boardSide, this.boardSide);
    }

};

//-->