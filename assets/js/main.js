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

      $('.toggle.close.mobile-nav').click(function(e){
        e.preventDefault();
        $(this).removeClass('flipInX').hide();
        $('.mobile-nav-toggle').show().addClass('flipInX');
        $('.toggle.language').hide();
        $('.logo-container').addClass('animated flipInY').show();
        $('.main-menu-container').fadeToggle();
        $('.page-content').fadeIn();
      });

      $('.large-screen-menu .toggle.language').click(function(e){
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

      $('.mobile-nav-toggle').click(function(e) {
        e.preventDefault();
        $(this).removeClass('flipInX').hide();
        $('.toggle.language').addClass('animated flipInX').show();
        $('.logo-container').hide();
        $('.toggle.close.mobile-nav').show().addClass('flipInX');
        $('.main-menu-container').fadeToggle();
        $('.page-content').fadeToggle();
      });
      
      // Mobile language toggle
      $('.small-screen-menu .toggle.language').click(function(e){
        e.preventDefault();

        $('.language-menu-container').fadeIn();

        $('.main-menu-container').fadeOut();

        $('.page-content').hide();
      });

      // Mobile close button
      $('.small-screen-menu .toggle.close').click(function(e){
        e.preventDefault();
        $(this).removeClass('flipInX').hide();
        $('.language-menu-container').hide();
        $('.main-menu-container, .language-menu-container').hide();
        $('.page-content').fadeIn();
      });

      $('.landing-section').on({
        mouseenter: function(e) {
          $(this).find('.hover-bg').stop().transition({y: -60, opacity: 1}, 1200, 'ease'); 
        }, 
        mouseleave: function(e) {
          $(this).find('.hover-bg').transition({y: 0, opacity: 0}, 600, 'ease'); 
        }
      });

      $('.hero-home .scroll-arrow').click(function(e){
        e.preventDefault(); 
        $('html, body').animate({
          scrollTop: $('.home-about').offset().top 
        }, 1000);
      });

      new Share('.share-button', {
        title: 'Share' 
      });
    }
  } // end o2

  o2.init();
});
