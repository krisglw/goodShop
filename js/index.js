$(function(){
	$('.snacks_box').hover(function(){
		$(this).children('.c2_detials').css('display','block');
	},function(){
		$(this).children('.c2_detials').css('display','none');
		
	})
	$('main').hover(function(){
		$(this).children('.c3_bgImg').css('display','block');
		$(this).css('color','#fff');
		$(this).css('background-color','#e1251b');
		// $(this).children('.c3_bgImg').css('height','560px');	
	},function(){
		$(this).children('.c3_bgImg').css('display','none');	
		$(this).css('color','grey');
		$(this).css('background-color','rgba(242,242,242,1)');
					
	})

	// scroll

	$('.index1').click(function(){
			var h=$('.box1').offset().top;
			$('html,body').stop().animate({'scrollTop':h-20},1000);
			$(this).addClass('current_item').siblings().removeClass('current_item');
		})

	// 滚轮事件
	$(window).scroll(function(e){
		var h=$(window).scrollTop();
		var h1=$('.banner').offset().top-100;
		var h2=$('.content1').offset().top-100;
		var h3=$('.content2').offset().top-100;
		var h4=$('.content3').offset().top-100;
		if(h<h2){
			$('.asideNav li').eq(0).children('a').addClass('current_a').parent('li').siblings().children('a').removeClass('current_a');
		}else if(h<h3){
			$('.asideNav li').eq(1).children('a').addClass('current_a').parent('li').siblings().children('a').removeClass('current_a');
		}else if(h<h4){
			$('.asideNav li').eq(2).children('a').addClass('current_a').parent('li').siblings().children('a').removeClass('current_a');
		}else{
			$('.asideNav li').eq(3).children('a').addClass('current_a').parent('li').siblings().children('a').removeClass('current_a');
		}
		// console.log($(window).scrollTop());
	})
	console.log($('.banner').offset().top);
	console.log($('.content1').offset().top);
	console.log($('.content2').offset().top);
	console.log($('.content3').offset().top);


	$('.aside1').click(function(){
		var h=$('.banner').offset().top;
		$('html,body').scrollTop(h-80);
		$(this).children('a').addClass('current_a').parent('li').siblings().children('a').removeClass('current_a');
	})
	$('.aside2').click(function(){
		var h=$('.content1').offset().top;
		$('html,body').scrollTop(h-80);
		$(this).children('a').addClass('current_a').parent('li').siblings().children('a').removeClass('current_a');

	})
	$('.aside3').click(function(){
		var h=$('.content2').offset().top;
		$('html,body').scrollTop(h-80);
		$(this).children('a').addClass('current_a').parent('li').siblings().children('a').removeClass('current_a');

	})
	$('.aside4').click(function(){
		var h=$('.content3').offset().top;
		$('html,body').scrollTop(h-80);
		$(this).children('a').addClass('current_a').parent('li').siblings().children('a').removeClass('current_a');

	})

	var n=0;
	$('.c2_btn_left').click(function(){
		n++;
		if(n>2){
			n=0;
			$('.c2_snacksBox ul').css('margin-left','0px');
		}
		$('.c2_snacksBox ul').css('margin-left',-100*n+'%');

	})
	$('.c2_btn_right').click(function(){
		n++;
		if(n>2){
			n=0;
			$('.c2_snacksBox ul').css('margin-left','0px');
		}
		$('.c2_snacksBox ul').css('margin-left',-100*n+'%');

	})

	// 滚轮跳屏
	// var n=0,timer,number=[];

	// for(var i=0;i<$('section .box').length;i++){
	// 	number[i]=$('section .box').eq(i).offset().top;
	// }
	// $(document).mousewheel(function(e,d){
	// 	clearTimeout(timer);
	// 	timer=setTimeout(function(){
	// 		n = n-d;
	// 		if (n>4) {n=4}
	// 		if (n<0) {n=0}
	// 	})
	// 	$('section').animate({"marginTop":-750+'px'},250);
	// 		// console.log(number[n])
	// },500)

})