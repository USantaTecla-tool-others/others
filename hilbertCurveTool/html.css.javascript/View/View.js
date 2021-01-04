<!--  

var View = function(model) {
	this.model = model;
	this.meshSize = this.model.getMeshSize();
	this.cellWidth = this.model.getCellWidth();
	context = document.getElementById("board").getContext("2d");
	this.meshView = new MeshView(this.cellWidth, this.meshSize, context);
};

View.prototype = {

    reset: function() {
    	this.meshView.clearMesh();
    	this.meshView.drawMesh();
    },

    draw: function(coordinate1, coordinate2, color) {
    	this.meshView.draw(coordinate1.x, coordinate1.y, coordinate2.x, coordinate2.y, color);
    },
	
	printMessage: function(msg) {
		alert(msg);
    }
};

//-->