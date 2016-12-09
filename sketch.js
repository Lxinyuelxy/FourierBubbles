var rows; //34
var cols; //17

var paths = [];
var dynamicPaths = [];
var painting = false;
var closedPaths = false;
var currentPoint;
var intervalBetweenBubbles = 40;
var A=[], F=[], P=[];

function setup() {
	createCanvas(windowWidth, windowHeight);
	currentPoint = createVector(0,0);
	
	rows = 0; 
	for(var i = 0; i < windowWidth; i = i + intervalBetweenBubbles){
		bubble[rows] = [];
		cols = 0;
		for(var j = 0; j < windowHeight; j = j + intervalBetweenBubbles){
			var originPosition = createVector(i, j);
			var currentPosition = createVector(i, j);
			 bubble[rows][cols] = new Bubble(originPosition, currentPosition);
			 cols++;
		}
		rows++;
	}
	
	for(var i = 0; i < 3; i++){
		A[i] = random(-1, 1);
		F[i] = random(-2, 2);
		P[i] = random(-5, 5);
	}

}

function draw() {
	clear();
	background('rgba(0,255,0, 0.25)');	
	drawBubble();
	if(painting){
		drawBaseLine();
		getDynamicLine();
		drawDynamicLine();	
	}
	//console.log(Date.now())
}

function mousePressed(){

	painting = true;
	closedPaths = false;
	
	paths.splice(0,paths.length);
	dynamicPaths.splice(0,dynamicPaths.length);
	
	currentPoint = createVector(mouseX, mouseY);
	paths.push(currentPoint);
	
}

function mouseDragged(){
	if(painting){
		currentPoint = createVector(mouseX, mouseY);
		paths.push(currentPoint);
	}
	
}

function mouseReleased(){
	closedPaths = true;
}