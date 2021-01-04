<!--  
var GameController = function(game, gameView) {
	this.DELAY = 400;
	this.sizeToIncrease = 1;
	this.game = game;
	this.gameView = gameView;
	this.init();
	};

GameController.prototype = {
	init: function() {
		try {
			this.playHandler = this.play.bind(this);
			this.onKeyPressedHandler = this.onKeyPressed.bind(this);
			addEventListener("keydown", this.onKeyPressedHandler , false);
		} catch (e) {
			console.log(e.message);
		}
	},
	
	onKeyPressed: function (e) {
	    this.game.changeDirection(e.keyCode);
	    this.gameView.refresh();
	},
	
	play: function() {
		if (this.game.isPossibleNextStep()) {
			this.game.advanceNextStep();
			this.gameView.refresh();
			if (this.game.hitTarget()) {
				this.game.resetTarget();
				this.game.setScore();
				this.game.enlarge(this.sizeToIncrease);
				this.gameView.refresh();
			} 
			setTimeout(this.playHandler, this.DELAY);
		} else {
			this.gameView.gameOver();
		}
	}
};

// -->
