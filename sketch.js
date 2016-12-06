var rows; //34
var cols; //17
var fr = 30;
var currentTime;
var a = 0;

var paths = [];
var dynamicPaths = [];
var painting = false;
var closedPaths = false;
var currentPoint;
var intervalBetweenBubbles = 40;


function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(fr); 
	rows = parseInt(windowWidth/40 + 0.5);
	cols = parseInt(windowHeight/40 + 0.5);
	console.log("rows = "+rows+",cols = "+cols);currentPoint = createVector(0,0);
	
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
	console.log("i = "+i+", j = "+j);
	
	console.log("windowWidth/2 = "+windowWidth/2+",windowHeight/2 = "+windowHeight/2);

}

function draw() {
	clear();
	currentTime = frameCount/fr;
	background('rgba(0,255,0, 0.25)');	
	drawBubble();
	if(painting){
		drawBaseLine();
		//getDynamicLine();
		//drawDynamicLine();
	}
}


function getDynamicLine(){
	var offset = 0;
	var v = 0;
	for(var i = 0; i < paths.length; i++){
		offset = update(paths[i].x, paths[i].y);
		if(i == paths.length-1){
			v = getTheNormalVector(paths[i], paths[0]);
		}else{
			v = getTheNormalVector(paths[i], paths[i+1]);
		}
		
		v = p5.Vector.mult(v, offset);
		dynamicPaths.push(v);
		
	}
}

function drawDynamicLine(){
	for(var i = 0; i < dynamicPaths.length-1; i++){
		line(dynamicPaths[i].x, dynamicPaths[i].y, dynamicPaths[i+1].x, dynamicPaths[i+1].y);
	
	}
	if(closedPaths){
		line(dynamicPaths[i].x, dynamicPaths[i].y, dynamicPaths[0].x, dynamicPaths[0].y);
	}
	
}

function getTheNormalVector(v1, v2){
	var directionVector = p5.Vector.sub(v1, v2);
	var temp_v;
	if(directionVector.y != 0){
		temp_v = createVector(1,(-1)*directionVector.x / directionVector.y);
	}else{
		temp_v = createVector(0, 1);
	}
	var normalVector = createVector(temp_v.x + v1.x, temp_v .y + v1.y);
	//return normalVector.normalize();
	return normalVector;
}



function mousePressed(){

	painting = true;
	closedPaths = false;
	paths.splice(0,paths.length);
	dynamicPaths.splice(0,paths.length);
	currentPoint = createVector(mouseX, mouseY);
	paths.push(currentPoint);
	//console.log("paths.length = "+ paths.length);
	
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