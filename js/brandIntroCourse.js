$(function(){
	var i=0;
	$('.btn_left').click(function(){
		i++;
		if(i>2){
			i=0;
			$('.c2_ul').css('margin-left','0px');
		}
		$('.c2_ul').css('margin-left',-100*i+'%');

	})
	$('.btn_right').click(function(){
		i++;
		if(i>2){
			i=0;
			$('.c2_ul').css('margin-left','0px');
		}
		$('.c2_ul').css('margin-left',-100*i+'%');

	})

	$('.c2_ul li').hover(function(){
		$(this).children('.c2_imgBox').children('.c2_bgImg').css('display','inline-block');
		$(this).children('h3').css('color','#e1251b');
		$(this).children('.i1').css('background-color','#e1251b');
		$(this).addClass('li2');
	},function(){
		$(this).children('.c2_imgBox').children('.c2_bgImg').css('display','none');
		$(this).children('h3').css('color','#b2b2b2');
		$(this).children('.i1').css('background-color','#b2b2b2');
		$(this).removeClass('li2');

	})


	$('.c2_ul li').click(function(){
		$(this).children('.c2_details').children('.c2_details_p').toggle();
		$(this).children('.c2_details').children('.i2').addClass('i4').parent().parent('.c2_ul li').siblings().children('.c2_details').children('.i2').removeClass('i4');
		$(this).siblings().children('.c2_details').children('.c2_details_p').css('display','none');
		// $('.jian').css('display','block');
		$(this).children().children('.add').toggle();
		$(this).children().children('.jian').toggle();
	})


})