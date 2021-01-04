<!--  
var View = function(model) {
	this.model = model;
	this.rectangularSide = this.model.getRectangularSide();
	this.svg = document.getElementsByTagName('svg')[0];
	this.totalDrawnPoints = document.getElementById('total');
	this.totalInsidePoints = document.getElementById('inside');
	this.calculatedPi = document.getElementById('pi');

	this.drawMesh();
};

View.prototype = {
	drawMesh : function() {
		var meshSize = this.model.getMeshSize();
		var i = 0;
		while (i <= this.rectangularSide) {
			this.drawLine(0, this.rectangularSide, i, i)
			this.drawLine(i, i, 0, this.rectangularSide)
			i = i + meshSize;
		}
	},

	drawLine : function(x1, x2, y1, y2) {
		var line = document.createElementNS("http://www.w3.org/2000/svg",
				'line');
		line.setAttribute('x1', x1);
		line.setAttribute('x2', x2);
		line.setAttribute('y1', y1);
		line.setAttribute('y2', y2);
		this.svg.appendChild(line);
	},

	drawPoint : function(x, y, isPointInsideCircle) {
		var point = document.createElementNS("http://www.w3.org/2000/svg",
				'rect');
		point.setAttribute('x', (x + 1) * (this.rectangularSide / 2));
		point.setAttribute('y', (y + 1) * (this.rectangularSide / 2));
		point.setAttribute('width', 1);
		point.setAttribute('height', 1);
		if (isPointInsideCircle) {
			point.setAttribute('class', 'inside');
		}
		this.svg.appendChild(point);
	},

	showDrawnPoints : function(totalDrawnPointsNumber) {
		this.totalDrawnPoints.innerHTML = totalDrawnPointsNumber;
	},

	showTotalInsidePoints : function(totalInsidePointsNumber) {
		this.totalInsidePoints.innerHTML = totalInsidePointsNumber;
	},

	showCalculatedPi : function(insidePointsNumber, drawnPointsNumber) {
		this.calculatedPi.innerHTML = insidePointsNumber / drawnPointsNumber
				* 4;
	}

};

//-->