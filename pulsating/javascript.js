$(document).ready(function(){
	var 
		zoomIn,
		zoomOut,
		fps,
		count = 0,
		timer;
	
	zoomIn = function(){
		$(".circle").animate({scale:'1.05,1.05'}, 50, 'ease-out');
	}
	
	zoomOut = function(){
		$(".circle").animate({scale:'0.95,0.95'}, 50, 'ease-out');
	}
	
	fps = function(){
		count++;
		if(count == 1){
			zoomIn();
		}else if(count == 2){
			zoomOut();
		}else if(count == 15){
			count = 0;
		}
	}
	
	timer = setInterval(fps,50);
	
	/*$("#one").tap(function(event){
		clearInterval(timer);
		$("#one").animate({opacity:'0'},1000, 'ease-out');
		$("body").animate({backGroundColor:'white'},1000, 'ease-out');
	}, false);*/
});