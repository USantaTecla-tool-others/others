<!--  
var Controller = function(model, view) {
	this.model = model;
	this.view = view;
	this.performAcceleration = this.model.getPerformAcceleration();
	this.total = 0;
	this.inside = 0;

	this.init();
};

Controller.prototype = {
	init: function () {
        this.setupHandlers();
        this.main();
    },
    
	setupHandlers: function () {
        this.getNewPointHandler = this.getNewPoint.bind(this);
        this.addPointHandler = this.addPoint.bind(this);
        this.drawPointHandler = this.drawPoint.bind(this);
        this.isPointInsideCircleHandler = this.isPointInsideCircle.bind(this);
        this.mainHandler = this.main.bind(this);
        return this;
    },

	getRandomSingleCoordinate : function() {
		return ((Math.random() * 2) - 1);
	},

	getNewPoint : function() {
		return {
			x : this.getRandomSingleCoordinate(),
			y : this.getRandomSingleCoordinate()
		}
	},
	
	isPointInsideCircle : function(x, y) {
		return ((x * x) + (y * y)) < 1;
	},
	
	addPoint : function(x, y) {
		this.total++;
		if (this.isPointInsideCircle(x, y)) {
			this.inside++;
		}
	},

	drawPoint : function(x, y, isPointInsideCircle) {
		this.view.drawPoint(x, y, isPointInsideCircle);
	},
	
	main : function() {
		try {
			var pointsToAdd = 1;
			if (this.total > 0 && this.performAcceleration) {
				pointsToAdd = Math.pow((Math.floor(Math.log10(this.total)) + 1), 3);
			}
			for (var i = 0; i < pointsToAdd; i++) {
				var newPoint = this.getNewPointHandler();
				this.addPointHandler(newPoint.x, newPoint.y);
				this.drawPointHandler(newPoint.x, newPoint.y, this.isPointInsideCircleHandler(newPoint.x, newPoint.y));
			}
			this.view.showDrawnPoints(this.total);
			this.view.showTotalInsidePoints(this.inside);
			this.view.showCalculatedPi(this.inside, this.total);
			if (this.total < this.model.getMaxPointNumber()) {
				setTimeout(this.mainHandler, 1);
			}
		} catch (e) {
	        console.log(e.message);
	    }
	}


};

//-->