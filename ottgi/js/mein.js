

$(function(){
    //header start
    var subdrop = $('.submenu > li > a');
    var subdropmenu = $('.submenu > li > a').next();
    subdrop.click(function(){
      if($(this).next().css('display')=='none'){
        subdropmenu.fadeOut('fast');
        $(this).next().fadeIn('fast');
      }else{
        subdropmenu.fadeOut('fast');
      }
      return false;
    });
    $('.submenu3 > li > a').click(function(){
      if($(this).next().css('display')=='none'){
        $('.submenu3 > li > a').next().fadeOut('fast');
        $(this).next().fadeIn('fast');
      }else{
        $('.submenu3 > li > a').next().fadeOut('fast');
      }
      
    });
    $('.drops1 a').click(function(){
      if($('.n1').css('display')=='none'){
        $('.navdrop').fadeOut('fast');
        $('.n1').slideDown();
      }else{
        $('.navdrop').fadeOut('fast');
      }
      return false;;
    });

    $('.drops2 a').click(function(){
      if($('.n2').css('display')=='none'){
        $('.navdrop').fadeOut('fast');
        $('.n2').slideDown();
      }else{
        $('.navdrop').fadeOut('fast');
      }
      return false;;
    });
    $('.drops3 a').click(function(){
      if($('.n3').css('display')=='none'){
        $('.navdrop').fadeOut('fast');
        $('.n3').slideDown();
      }else{
        $('.navdrop').fadeOut('fast');
      }
      
    });
    $('.openmenu').click(function(){
      $('span > i').removeClass('fa-minus').addClass('fa-plus');
      $('.hmsubbg').slideUp('slow');
      $('.hmmenu').slideToggle('slow');
    });
    $('.hmmenu > li').not($('.hmmenu > li').slice(1,3)).click(function(){
      $(this).find('span > i').toggleClass('fa-plus fa-minus');
      $(this).find('.hmsubbg').slideToggle('slow');
    });
    //header end
    $('.bxslider').bxSlider({
          mode:'fade',
          captions:true,
          auto:true,
          autoControls:true,
          stopAutoOnclick:true
    });
    $('.bxslider1').bxSlider({
          
          captions:true,
          auto:true,
          autoControls:true,
          stopAutoOnclick:true
    });
    
    $('.rsp1 .postit a').click(function(){
      var tg = $(this);
      var i = tg.index();
      var content = $('.rsp1 .rspwrap');


      content.removeClass('activ');
      content.eq(i).addClass('activ');
      content.css('opacity','0').stop().animate({opacity:'1'}, 1000);
      return false;
    });
    $('.rsp2 .postit a').click(function(){
      var tg = $(this);
      var i = tg.index();
      var content = $('.rsp2 .rspwrap');

      content.removeClass('activ');
      content.eq(i).addClass('activ');
      content.css('opacity','0').stop().animate({opacity:'1'}, 1000);
      return false;
    });

  });