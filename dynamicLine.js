function getDynamicLine(){
	var offset = 0;
	var v = createVector(0, 0);

	for(var i = 0; i < paths.length; i++){
		 offset = update(paths[i].x, paths[i].y);
		 
		 if(i == paths.length-1){
			v = getTheNormalVector(paths[i], paths[0]);
		}else{
			v = getTheNormalVector(paths[i], paths[i+1]);
		}
		
		v = p5.Vector.mult(v, offset);
		v = p5.Vector.add(v, paths[i]);
			
		dynamicPaths[i] = createVector(v.x, v.y);
		
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
	return temp_v;
}

function drawDynamicLine(){
	push();
	//stroke(150);
	fill('rgba(255,255,255,0.3)');
	beginShape();
	for(var i = 0; i < dynamicPaths.length-1; i++){
		vertex(dynamicPaths[i].x, dynamicPaths[i].y);
	}
	endShape(CLOSE);
	pop();
	
}