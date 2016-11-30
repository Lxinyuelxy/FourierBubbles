var bubble = [];
var rows;
var cols;
var AImage = [],
	FImage = [],
	PImage = []; 

function Bubble(position){
	this.position = createVector(position.x,position.y);
}
Bubble.prototype.show = function(){
	ellipse(this.position.x, this.position.y, 20, 20);
}

function preload(){
	AImage[2] = loadImage("data/A2.jpg");
	FImage[2] = loadImage("data/A2"+i.toString()+".jpg");
	PImage[2] = loadImage("data/P2"+i.toString()+".jpg");
	for(var i = 0; i < 2; i++){
		AImage[i] = loadImage("data/A"+i.toString()+".jpg");
		FImage[i] = loadImage("data/A"+i.toString()+".jpg");
		PImage[i] = loadImage("data/P"+i.toString()+".jpg");
	}  
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	rows = parseInt(windowWidth/20);
	cols = parseInt(windowHeight/20);
	console.log("rows = " + rows+",cols = "+cols);
	
	for(var i = 0; i < rows; i++){
		bubble[i] = [];
		for(var j = 0; j < cols; j++){
			var position = createVector(20 + 40*i, 20 + 40*j);
			bubble[i][j] = new Bubble(position);
			console.log("x = "+bubble[i][j].position.x+",y = "+bubble[i][j].position.y);
		}
	}	
}

function draw() {
	clear();
	background('rgba(0,255,0, 0.25)');	
	drawBubble();
    image(PImage[2], 0, 0);
}

function drawBubble(){
	push(); 
	fill(color('rgba(0,255,0, 0.25)'));
	noStroke(); 
	var position;
	for(var i = 0; i < rows; i++){
		for(var j = 0; j < cols; j++){
			bubble[i][j].position.y = bubble[i][j].position.y + 20*sin(i/PI);
			bubble[i][j].show();
		}
	}
	pop();
}

function updateBubble(theBubble){
	
}