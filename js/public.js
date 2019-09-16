$(function() {
	// header
	$('.nav_li').hover(function(){
		$(this).children('div').css('display','block');
		// $(this).children('div').css('transform','translateY(10px)');
	},function(){
		$(this).children('div').css('display','none');
		// $(this).children('div').css('transform','translateY(0px)');

	})
	$('.nav_menu').hover(function(){
		$(this).css('transform','translateY(10px)');
	},function(){
		$(this).css('transform','translateY(0px)');

	})
	$('.bestore_code_li').hover(function(){
		$(this).children().children('img').css('display','inline-block');
	},function(){
		$(this).children().children('img').css('display','none');

	})
	
	// footer
	$('.ft_icon4').hover(function(){
		$(this).next().css('display','inline-block');
	},function(){
		$(this).next().css('display','none');

	})
	$('.fl_img1').hover(function(){
		$(this).css('display','inline-block');
	},function(){
		$(this).css('display','none');

	})
	$('.ft_icon5').hover(function(){
		$(this).next().css('display','inline-block');
	},function(){
		$(this).next().css('display','none');
	})
	$('.fl_img2').hover(function(){
		$(this).css('display','inline-block');
	},function(){
		$(this).css('display','none');

	})
	
	$('.footer_right_a').click(function(){
		$('html,body').animate({'scrollTop':0},300);
		$(this).css('text-decoration','none');
	})
	










})