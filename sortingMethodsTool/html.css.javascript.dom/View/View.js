<!--  

var View = function(model, divName) {
	this.model = model;
	this.numberColor = '#0FF';
	this.activeComparingPairColor ='#b9b8b7';
	this.meshSize = this.model.getMeshSize();
	this.cellWidth = 10;
	
	var sortContext = document.getElementById(divName).getContext("2d");
	this.sortView = new MeshView(this.cellWidth, this.meshSize, sortContext);
};

View.prototype = {

    reset: function(meshView) {
    	meshView.clearMesh();
    	meshView.drawMesh();
    },
    
    drawNumbers: function() {
		this.reset(this.sortView);
		this.draw(this.model.getCells(),this.sortView);
	},
	
	draw: function(cells, meshView) {
    	for (var i=0 ; i<cells.length; i++) {
			for (var j=0 ; j<cells.length; j++) {
				if (cells[i][j].isVisible() === true) {
					if (cells[i][j].isActive() === true) {
						meshView.drawCell(cells[i][j], this.activeComparingPairColor);
					} else {
						meshView.drawCell(cells[i][j], this.numberColor);
					}
	    			
	    		}
			}
		}
    	meshView.drawMesh();
    }
};

//-->