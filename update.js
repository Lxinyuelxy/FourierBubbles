function update(i,j){
	var t = millis()/1000;
	var offset = 0;
	var amp, frep, phaze;
	
	// for(var m = 0; m < 3; m++){	
		// amp = A[m] *(j/10)%10; 
		// frep = F[m] * (i*i + j*j)%7;
		// phaze = P[m] * (i%3)*PI;
		
		// offset = offset + amp*sin(frep * t + phaze);
	// }
	// return offset;	
	
	for(var m = 0; m < 3; m++){
		var colorA = imgA[m].get(i, j);
		var valueA = brightness(colorA);
		var normalizedA = norm(valueA, 0, 255);
		amp = 20 * normalizedA;
		
		var colorF = imgF[m].get(i, j);
		var valueF = brightness(colorF);
		var normalizedF = norm(valueF, 0, 255);
		frep = 50 * normalizedF;
		
		var colorP = imgP[m].get(i, j);
		var valueP = brightness(colorP);
		var normalizedP = norm(valueP, 0, 255);
		phaze = TWO_PI * normalizedP;
	
		offset = offset + amp*sin(frep * t + phaze);
	 }
	 return offset;
}


