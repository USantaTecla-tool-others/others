<!--  

var View = function(model) {
	this.model = model;
	this.meshSize = this.model.getMeshSize();
	this.cellWidth = 10;
	this.aliveColor = '#0F0';
	this.boardSide = this.meshSize * this.cellWidth;
	this.meshView = new MeshView(this.cellWidth, this.meshSize);
};

View.prototype = {
    reset: function() {
    	this.clearMesh();
    	this.drawMesh();
    },
    
    drawMesh: function() {
		this.meshView.drawMesh();
	},
	
	clearMesh: function() {
		this.meshView.clearMesh();
    },
    
    draw: function() {
    	cells = this.model.getCells();
    	for (var i=0 ; i<cells.length; i++) {
			for (var j=0 ; j<cells.length; j++) {
				if (cells[i][j].isAlive() === true) {
	    			this.meshView.drawCell(cells[i][j], this.aliveColor);
	    		}
			}
		}
    	this.meshView.drawMesh();
    }
};

//-->