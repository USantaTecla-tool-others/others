<!--  
var MeshView = function(cellWidth, meshSize, context) {
	this.meshSize = meshSize;
	this.cellWidth = cellWidth;
	this.boardSide = this.meshSize * this.cellWidth;
	this.context = context;
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
    
    drawRectangle: function(xStartPoint, yStartPoint, xLength, yLength, color) {
    	xStartPoint = this.getScale(xStartPoint);
    	yStartPoint = this.getScale(yStartPoint);
    	xLength = this.getScale(xLength);
    	yLength = this.getScale(yLength);
    	this.drawLine(xStartPoint, xStartPoint + xLength, yStartPoint, yStartPoint, color);
    	this.drawLine(xStartPoint, xStartPoint, yStartPoint, yStartPoint + yLength, color);
    	this.drawLine(xStartPoint, xStartPoint + xLength, yStartPoint + yLength, yStartPoint + yLength, color);
    	this.drawLine(xStartPoint + xLength, xStartPoint + xLength, yStartPoint, yStartPoint + yLength, color);
    },
    
    drawArc: function(center, r, sAngle, eAngle, color){
		var x = center.x * this.cellWidth;
    	var y = center.y * this.cellWidth;
    	this.context.beginPath();
    	this.context.arc(x, y, r * this.cellWidth, sAngle * Math.PI, eAngle * Math.PI);
    	this.context.strokeStyle = color;
    	this.context.stroke();
	},
    
    getScale: function(pointToScale) {
    	return pointToScale * this.cellWidth;
    }

};

//-->