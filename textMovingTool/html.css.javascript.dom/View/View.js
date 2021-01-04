<!--  

var View = function(model) {
	this.model = model;
	this.meshSize = this.model.getMeshSize();
	this.cellWidth = 10;
	this.meshView = new MeshView(this.cellWidth, this.meshSize);
	this.color = '#0FF';
};

View.prototype = {

    refresh: function() {
    	this.meshView.clearMesh();
    	this.meshView.drawMesh();
    },
    
    draw: function(coordinates) {
    	for (var i = 0; i < coordinates.length; i++) {
    		if (coordinates[i].visible === true) {
    			this.meshView.drawCell(coordinates[i], this.color);
    		}
    	}
	},
	
	printMessage: function(msg, color) {
		this.refresh();
		this.meshView.printMessage(msg, color);
    }
};

//-->