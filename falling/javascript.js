$(document).ready(function(){
	var 
		zoomIn,
		zoomOut,
		fps,
		count = 0,
		upBound,
		downBound,
		timer;
	
	setTimeout(function(){
		console.log("setTimeout");
		$(".circle").animate({translate3d:'0px,100px,0px'},500, 'ease-in',upBound);
		//$(".circle").css('bottom','0px');	
	},500);
	
	upBound = function(){
		$(".circle").animate({translate3d:'0px,50px,0px'},250, 'ease-out',downBound);
	};
	
	downBound = function(){
		$(".circle").animate({translate3d:'0px,100px,0px'},250, 'ease-in',upBound2);
	};
	
	upBound2 = function(){
		$(".circle").animate({translate3d:'0px,75px,0px'},200, 'ease-out',downBound2);
	};
	
	downBound2 = function(){
		$(".circle").animate({translate3d:'0px,100px,0px'},200, 'ease-in');
	};
	
	/*zoomIn = function(){
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
	
	timer = setInterval(fps,50);*/
	
	/*$("#one").tap(function(event){
		clearInterval(timer);
		$("#one").animate({opacity:'0'},1000, 'ease-out');
		$("body").animate({backGroundColor:'white'},1000, 'ease-out');
	}, false);*/
});