<!--  

var View = function(model, divName) {
	this.model = model;
	this.color = 'blue';
	this.activeColor ='black';
	this.finishedColor ='#0F0';
	this.processedCellColor = 'red';
	this.meshSize = this.model.getMeshSize();
	this.cellWidth = this.model.getCellWidth();
	this.context = document.getElementById("board").getContext("2d");
	this.meshView = new MeshView(this.cellWidth, this.meshSize, this.context);
	this.boardSide = this.meshSize * this.cellWidth;
};

View.prototype = {

    reset: function() {
    	this.meshView.clearMesh();
    	this.meshView.drawMesh();
    },

    drawCells: function(finished) {
    	var cells = this.model.getRectangleCells();
    	if(typeof finished == 'undefined') {
			color = this.processedCellColor;
	    } else {
	    	color = this.finishedColor;
	    }
    	for (xIndex in cells) {
			for (yIndex in cells[xIndex]) {
				if (cells[xIndex][yIndex].isUsed() === true) {
					this.meshView.drawCell(cells[xIndex][yIndex], color);
				}
			}
		}
    	this.meshView.drawMesh();
    },
    
    drawLine: function(x1, x2, y1, y2,finished) {
    	if(typeof finished == 'undefined') {
			color = this.color;
	    } else {
	    	color = this.processedCellColor;
	    }
    	this.meshView.drawLine(x1 * this.cellWidth, x2 * this.cellWidth, y1 * this.cellWidth, y2 * this.cellWidth, color);
    },
    
    drawRectangle: function(xStartPoint, yStartPoint, xLength, yLength) {
    	this.meshView.drawRectangle(xStartPoint, yStartPoint, xLength, yLength, this.activeColor);
    	this.meshView.drawRectangle(xStartPoint, yStartPoint, xLength, yLength, this.activeColor);
    	this.meshView.drawRectangle(xStartPoint, yStartPoint, xLength, yLength, this.activeColor);
    	this.meshView.drawRectangle(xStartPoint, yStartPoint, xLength, yLength, this.activeColor);
    },
    
    drawArc: function(center, r, sAngle, eAngle){
		this.meshView.drawArc(center, r, sAngle, eAngle, this.color);
	},
	
	printMessage: function(msg, color) {
    	this.context.fillStyle = color;
    	this.context.textBaseline = 'middle'; 
    	this.context.textAlign = 'center'; 
    	this.context.font = 'normal bold 24px serif';
    	this.context.fillText(msg, this.boardSide/2, this.boardSide/2);
    }
};

//-->