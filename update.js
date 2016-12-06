function update(i,j){
	var amp, frep, phaze,offset = 0;
	
	if(i <= windowWidth/2 && j <= windowHeight/2){ //左上区域
		offset = 20*sin(a+PI/4);	

	}
	else if(i > windowWidth/2 && j <= windowHeight/2){ //右上	
		offset = 10*sin(7*a+PI/2);

	}
	else if(i <= windowWidth/2 && j > windowHeight/2){ //左下
		offset = 2*cos(5*a+PI/3);

	}
	else if(i > windowWidth/2 && j > windowHeight/2){ //右下
		offset = 10*cos(5*a+PI/6);	
		
	}	
	return offset;	
}