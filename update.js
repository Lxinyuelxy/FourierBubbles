function update(i,j){
	var t = millis()/1000;
	var offset = 0;
	var amp, frep, phaze;
	
	for(var m = 0; m < 3; m++){	
		amp = A[m] *(j/10)%10; 
		frep = F[m] * (i*i + j*j)%7;
		phaze = P[m] * (i%3)*PI;
		
		offset = offset + amp*sin(frep * t + phaze);
	}
	return offset;	
}

