
$(function(){
	// 搜索
	$(".top_search span").mousedown(
		function(){
			$(".top_search>div").fadeIn()
			$("body").css("overflow","hidden")
		}
	)
	$(".top_search>div i").mousedown(
		function(){
			$(".top_search>div").fadeOut()
			$("body").css("overflow","auto")
		}
	)

})

//滑动toubu fixed
window.onscroll=function(){
	var autoheight=document.body.scrollTop||document.documentElement.scrollTop;
	if(autoheight>0){
		$(".side_bar").fadeIn(700) 
		$(".top_bg").css({"box-shadow":"0 0 5px #999"})
		}else{
			$(".side_bar").fadeOut(700)
			$(".top_bg").css({"box-shadow":"none"})
	}
}
//back top
$(function(){
	$(".btn_top").mousedown(
		function(){
			$("html, body").animate({"scroll-top":0},"fast");
		}
	)
})

/*
//menu
$(function(){
	$(".menubox ul li").mousedown(
		function(){
			$(this).addClass("cur")
			$(this).siblings().removeClass("cur")
		}
	)
	var H_nav=$(".menubox").height()+12
	$(".menubox dl").css("bottom",H_nav)

	$("html").mousedown(
		function(){
		$(".menubox dl").slideUp(300)  
	})	
	$(".menubox .menubtn").mousedown(
		function(event){
			$(".menubox dl.menu").slideToggle(300)
			$(".menubox dl.mall").slideUp(300)
			event.stopPropagation();//阻止冒泡事件 事件名mousedown必须相同行
		}
	)
	$(".menubox .mallbtn").mousedown(
		function(event){
			$(".menubox dl.mall").slideToggle(300)
			$(".menubox dl.menu").slideUp(300)
			event.stopPropagation();//阻止冒泡事件 事件名mousedown必须相同行
		}
	)		
})
 */

//menu
$(function(){
	$(".menubox ul li").mousedown(
		function(){
			$(this).addClass("cur")
			$(this).siblings().removeClass("cur")
		}
	)
	var H_nav=$(".menubox").height()+12
	$(".menubox .menu_panel dl").css("bottom",H_nav)

	$("html").mousedown(
		function(){
			$(".menubox .menu_panel dl").slideUp(300)
		})
	$(".menubox .menubtn").mousedown(
		function(event){
			$(".menubox .menu_panel dl.menu").slideToggle(300)
			$(".menubox .menu_panel dl.mall").slideUp(300)
			event.stopPropagation();//阻止冒泡事件 事件名mousedown必须相同行
		}
	)
	$(".menubox .mallbtn").mousedown(
		function(event){
			$(".menubox .menu_panel dl.mall").slideToggle(300)
			$(".menubox .menu_panel dl.menu").slideUp(300)
			event.stopPropagation();//阻止冒泡事件 事件名mousedown必须相同行
		}
	)
})

// 宽高比为3:2
$(function(){
	var img_w3=$("._picbox_w3_h2 img").width()
	var img_h2=img_w3*2/3
	$("._picbox_w3_h2 img").css("height",img_h2)
})
