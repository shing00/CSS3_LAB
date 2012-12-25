$(document).ready(function(){
	var 
		count = 0;
	
	rotation = function(){
		console.log("rotation");
		//$(".square").css('-webkit-animation','anim1 0.5s');
		
		/*if(count === 0){
			count = 1;
		}else if(count === 1){
			$(".square").css('-webkit-animation-play-state','paused');
			count = 2;
		}else{
			$(".square").css('-webkit-animation-play-state','running');
			count = 1;
		}*/
	}
	
	
	fps = function(){
		rotation();
	}
	
	
	timer = setInterval(fps,300);
});