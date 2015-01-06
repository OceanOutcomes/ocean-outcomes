//Insert awesome js here!

//Primary Navigation Menu js

$(document).ready(function() {
  var menu = $('#navigation-menu');
  var menuToggle = $('#js-mobile-menu');
  var signUp = $('.sign-up');

  $(menuToggle).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle(function(){
      if(menu.is(':hidden')) {
        menu.removeAttr('style');
      }
    });
  });

  // underline under the active nav item
  $(".nav .nav-link").click(function() {
    $(".nav .nav-link").each(function() {
      $(this).removeClass("active-nav-item");
    });
    $(this).addClass("active-nav-item");
    $(".nav .more").removeClass("active-nav-item");
  });

  // Show/Hide elements for click events
  $('.toggle').click(function() {
    $(this).parent().toggleClass('active');
  });

  var o2 = {
    fadeToggleElement: function(el) {
      el.fadeToggle(); 
    },

    init: function() {

      $('.toggle.close.nav').click(function(e){
        e.preventDefault();
        $(this).removeClass('flipInX').hide();
        $('.toggle.navigation').show().addClass('flipInX');
        $('.main-menu-container').fadeToggle();
        $('.page-content').fadeIn();
      });

      $('.toggle.close.lang').click(function(e){
        e.preventDefault();
        $(this).removeClass('flipInX').hide();
        $('.toggle.language').show().addClass('flipInX');
        $('.language-menu-container').fadeToggle();
        $('.page-content').fadeIn();
      });

      $('.toggle.language').click(function(e){
        e.preventDefault();
        $(this).removeClass('flipInX').hide();
        $('.toggle.close.lang').show().addClass('flipInX');
        $('.language-menu-container').fadeToggle();
        if ($('.main-menu-container').is(':visible')) {
          $('.main-menu-container').fadeOut();
        }
        $('.page-content').fadeToggle();
      });

      $('.toggle.navigation').click(function(e){
        e.preventDefault();
        $(this).removeClass('flipInX').hide();
        $('.toggle.close.nav').show().addClass('flipInX');
        $('.main-menu-container').fadeToggle();
        if ($('.language-menu-container').is(':visible')) {
          $('.language-menu-container').fadeOut();
        }
        $('.page-content').fadeToggle();
      });

      $('.landing-section').hover(function() {
        $(this).find('.hover-bg').fadeIn().addClass('active'); 
      }, function() {
        $(this).find('.hover-bg').fadeOut().removeClass('active'); 
      });
    }
  }

  o2.init();
});
