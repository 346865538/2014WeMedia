var pages = document.querySelectorAll(".container > div");
var index = 0;   // 页数
var startY = 0;
var moveY = 0;
var endY = 0;
var comY = 0;
var scoll = 0;
whatpage();


qiangpiao.addEventListener('click',function(){
	window.location.href = "qiangpiao.html";
})

chuanyue.addEventListener('click',function(){
	window.location.href = "chuanyue.html";
})




// 图片预加载
var imgObjs = {
	arrow:"src/img/arrow.png",
	page1_bg:"src/img/page1_bg.jpg",
	page1_logo1:"src/img/page1_logo1.png",
	page1_logo2:"src/img/page1_logo2.png",
	page1_logo3:"src/img/page1_logo3.png",
	page1_logo4:"src/img/page1_logo4.png",
	
	page2_title:"src/img/page2_title.png",
	
	page3_bg:"src/img/page3_bg.jpg",
	page3_bh:"src/img/page3_bh.png",
	page3_title:"src/img/page3_title.png",
	page3_title1:"src/img/page3_title1.png",
	page3_title2:"src/img/page3_title2.png",
	
	page4_line1:"src/img/page4_line1.png",
	page4_line2:"src/img/page4_line2.png",
	page4_line3:"src/img/page4_line3.png",
	page4_line4:"src/img/page4_line4.png",
	page4_line5:"src/img/page4_line5.png",
	page4_line6:"src/img/page4_line6.png",
	page4_title:"src/img/page4_title.png",
	
	page5_bg:"src/img/page5_bg.jpg",
	page5_point:"src/img/page5_point.png",
	page5_title:"src/img/page5_title.png",
	
	page6_1_1:"src/img/page6_1_1.png",
	page6_1_2:"src/img/page6_1_2.png",
	page6_1_3:"src/img/page6_1_3.png",
	page6_1_4:"src/img/page6_1_4.png",
	page6_1_5:"src/img/page6_1_5.png",
	page6_2_1:"src/img/page6_2_1.png",
	page6_2_2:"src/img/page6_2_2.png",
	page6_2_3:"src/img/page6_2_3.png",
	page6_2_4:"src/img/page6_2_4.png",
	page6_2_5:"src/img/page6_2_5.png",
	page6_3_1:"src/img/page6_3_1.png",
	page6_3_2:"src/img/page6_3_2.png",
	page6_3_3:"src/img/page6_3_3.png",
	page6_3_4:"src/img/page6_3_4.png",
	page6_3_5:"src/img/page6_3_5.png",
	page6_4_1:"src/img/page6_4_1.png",
	page6_4_2:"src/img/page6_4_2.png",
	page6_4_3:"src/img/page6_4_3.png",
	page6_4_4:"src/img/page6_4_4.png",
	page6_4_5:"src/img/page6_4_5.png",
	page6_bg:"src/img/page6_bg.jpg",
	page6_biglogo:"src/img/page6_biglogo.png",
	page6_title:"src/img/page6_title.png",
	page6_title2:"src/img/page6_title2.png",
	
	page7_arrowpoint:"src/img/page7_arrowpoint.png",
	page7_btn:"src/img/page7_btn.png",
	page7_info:"src/img/page7_info.png",
	page7_map:"src/img/page7_map.png",
	
	
	page8_btn:"src/img/page8_btn.png",
	page8_circle:"src/img/page8_circle.png",
	page8_text:"src/img/page8_text.png",
	page8_title:"src/img/page8_title.png",
}

var loaded = {};   // 加载完的图片对象
var index = 0;   // 已加载的张数
var num = 0;   // 加载总数
for(var i in imgObjs){
	num++;   // 图片总数
}

for(var img in imgObjs){
	var imgObj = new Image();
	loaded[img] = imgObj;
	loaded[img].src = imgObjs[img];
	loaded[img].onload = function(){
		index++;
		var baifenbi = parseInt((index/num)*100);
		document.querySelector(".loadingbox .loading div").innerHTML = baifenbi+"%";
//		console.log(baifenbi)   // 打印加载进度
		if(index >= num){
			// 加载完毕的回调
			document.querySelector(".loadingbox").style.display = "none";
			mouseEvent();
			index = 1;
			whatpage();
			bgm.muted = false;
		}
	}
}


// music 切换
var music = document.querySelector('.musicbox');

music.addEventListener('click',function(){
	if(music.dataset.run == "true"){
		music.dataset.run = "fasle";
		bgm.muted = true;
		music.style.animation = "muscistop";
	}else{
		music.dataset.run = "true";
		bgm.muted = false;
		music.style.animation = "musicrun 5s linear infinite forwards";
	}
})




//  滑动切换页面
function mouseEvent(){
	document.addEventListener("touchstart",function(e){
		startY = e.touches[0].pageY;
		if(!isrun){
			tips.style.display = "none";
			imgsrunnnnnn();
		}
	})
	
	document.addEventListener("touchmove",function(e){
		e.preventDefault();
		moveY = e.touches[0].pageY;
		
		if(moveY - startY < 0 && index < 8){
			comY = (moveY - startY) / 2;
	
			var scale = (document.body.clientHeight + comY) / document.body.clientHeight;
			var x = (1-scale)*document.body.clientHeight / 2;
			
			pages[index-1].style.transform = "scale("+scale+")";
			pages[index-1].style.top = - x + "px"; 
			pages[index].style.top = (document.body.clientHeight - (1-scale)*document.body.clientHeight) + "px";
			scoll = (document.body.clientHeight - (1-scale)*document.body.clientHeight);
		}else if(moveY - startY >　0 && index > 1){
			comY = (startY - moveY) / 2;
			var scale = (document.body.clientHeight + comY) / document.body.clientHeight;
			var x = (1-scale)*document.body.clientHeight / 2;
			
			pages[index-1].style.transform = "scale("+scale+")";
			pages[index-1].style.top = x + "px";
			pages[index-2].style.top = -document.body.clientHeight + x*2 + "px";
			scoll = x * 2;
		}
	})
	
	document.addEventListener("touchend",function(e){
		endY = e.changedTouches[0].pageY;
		comY = (endY - startY);
		if(comY < 0){
			gotoprun();
		}else if(comY > 0){
			godownrun();
		}
	})
}

function gotoprun(){
	if(index == 8){
		return;
	}
	var x = 0;
	var autointerval = setInterval(function(){
		x-=15;
		scoll-=15;
		pages[index-1].style.top = x + "px";
		pages[index].style.top = scoll + "px";
		
		if(scoll <= 0){
			clearInterval(autointerval);
			pages[index].style.top = "0px";
			pages[index-1].style.top = -document.body.clientHeight + "px";
			pages[index-1].style.transform = "scale(1)";
			index++;
			whatpage();
		}
	},1)
}

function godownrun(){
	if(index == 1){
		return;
	}
	var x = -document.body.clientHeight　+ scoll * 2;
	var autointerval = setInterval(function(){
		x+=15;
		scoll+=15;
		pages[index-2].style.top = x + "px";
		pages[index-1].style.top = scoll + "px";
		
		if(x >= 0){
			clearInterval(autointerval);
			pages[index-2].style.top = "0px";
			pages[index-1].style.top = document.body.clientHeight + "px";
			pages[index-1].style.transform = "scale(1)";
			index--;
			whatpage();
		}
	},1)
}

// 判断页数出现效果
function whatpage(){
	removeall();
	switch(index){
		case 1:
			firstshow();
			break;
		case 2:
			secondshow();
			break;
		case 3:
			page3show();
			break;
		case 4:
			page4show();
			break;
		case 5:
			page5show();
			break;
		case 6:
			page6show();
			break;
		case 7:
			page7show();
			break;
		case 8:
			page8show();
			break;
		default:
			return;
	}
}

// 删除所有页动画
function removeall(){
	var allimgs = document.querySelectorAll("img,li");
	for(var i = 0; i < allimgs.length; i++){
		allimgs[i].style.animation = "";
	}
}

// 第一页效果
function firstshow(){
	var firstimgs = document.querySelectorAll('.page1 > img');
	var time = 0;
	for(var i = 0; i < firstimgs.length - 1; i++){
		firstimgs[i].style.animation = "page1imgshow .5s "+time+"s linear forwards";
		time += 0.5;
	}
}

// 第二页效果
function secondshow(){
	var secondimgs = document.querySelectorAll('.page2 > img');
	var time = 0;
	for(var i = 0; i < secondimgs.length; i++){
		secondimgs[i].style.animation = "page1imgshow .5s "+time+"s linear forwards";
		time += 0.5;
	}
}

// 第三页效果
function page3show(){
	var page3imgs = document.querySelectorAll('.page3 > img');
	var time = 0;
	for(var i = 1; i < page3imgs.length; i++){
		page3imgs[i].style.animation = "page1imgshow .5s "+time+"s linear forwards";
		time += 0.5;
	}
	
	var page3lis = document.querySelectorAll('.page3 > ul > li');
	var time2 = 0;
	for(var i = 0; i < page3lis.length; i++){
		page3lis[i].style.animation = "page3mdgo 5s "+time2+"s linear forwards";
		time2 += 1.5;
	}
}

// 第四页效果
function page4show(){
	var page4imgs = document.querySelectorAll('.page4 > img');
	var time = 0;
	for(var i = 0; i < page4imgs.length; i++){
		page4imgs[i].style.animation = "page1imgshow .5s "+time+"s linear forwards";
		time += 0.5;
	}
	var page4lines = document.querySelectorAll('.page4 .lines');
	var time2 = 1.2;
	for(var i = 0; i <page4lines.length; i++){
		page4lines[i].style.animation = "page4lineshow .2s "+time2+"s linear forwards";
		time2+= 0.2;
	}
}

// 第五页效果 
function page5show(){
	var page5imgs = document.querySelectorAll('.page5 > img');
	var time = 0;
	for(var i = 0; i < page5imgs.length - 1; i++){
		page5imgs[i].style.animation = "page1imgshow .5s "+time+"s linear forwards";
		time += 0.5;
	}
	document.querySelector('.page5 > img:nth-child(4)').style.animation = "4s pointshow 1.5s linear forwards infinite";
}

// 第六页效果
function page6show(){
	var page6imgs = document.querySelectorAll('.page6 > img');
	var time = 0;
	for(var i = 0; i < page6imgs.length-2; i++){
		page6imgs[i].style.animation = "page1imgshow .5s "+time+"s linear forwards";
		time += 0.5;
	}
	var page6biglogo = document.querySelector('.page6 > img:nth-child(4)');
	page6biglogo.style.animation = "page6biglogorun .7s 1.5s linear forwards"
	var page6title2 = document.querySelector('.page6 > img:nth-child(5)');
	page6title2.style.animation = "page1imgshow .5s 2.2s linear forwards";
	
	var a1 = document.querySelectorAll('.page6 > div:nth-child(6) > img');
	var a2 = document.querySelectorAll('.page6 > div:nth-child(7) > img');
	var a3 = document.querySelectorAll('.page6 > div:nth-child(8) > img');
	var a4 = document.querySelectorAll('.page6 > div:nth-child(9) > img');
	
	
	var time2 = [2.5,2.6,2.7,2.8];
	for(var i = 0; i < 5; i++){
		
		a1[i].style.animation = "page6smalllogorun .5s "+time2[0]+"s linear forwards";
		a2[i].style.animation = "page6smalllogorun .5s "+time2[1]+"s linear forwards";
		a3[i].style.animation = "page6smalllogorun .5s "+time2[2]+"s linear forwards";
		a4[i].style.animation = "page6smalllogorun .5s "+time2[3]+"s linear forwards";
		
		for(var j = 0; j < time2.length; j++){
			time2[j] += 0.1;
		}
	}
}


// 第七页效果
function page7show(){
	var page7imgs = document.querySelectorAll('.page7 > img');
	var time = 0;
	for(var i = 0; i < page7imgs.length; i++){
		if(i == 2){
			page7imgs[i].style.animation = "mapshow .4s 1s linear forwards";
			continue;
		}
		if(i == 5){
			page7imgs[i].style.animation = "pointrun 2s 1.2s linear forwards infinite";
			continue;
		}
		page7imgs[i].style.animation = "page1imgshow .5s "+time+"s linear forwards";
		time += 0.5;
	}
}

// 第八页效果
var earthruninterval = null;
function page8show(){
	var page8imgs = document.querySelectorAll(".page8 > img");
	var time = 0;
	for(var i = 0; i < page8imgs.length; i++){
		if(i == 2){
			var x = 0;
			setTimeout(function(){
				earthruninterval = setInterval(function(){
					page8imgs[2].style.opacity = x;
					x += .02;
					
					if(x >= 1){
						page8imgs[2].style.opacity = 1;
						clearInterval(earthruninterval);
						page8imgs[2].style.animation = "earthrun 60s linear forwards infinite";
					}
				},3)
			},1000)
			continue;
		}
		page8imgs[i].style.animation = "page1imgshow .5s "+time+"s linear forwards";
		time += 0.5;
	}
}
