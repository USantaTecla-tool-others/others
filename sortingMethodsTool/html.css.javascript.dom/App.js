<!--  
(function() {
	var ynumbers = new Array();
	for (var i=0 ; i<40 ; i++) {
		var ok = false;
		do {
			var number = Math.floor(Math.random() * (40)) + 1;
			if (ynumbers.includes(number) === false) {
				ynumbers.push(number);
				ok = true;
			}
		} while (!ok);
	}
	var bubbleModel = new Model(ynumbers.slice());
	var bubbleView = new View(bubbleModel, "bubble-sort-board");
	var bubbleController = new BubbleController(bubbleModel, bubbleView);
	var selectionModel = new Model(ynumbers.slice());
	var selectionView = new View(selectionModel, "selection-sort-board");
	var selectionController = new SelectionController(selectionModel, selectionView);
	var insertionModel = new Model(ynumbers.slice());
	var insertionView = new View(insertionModel, "insertion-sort-board");
	var insertionController = new InsertionController(insertionModel, insertionView);
})();

//-->
