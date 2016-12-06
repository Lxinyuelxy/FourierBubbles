var bubble = [];

function Bubble(originPosition, currentPosition){
	this.originPosition = createVector(originPosition.x, originPosition.y);
	this.currentPosition = createVector(currentPosition.x, currentPosition.y);
}
Bubble.prototype.show = function(){
	ellipse(this.currentPosition.x, this.currentPosition.y, 15, 15);
	
}
function drawBubble(){
	var offset = 0;
	
	push(); 
	fill(color('rgba(0,255,0, 0.25)'));
	noStroke(); 	
	for(var i = 0; i < windowWidth; i = i + intervalBetweenBubbles){
		var temp_x = parseInt(i/intervalBetweenBubbles);
		for(var j = 0; j < windowHeight; j = j + intervalBetweenBubbles){			
			var temp_y = parseInt(j/intervalBetweenBubbles);
			offset = update(i,j);
			bubble[temp_x][temp_y].currentPosition.y = bubble[temp_x][temp_y].originPosition.y +offset;
			bubble[temp_x][temp_y].show();				
			
		}
		a++;
	}
	console.log("i = "+i+", j = "+j);
	pop();
}