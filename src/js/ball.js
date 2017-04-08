
// 获取所有img
var topimgs90 = document.querySelectorAll('.bigbox .ballbox .topdeg90');
var topimgs45 = document.querySelectorAll('.bigbox .ballbox .topdeg45');
var topimgs225 = document.querySelectorAll('.bigbox .ballbox .topdeg225');

var imgs0 = document.querySelectorAll('.bigbox .ballbox .deg0');

var bottomimgs225 = document.querySelectorAll('.bigbox .ballbox .bottomdeg225');
var bottomimgs45 = document.querySelectorAll('.bigbox .ballbox .bottomdeg45');
var bottomimgs90 = document.querySelectorAll('.bigbox .ballbox .bottomdeg90');

var tips = document.querySelector('.ballbox .tips');

var xiebian = 120;
var startdeg = [0,45,90,135,180,225,270,315];
var startdeg2 = [10,70,130,190,250,310];
var startdeg3 = [20,110,200,290];
var startdeg5 = [15];
var isrun = false;
var imgsrun = null;


imgsrunnnnnn();
function imgsrunnnnnn(){
	isrun = true;
	imgsrun = setInterval(function(){
		// 0
		for(var i = 0; i < imgs0.length; i++){
			var enddeg =  startdeg[i]* Math.PI/180;
			var x = xiebian* Math.cos(enddeg);
			var z = xiebian* Math.sin(enddeg);
			imgs0[i].style.transform = "translate3d("+x+"px,"+0+"px,"+z+"px)";
			imgs0[i].style.transform = "-webkit-translate3d("+x+"px,"+0+"px,"+z+"px)";
			startdeg[i]+=0.1;
		}
		
		// top225
		for(var i = 0; i < topimgs225.length; i++){
			var enddeg =  startdeg2[i]* Math.PI/180;
			var x = xiebian* Math.cos(enddeg) * 0.82;
			var z = xiebian* Math.sin(enddeg);
			topimgs225[i].style.transform = "translate3d("+x+"px,"+(-40)+"px,"+z+"px)";
			topimgs225[i].style.transform = "-webkit-translate3d("+x+"px,"+(-25)+"px,"+z+"px)";
			startdeg2[i]+=0.1;
		}
		
		// top 45
		for(var i = 0; i < topimgs45.length; i++){
			var enddeg =  startdeg3[i]* Math.PI/180;
			var x = xiebian* Math.cos(enddeg) * 0.6;
			var z = xiebian* Math.sin(enddeg);
			topimgs45[i].style.transform = "translate3d("+x+"px,"+(-80)+"px,"+z+"px)";
			topimgs45[i].style.transform = "-webkit-translate3d("+x+"px,"+(-50)+"px,"+z+"px)";
			startdeg3[i]+=0.1;
		}
		
		// top90
		for(var i = 0; i < topimgs90.length; i++){
			var enddeg =  startdeg5[i]* Math.PI/180;
			var x = xiebian* Math.cos(enddeg) * 0.1;
			var z = xiebian* Math.sin(enddeg) * 0.1;
			topimgs90[i].style.transform = "translate3d("+x+"px,"+(-120)+"px,"+z+"px)";
			topimgs90[i].style.transform = "-webkit-translate3d("+x+"px,"+(-100)+"px,"+z+"px)";
			startdeg5[i]+=0.1;
		}
		
		// bottom 225
		for(var i = 0; i < bottomimgs225.length; i++){
			var enddeg =  startdeg2[i]* Math.PI/180;
			var x = xiebian* Math.cos(enddeg) * 0.82;
			var z = xiebian* Math.sin(enddeg);
			bottomimgs225[i].style.transform = "translate3d("+x+"px,"+40+"px,"+z+"px)";
			bottomimgs225[i].style.transform = "-webkit-translate3d("+x+"px,"+25+"px,"+z+"px)";
			startdeg2[i]+=0.1;
		}
	
		// bottom 45
		for(var i = 0; i < bottomimgs45.length; i++){
			var enddeg =  startdeg3[i]* Math.PI/180;
			var x = xiebian* Math.cos(enddeg) * 0.6;
			var z = xiebian* Math.sin(enddeg);
			bottomimgs45[i].style.transform = "translate3d("+x+"px,"+80+"px,"+z+"px)";
			bottomimgs45[i].style.transform = "-webkit-translate3d("+x+"px,"+50+"px,"+z+"px)";
			startdeg3[i]+=0.1;
		}
	
		// bottom 90
		for(var i = 0; i < bottomimgs90.length; i++){
			var enddeg =  startdeg5[i]* Math.PI/180;
			var x = xiebian* Math.cos(enddeg) * 0.1;
			var z = xiebian* Math.sin(enddeg) * 0.1;
			bottomimgs90[i].style.transform = "translate3d("+x+"px,"+120+"px,"+z+"px)";
			bottomimgs90[i].style.transform = "-webkit-translate3d("+x+"px,"+100+"px,"+z+"px)";
			startdeg5[i]+=0.1;
		}
	},10)
}




var page2imgssss = document.querySelectorAll('.ballbox img');

for(var i = 0; i < page2imgssss.length; i++){
	(function(i){
		page2imgssss[i].addEventListener("click",function(){
			if(isrun){
				tips.style.display = "block";
				tips.style.transform = this.style.transform;
				clearInterval(imgsrun);
				isrun = false;
			}
		})
	})(i)
}

 