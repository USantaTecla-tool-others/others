<!--  
var Model = function() {
	this.performAcceleration = true;
	this.MAX_POINT_NUMBER = 100000;
	this.RECTANGULAR_SIDE = 400;
	this.MESH_SIZE = 20;
};

Model.prototype = {
	getMaxPointNumber : function() {
		return this.MAX_POINT_NUMBER;
	},

	getPerformAcceleration : function() {
		return this.performAcceleration;
	},
	
	getRectangularSide : function() {
		return this.RECTANGULAR_SIDE;
	},
	
	getMeshSize : function() {
		return this.MESH_SIZE;
	}

};

//-->