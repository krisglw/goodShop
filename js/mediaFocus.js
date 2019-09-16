$(function(){
	$('.content_box').hover(function(){
		$(this).children('.details_img').children('img').css('transform','scale(1.1)');
		$(this).children('.details').css('background-color','#e1251b');
		$(this).children('.details').css('color','#fff');
	},function(){
		$(this).children('.details_img').children('img').css('transform','scale(1.0)');
		$(this).children('.details').css('background-color','#f2f2f2');
		$(this).children('.details').css('color','gray');
	})





})