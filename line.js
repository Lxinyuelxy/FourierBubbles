function drawBaseLine(){
	push();
	//stroke(150);
	for(var i = 0; i < paths.length-1; i++){
		line(paths[i].x, paths[i].y, paths[i+1].x, paths[i+1].y);

	}
	if(closedPaths){
		line(paths[i].x, paths[i].y, paths[0].x, paths[0].y);
	}
	pop();
}