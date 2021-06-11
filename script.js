
var BannerfirstTime=0,currImgIndex=4,currImgIndex2=3,INTERVAL=5000;
var allImg=document.getElementsByClassName("scroll");
var allTxt=document.getElementsByClassName("txt");
var allCircle=document.getElementsByClassName("circle_block");

var allImg2=document.getElementsByClassName("scroll2");
var allTxt2=document.getElementsByClassName("articleTxt");
var allCircle2=document.getElementsByClassName("circle_block2");

//悬停
$("#inbox_left").ready(function(){
	$(".titleImg").mouseenter(function(){
		$(this).find(".imgmask").fadeIn(800);
	})
});

$("#inbox_left").ready(function(){
	$(".titleImg").mouseleave(function(){
		$(this).find(".imgmask").hide();
	})
});



//论坛活动V赛事推荐
$(".botBar").ready(function(){
	$("#eventHide").mouseover(function(){
		//console.log("1");
		$("#competitionShow").hide();
		$("#competitionHide").show();
		$(this).hide();
		$("#eventShow").show();
		$(".recommendCompetition").hide();
		$(".forumEvent").fadeIn();
	})
});

$(".botBar").ready(function(){
	$("#competitionHide").mouseover(function(){
		//console.log("2");
		$("#eventShow").hide();
		$(this).hide();
		$("#competitionShow").show();
		$("#eventHide").show();
		$(".forumEvent").hide();
		$(".recommendCompetition").fadeIn();
	})
});

//轮播1
 function autoNext(){
		//console.log(allCircle);
		//console.log("1")
		if(currImgIndex>=allImg.length-1){
			allImg[currImgIndex].style.display="none";
			allTxt[currImgIndex].style.display="none";
			allCircle[currImgIndex].style.display="none";
			currImgIndex=0;
			allImg[currImgIndex].style.display="block";
			allTxt[currImgIndex].style.display="block";
			allCircle[currImgIndex].style.display="block";
		}
		else{
			allImg[currImgIndex].style.display="none";
			allTxt[currImgIndex].style.display="none";
			allCircle[currImgIndex].style.display="none";
			currImgIndex++;
			allImg[currImgIndex].style.display="block";
			allTxt[currImgIndex].style.display="block";
			allCircle[currImgIndex].style.display="block";
		}
		
		t=setTimeout("autoNext()",INTERVAL);
	
}
function prev(){
	//console.log(allImg);
	if(currImgIndex<=0){
		allImg[0].style.display="none";
		allTxt[0].style.display="none";
		allCircle[0].style.display="none";
		currImgIndex=allImg.length-1;
		allImg[currImgIndex].style.display="block";
		allTxt[currImgIndex].style.display="block";
		allCircle[currImgIndex].style.display="block";
	}
	else{
		allImg[currImgIndex].style.display="none";
		allTxt[currImgIndex].style.display="none";
		allCircle[currImgIndex].style.display="none";
		currImgIndex--;
		allImg[currImgIndex].style.display="block";
		allTxt[currImgIndex].style.display="block";
		allCircle[currImgIndex].style.display="block";
	}
	clearTimeout(t);
}
function next(){
	//console.log(allImg);
	if(currImgIndex>=allImg.length-1){
		allImg[currImgIndex].style.display="none";
		allTxt[currImgIndex].style.display="none";
		allCircle[currImgIndex].style.display="none";
		currImgIndex=0;
		allImg[currImgIndex].style.display="block";
		allTxt[currImgIndex].style.display="block";
		allCircle[currImgIndex].style.display="block";
	}
	else{
		allImg[currImgIndex].style.display="none";
		allTxt[currImgIndex].style.display="none";
		allCircle[currImgIndex].style.display="none";
		currImgIndex++;
		allImg[currImgIndex].style.display="block";
		allTxt[currImgIndex].style.display="block";
		allCircle[currImgIndex].style.display="block";
	}
	clearTimeout(t);
}
$("body").ready(function(){
	$(".banner").hover(function(){
		timer=setTimeout(function(){
			clearTimeout(t);
		},200);},function(){
			clearTimeout(t);
			clearTimeout(timer);
		t=setTimeout("autoNext()",INTERVAL);
	})
});
//main banner circle
$("circleBox").ready(function(){
	$(".circleInBox").mouseenter(function(){
		allImg[currImgIndex].style.display="none";
		allTxt[currImgIndex].style.display="none";
		allCircle[currImgIndex].style.display="none";
		currImgIndex=$(this).find("img").attr('id');
		allImg[currImgIndex].style.display="block";
		allTxt[currImgIndex].style.display="block";
		allCircle[currImgIndex].style.display="block";
	})
});




//rollDiceNumber
$(".topBar").ready(function(){
	$("#rollDice").click(function(){
		var randNum=0;
		randNum=Math.round(Math.random()*100);

		$("#roll").html("="+randNum);
	})
});

//轮播2
 function autoNext2(){
	//console.log(allImg2[0]);
	allImg2[currImgIndex2].style.display="none";
	allTxt2[currImgIndex2].style.display="none";
	allCircle2[currImgIndex2].style.display="none";
	if(currImgIndex2>=allImg2.length-1){
		currImgIndex2=0;
	}
	else{
		currImgIndex2++;
	}
	allImg2[currImgIndex2].style.display="block";
	allTxt2[currImgIndex2].style.display="block";
	allCircle2[currImgIndex2].style.display="block";
	tb=setTimeout("autoNext2()",INTERVAL);
}


$("body").ready(function(){
	$(".bannerB").hover(function(){
		timer22=setTimeout(function(){
			clearTimeout(tb);
		},200);},function(){
			clearTimeout(tb);
			clearTimeout(timer22);
		tb=setTimeout("autoNext2()",INTERVAL);
	})
});


//side banner circled
$("circleBox2").ready(function(){
	$(".circleInBox2").mouseenter(function(){
		allImg2[currImgIndex2].style.display="none";
		allTxt2[currImgIndex2].style.display="none";
		allCircle2[currImgIndex2].style.display="none";
		currImgIndex2=$(this).find("img").attr('id');
		allImg2[currImgIndex2].style.display="block";
		allTxt2[currImgIndex2].style.display="block";
		allCircle2[currImgIndex2].style.display="block";
	})
});


//点击加载更多内容-->更多内容加载中

$("body").ready(function(){
	$(".loading").click(function(){
		$(this).html("更多内容加载中 . . .");
	})
});
$("body").ready(function(){
	$(".appDownload").mouseenter(function(){
			$(this).find("#front").css({
				"transform-style": "preserve-3d",
            	"-webkitTransform": "rotateY(90deg)",
            	"-webkitTransition": "all 0.2s"
			});
			$(this).find("#back").css({
            	"transform-style": "preserve-3d",
                'transform': 'rotateY(0deg)',
                "-webkitTransition": "all 0.6s"
            });
			setTimeout(function(){

        }, 700);
			setTimeout(function() {
            	$(this).find("#front").css({
                	"transform-style": "preserve-3d",
                	"-webkitTransform": "rotateY(270deg)",
                	"-webkitTransition": "all 0.2s",
            	});
            	$(this).find("#back").css({
            		"transform-style": "preserve-3d",
                	'transform': 'rotateY(180deg)',
                	"-webkitTransition": "all 0.2s"
            	});
        }, 800);
	})
});
$("body").ready(function(){
	$(".appDownload").mouseleave(function(){
			$(this).find("#back").css({
            	"transform-style": "preserve-3d",
                'transform': 'rotateY(180deg)',
                "-webkitTransition": "all 0.6s"
            });
			setTimeout(function() {
				$(this).find("#back").css({
            		"transform-style": "preserve-3d",
                	'transform': 'rotateY(360deg)',
                	"-webkitTransition": "all 0.3s"
            	});
        }, 800);
			$(this).find("#front").css({
				"transform-style": "preserve-3d",
            	"-webkitTransform": "rotateY(0deg)",
            	"-webkitTransition": "all 0.6s ease 0.2s"
				});
	})
});

//公众号图片切换
$("body").ready(function(){
	$("#headline").mouseenter(function(){
		$(this).attr("src","images/头条号_u.png");
	})
})
$("body").ready(function(){
	$("#headline").mouseleave(function(){
		$(this).attr("src","images/头条号.png");
	})
})
$("body").ready(function(){
	$("#weibo").mouseenter(function(){
		$(this).attr("src","images/微勃_u.png");
	})
})
$("body").ready(function(){
	$("#weibo").mouseleave(function(){
		$(this).attr("src","images/微勃.png");
	})
})

//回到顶端

window.onscroll=function(){
	scrollFunction();
}
function scrollFunction(){
	
	console.log(getWindowRatio()/1.25);
	//console.log(document.documentElement.scrollTop);
	//100% 1100   90% 1200  80% 1300   75 1350 67 1500  50 1900
	// 110% 1030 
	//1 1100 0.9 1200
	var ratio=getWindowRatio()/1.25;
	var f=1100+(1-ratio/100)*1000;
	if(ratio<67&&ratio>51){
		f=1500;
	}
	else if(ratio<52&&ratio>49){
		f=1900;
	}
	else if(ratio>108){
		f=1100+(1-ratio/100)*700;
	}
	 if(document.documentElement.scrollTop > (document.body.clientHeight-f)){
		$(".backToTop").css("position","absolute");
		$(".backToTop").css("bottom","30px");
	 }
	 else if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
	 	$(".backToTop").css("display","block");
	 	$(".backToTop").css("position","fixed");
	 	$(".backToTop").css("bottom","30px");
	 }
	 
	 else{
	 	$(".backToTop").css("display","none");
	 }
}
function backTop(){
	$('body, html').animate({ scrollTop :0},400 );
}


function getWindowRatio(){
    var ratio=0;
    var screen=window.screen;
    var ua=navigator.userAgent.toLowerCase();

    

    if(window.devicePixelRatio !== undefined){
        ratio=window.devicePixelRatio;

    } else if(~ua.indexOf('msie')){
        if(screen.deviceXDPI && screen.logicalXDPI){
            ratio=screen.deviceXDPI/screen.logicalXDPI;
        }
    } else if(window.outerWidth !== undefined && window.innerWidth !== undefined){

        ratio=window.outerWidth/window.innerWidth;
    }
    if(ratio){
        ratio=Math.round(ratio*100);
    }

    return ratio;
}






//下拉框出现以及消失
$("body").ready(function(){
	$(".more").hover(function(){
		$(this).find(".moreDraw").show();
	},function(){
		$(this).find(".moreDraw").hide();
	});
	$(".nullplace2").hover(function(){
		$(this).show();
	},function(){
		$(this).hide();
	});
});

$("body").ready(function(){
	$(".good").hover(function(){
		$(this).find(".goodDraw").show();
	},function(){
		$(this).find(".goodDraw").hide();
	});
	$(".nullplace1").hover(function(){
		$(this).show();
	},function(){
		$(this).hide();
	});
});