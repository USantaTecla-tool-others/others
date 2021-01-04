<!--  
var GameView = function(game) {
	this.game = game;
	this.meshSize = this.game.getLength();
	this.cellWidth = 20;
	this.boardSide = this.meshSize * this.cellWidth;
	this.scoreboard = document.getElementById("score");
	this.context = document.getElementById("the-board").getContext("2d");
	this.meshView = new MeshView(this.cellWidth, this.meshSize);
	this.snakeView = new SnakeView(this.game.getSnake(), this.meshView);
	this.targetView = new TargetView(this.game.getTarget(), this.meshView);
};

GameView.prototype = {
	drawMesh: function() {
		this.meshView.drawMesh();
	},
	
	clearMesh: function() {
		this.meshView.clearMesh();
    },
    
    drawScore: function() {
    	this.scoreboard.innerHTML = this.game.getScore();
    },
    
    refresh: function() {
    	this.clearMesh();
    	this.drawMesh();
    	this.snakeView.draw();
    	this.targetView.draw(this.game.getTarget());
    	this.drawScore();
    },
    
    gameOver: function() {
    	this.context.fillStyle = 'red';
    	this.context.textBaseline = 'middle'; 
    	this.context.textAlign = 'center'; 
    	this.context.font = 'normal bold 24px serif';
    	this.context.fillText('Game over', this.boardSide/2, this.boardSide/2);
    }

};

//-->