$(function(){
	$('.sex i').click(function(){
		$(this).addClass('c3_bgColor').siblings().removeClass('c3_bgColor');
	})
	$('.c3_main2 div').click(function(){
		$(this).children('i').toggleClass('c3_main2_i');
		$(this).children('span').toggleClass('c3_main2_span');
	})
	$('.c5_itemBox').click(function(){
		$(this).children('.c5_answer').toggle();
	})
	
	$('input').focus(function(){
		$(this).prev().hide();
	})
	// $('input').blur(function(){
	// 	$(this).prev().show();
	// })
	var a;
	$('input').blur(function(){
		a=$(this).val();
		if(a==''){
			$(this).prev().show();
		}else{
			$(this).prev().hide();
		}
	})
	
	var b=$('select').val();
	$('select').focus(function(){
		$(this).prev().hide();
	})
	$('select').blur(function(){
		b=$(this).val();
		if(b==''){
			$(this).prev().show();
		}else{
			$(this).prev().hide();
		}
	})
	





})