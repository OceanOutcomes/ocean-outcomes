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
      $('.toggle.navigation').click(function(e){
        e.preventDefault();
        $(this).removeClass('flipInX').hide();
        $('.toggle.close').show().addClass('flipInX');
        $('.main-menu-container').fadeToggle();
        $('.page-content').fadeToggle();
      });

      $('.toggle.close').click(function(e){
        e.preventDefault();
        $(this).removeClass('flipInX').hide();
        $('.toggle.navigation').show().addClass('flipInX');
        $('.main-menu-container').fadeToggle();
        $('.page-content').fadeToggle();
      });

      $('.landing-section').hover(function() {
        $(this).find('.hover-bg').fadeIn(); 
      }, function() {
        $(this).find('.hover-bg').fadeOut(); 
      });
    }
  }

  o2.init();
});
