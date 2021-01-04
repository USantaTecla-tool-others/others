<!--  
var SnakeView = function(snake, meshView) {
	this.snake = snake;
	this.snakeColor = '#0F0';
	this.meshView = meshView;

};

SnakeView.prototype = {
	draw: function() {
		for(i = 0; i< this.snake.getPolyline().coordinates.length; i++){
			this.meshView.drawCell(this.snake.getPolyline().coordinates[i], this.snakeColor);

		}
	}
};

//-->