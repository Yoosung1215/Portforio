$(function(){
		
		$('.submenu').not('.submenu:eq(6)').hover(function(){
			$('#headerfoot').stop().slideDown('fast');
			$('.submenu > ul').stop().fadeIn('fast');
		},function(){
			$('#headerfoot').stop().slideUp('fast');
			$('.submenu > ul').stop().fadeOut('fast');
		});

});