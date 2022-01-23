$(function(){
    $('header div#mein nav ul#first > li').on('mouseenter',function(){
        $('#headerfoot').stop().slideDown();
        $(this).addClass('on');
    });    
    $('header div#mein nav ul#first > li').on('mouseleave',function(){
        $('#headerfoot').stop().slideUp();
        $(this).removeClass('on');
    });   
    $('div#footer h4 a').click(function() {
		$('body,html').animate({scrollTop:0},500);
	}); 
});