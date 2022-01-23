$(function(){
// header start
  $('.swiper-slide').click(function(){
    var image = $(this).find('img').attr('title');
    $('.modal img').attr('src',image)
      $('.modal').css({'display':'block'});
  });
  $('.modal').click(function(){
    $('.modal').css({'display':'none'});
  });
  $('.swiper-slide').hover(function(){
    $(this).find('span').stop().animate({opacity:0},'fast');
  },function(){
    $(this).find('span').stop().animate({opacity:1},'fast');
  });
  $(window).scroll(function(){
    var h = $(window).scrollTop();
    if( h < lev1-300){
      $('.header').fadeIn(2600);
      $('.icon-scroll').fadeIn('slow');
      $('.fas').css({opacity:'0'});
      $('i').removeClass('fa-times');
      $('i').addClass('fa-bar');
      $('.headerc').css({transform:'translate(100%,0)',opacity:'0'});
    }else{
      $('.header').fadeOut('fast')
      $('.icon-scroll').fadeOut('slow');
      $('.fas').css({opacity:'1'});
    }
  });
  $('.fas').click(function(){
    if($('.headerc').css('opacity')=='0'){
      $('i').removeClass('fa-bar');
      $('i').addClass('fa-times');
      $('.headerc').css({transform:'translate(0,0)',opacity:'1'});
    }else{
      $('i').removeClass('fa-times');
      $('i').addClass('fa-bar');
      $('.headerc').css({transform:'translate(100%,0)',opacity:'0'});
    }
    return false;;
  });

  $('.dropmenu').hover(function(){
    $('.dropdown').stop().slideDown('slow');
  },function(){
    $('.dropdown').stop().slideUp('slow');
  });
  $('.dropmenuc').hover(function(){
    $('.dropdownc').stop().slideDown('slow');
  },function(){
    $('.dropdownc').stop().slideUp('slow');
  });
  
    /*
  var menu = $('.header > ul > li,.headerc > ul > li').not('.dropmenu,.dropmenuc')
  var contents = $('body > div');
  menu.click(function(e){
    e.preventDefault();
    var tg = $(this);
    var i = tg.index();
    var section = contents.eq(i);
    var tt = section.offset().top;
    $('html, body').stop().animate({scrollTop:tt},1500);
    });
  */
  var menuc = $('.dropdown > li,.dropdownc > li')
  var contentsc = $('.Work > div');
  $('.header > ul > li:eq(2),.headerc > ul > li:eq(2)').click(function(e){
  
    var tt = $('.Work').offset().top;
    $('html, body').stop().animate({scrollTop:tt},1500);
    return false;
  });
  menuc.click(function(e){
  e.preventDefault();
  var tg = $(this);
  var i = tg.index();
  var section = contentsc.eq(i);
  var tt = section.offset().top;
  $('html, body').stop().animate({scrollTop:tt},1500);
  });
  

  $('.header > ul > li:eq(0),.headerc > ul > li:eq(0)').click(function(e){
 
  var tt = $('.Home').offset().top;
  $('html, body').stop().animate({scrollTop:tt},1500);
  return false;
  });

  $('.header > ul > li:eq(1),.headerc > ul > li:eq(1)').click(function(e){
  
    var tt = $('.About').offset().top;
    $('html, body').stop().animate({scrollTop:tt},1500);
    return false;
  });
  $('.header > ul > li:eq(2),.headerc > ul > li:eq(2)').click(function(e){
  
    var tt = $('.Work').offset().top;
    $('html, body').stop().animate({scrollTop:tt},1500);
    return false;
  });

  var menu = $('.dropdown > li,.dropdownc > li')
  var contents = $('.Work > div');

  menu.click(function(e){

  var tg = $(this);
  var i = tg.index();
  var section = contents.eq(i);
  var tt = section.offset().top;
  $('html, body').stop().animate({scrollTop:tt},1500);
  return false;
  });

  $('.header > ul > li:eq(3),.headerc > ul > li:eq(3)').click(function(e){
      e.preventDefault();
      var tt = $('.Contact').offset().top;
      $('html, body').stop().animate({scrollTop:tt},3000);
      return false;
  });



  var typingBool = false; 
  var typingIdx=0; 
  var liIndex = 0;
  var liLength = $(".ftext-1 p").length;
  
  // 타이핑될 텍스트를 가져온다 
  var typingTxt = $(".ftext-1 p").eq(liIndex).text(); 
  typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
  if(typingBool==false){ // 타이핑이 진행되지 않았다면 
      typingBool=true; 
      var tyInt = setInterval(typing,100); // 반복동작 
  }
    function typing(){ 
      $(".ftext p").removeClass("on");
      $(".ftext p").eq(liIndex).addClass("on");
      if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
        $(".ftext p").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
        typingIdx++; 
      } else{ if(liIndex<liLength-1){
        //다음문장으로  가기위해 인덱스를 1증가
          liIndex++; 
        //다음문장을 타이핑하기위한 셋팅
            typingIdx=0;
            typingBool = false; 
            typingTxt = $(".ftext-1 p").eq(liIndex).text(); 
          
        //다음문장 타이핑전 1초 쉰다
            clearInterval(tyInt);
              //타이핑종료
        
            setTimeout(function(){
              //1초후에 다시 타이핑 반복 시작
              tyInt = setInterval(typing,100);
            },'fast');
            } else if(liIndex==liLength-1){
              
            //마지막 문장까지 써지면 반복종료
              clearInterval(tyInt);
            }
        } 
    };
// header end
// Scroll effect start

	var lev1=$('.About').offset().top;
	var lev2=$('.work1').offset().top;
	var lev3=$('.work2').offset().top;
	var lev4=$('.work4').offset().top;
	var lev5=$('.work5').offset().top;
	var lev6=$('.work3').offset().top;
	var lev7=$('.Contact').offset().top;

	var gap = 500;
$(window).resize(function(){
 if(window.innerWidth < 768){
  var swiper = new Swiper({
    el: '.swiper-container',
    initialSlide: 2,
    spaceBetween: 50,
    slidesPerView: 1,
    centeredSlides: true,
    slideToClickedSlide: true,
    grabCursor: true,
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    mousewheel: {
      enabled: true,
    },
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
 }else{
	$(window).scroll(function(){

		var h = $(window).scrollTop();
    if( h < lev2-gap){
      $('div').removeClass('active');
      $('div').removeClass('oct');
      $('.wtext > div h3').removeClass('active');
      $('.wtext > div p').removeClass('active');
      $('.wtext > div a').removeClass('active');
      $('.About').addClass('oct');
      $('.left > div').addClass('active');
      $('.right > div').addClass('active');
      $('.Skill').addClass('active');
    }else if( h < lev3-gap){
      $('div').removeClass('active');
      $('div').removeClass('oct');
      $('.wtext > div h3').removeClass('active');
      $('.wtext > div p').removeClass('active');
      $('.wtext > div a').removeClass('active');
      $('.work1').addClass('oct');
      $('.work1 .wtext > div h3').addClass('active');
      $('.work1 .wtext > div p').addClass('active');
      $('.work1 .wtext > div a').addClass('active');

    }else if( h < lev4-gap){
      $('div').removeClass('active');
      $('div').removeClass('oct');
      $('.wtext > div h3').removeClass('active');
      $('.wtext > div p').removeClass('active');
      $('.wtext > div a').removeClass('active');
      $('.work2').addClass('oct');
      $('.work2 .wtext > div h3').addClass('active');
      $('.work2 .wtext > div p').addClass('active');
      $('.work2 .wtext > div a').addClass('active');
    }else if( h < lev5-gap){
      $('div').removeClass('active');
      $('div').removeClass('oct');
      $('.wtext > div h3').removeClass('active');
      $('.wtext > div p').removeClass('active');
      $('.wtext > div a').removeClass('active');
      $('.work4').addClass('oct');
      $('.work4 .wtext > div h3').addClass('active');
      $('.work4 .wtext > div p').addClass('active');
      $('.work4 .wtext > div a').addClass('active');
    }else if( h < lev6-gap){
      $('div').removeClass('active');
      $('div').removeClass('oct');
      $('.wtext > div h3').removeClass('active');
      $('.wtext > div p').removeClass('active');
      $('.wtext > div a').removeClass('active');
      $('.work5').addClass('oct');
      $('.work5 .wtext > div h3').addClass('active');
      $('.work5 .wtext > div p').addClass('active');
      $('.work5 .wtext > div a').addClass('active');
    }else if( h < lev7-gap){
      $('div').removeClass('active');
      $('div').removeClass('oct');
      $('.hashtag > p').removeClass('active')
      $('.wtext > div h3').removeClass('active');
      $('.wtext > div p').removeClass('active');
      $('.wtext > div a').removeClass('active');
      $('.work3').addClass('oct');
    }else{
      $('div').removeClass('active');
      $('div').removeClass('oct');
      $('.wtext > div h3').removeClass('active');
      $('.wtext > div p').removeClass('active');
      $('.wtext > div a').removeClass('active');
      $('.hashtag > p').removeClass('active')
      $('.Contact').addClass('oct');
      $('.hashtag > p').addClass('active')
    };
  });
  var swiper = new Swiper({
    el: '.swiper-container',
    initialSlide: 2,
    spaceBetween: 50,
    slidesPerView: 2,
    centeredSlides: true,
    slideToClickedSlide: true,
    grabCursor: true,
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    mousewheel: {
      enabled: true,
    },
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
});
 };
});
$(window).trigger('resize');
// Scroll effect end

    $(".moni").on("mouseenter", function(){
      let imgH=$(this).find("img").height();
      let caseH=$(this).height();
      $(this).find("img").stop().animate({
          top:-(imgH-caseH)
      },4000)
  });
  $(".moni").on("mouseleave", function(){
      $(this).find("img").stop().animate({
          top:0
      },2000)
  });
  
});