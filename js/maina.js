$(function(){
  $('.swiper-slide').hover(function(){
    $('.swiper-slide > ::after').fadeOut()

  });

    $(".moni").on("mouseenter", function(){
      let imgH=$(this).find("img").height();
      let caseH=$(this).height();
      $(this).find("img").stop().animate({
          top:-(imgH-caseH)
      },6000)
  });
  $(".moni").on("mouseleave", function(){
      $(this).find("img").stop().animate({
          top:0
      },2000)
  });
  var swiper = new Swiper({
    el: '.mySwiper',
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
  /*
  $('.tag').on('mouseover',function(){
    $('.tag').css({ backgroundColor:'#fff',color:'#000'})
    $('.tag').next('p').fadeOut('fast')
    $(this).css({ backgroundColor:'#7CD5F4',color:'#fff'})
    $(this).next('p').fadeIn()
  })*/
});