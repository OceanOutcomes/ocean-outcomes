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

    toggleNewsletter: function() {
      var newsletterToggle = $('.newsletter-toggle');
      var newsletter = $('.newsletter-form-container')
      var newsletterClose = $('.newsletter-form-container span.close')

      newsletterToggle.click(function(e) {
        e.preventDefault();
        newsletter
          .fadeIn()
          .css({ 'display': 'table'});
      });

      newsletterClose.click(function(e){
        e.preventDefault();
        newsletter.fadeOut();
      });

      newsletterClose.click(function(e){
        e.preventDefault();
        newsletter.fadeOut();
      });
    },

    subscribeToNewsletter: function() {
      $('.newsletter-form form').formchimp({
        'onMailChimpSuccess': o2.subscribeCallback
      });
    },

    subscribeCallback: function() {
      $('.newsletter-form-container form input').hide();
      $('.newsletter-form-container h1').addClass('submitted').text('Thank you for subscribing to our newsletter.');
    },

    init: function() {

      // Large screen language toggle
      $('.large-screen-menu .toggle.language').click(function(e){
        e.preventDefault();
        $('.large-screen-menu .toggle.close.nav').show().addClass('flipInX');
        $('.large-screen-menu .toggle.navigation').hide().removeClass('flipInX');
        $('.language-menu-container').fadeIn();
        if ($('.main-menu-container').is(':visible')) {
          $('.main-menu-container').hide();
        }
        $('.page-content').hide();
      });

      // Large screen menu toggle
      $('.large-screen-menu .toggle.navigation').click(function(e){
        e.preventDefault();
        $(this).removeClass('flipInX').hide();
        $('.page-content, footer').hide();
        $('.large-screen-menu .toggle.close.nav').addClass('flipInX').show();
        $('.language-menu-container').hide();
        $('.main-menu-container').fadeIn();
        if($('.language-menu-container').is(':visible')) {
          $('.language-menu-container').Hide();
        }
      });

      // Large screen menu close button
      $('.large-screen-menu .toggle.close.nav').click(function(e){
        e.preventDefault();
        $(this).removeClass('flipInX').hide();
        $('.large-screen-menu .toggle.navigation').addClass('flipInX').show();
        $('.main-menu-container, .language-menu-container').hide();
        $('.page-content, footer').fadeIn();
      });

      // Large screen language close button
      $('.large-screen-menu .toggle.close.lang').click(function(e){
        e.preventDefault();
        $(this).removeClass('flipInX').hide();
        $('.large-screen-menu .toggle.language').show().addClass('flipInX');
        $('.language-menu-container').fadeToggle();
        $('.page-content, footer').fadeIn();
      });

      // Mobile nav close button
      $('.small-screen-menu .toggle.close.mobile-nav').click(function(e){
        e.preventDefault();
        $(this).removeClass('flipInX').hide();
        $('.mobile-nav-toggle').show().addClass('flipInX');
        $('.small-screen-menu .toggle.language').hide();
        $('.logo-container').addClass('animated flipInY').show();
        $('.main-menu-container').fadeToggle();
        $('.page-content').fadeIn();
      });

      // Mobile nav toggle (hamburger icon)
      $('.small-screen-menu .mobile-nav-toggle').click(function(e) {
        e.preventDefault();
        $(this).removeClass('flipInX').hide();
        $('.toggle.language').addClass('animated flipInX').show();
        $('.logo-container').hide();
        $('.toggle.close.mobile-nav').show().addClass('flipInX');
        $('.main-menu-container').fadeIn();
        $('.page-content').fadeOut();
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
        $('.small-screen-menu .toggle.language').hide();
        $('.language-menu-container').hide();
        $('.main-menu-container, .language-menu-container').hide();
        $('.page-content, footer').fadeIn();
      });

      // Footer language toggle
      $('footer .toggle.language').click(function(e){
        e.preventDefault();
        $('.language-menu-container').fadeIn();
        if($(window).width() > 640) {
          $('.large-screen-menu .toggle.close.nav').show().addClass('flipInX');
          $('.large-screen-menu .toggle.navigation').hide().removeClass('flipInX');
        } else {
          $('.small-screen-menu .toggle.language').addClass('animated flipInX').show();
          $('.logo-container, .mobile-nav-toggle').hide();
          $('.small-screen-menu .toggle.close.mobile-nav').show().addClass('flipInX');
        }

        if ($('.main-menu-container').is(':visible')) {
          $('.main-menu-container').hide();
        }
        $('.page-content, footer').hide();

        $('html, body').animate({
          scrollTop: $('html, body').offset().top
        }, 0);
      });

      $('.landing-section').on({
        mouseenter: function(e) {
          $(this).find('.hover-bg').stop().transition({y: -60, opacity: 1}, 1200, 'ease');
        },
        mouseleave: function(e) {
          $(this).find('.hover-bg').transition({y: 0, opacity: 0}, 600, 'ease');
        }
      });

      // Scroll action on home page
      $('.hero-home .scroll-arrow').click(function(e){
        e.preventDefault();
        $('html, body').animate({
          scrollTop: $('.home-about').offset().top
        }, 1000);
      });

      // Share Button on news pages
      new Share('.share-button', {
        title: 'Share'
      });
      // Make share button active always
      $('.social.load').addClass('active');

      this.toggleNewsletter();
      this.subscribeToNewsletter();

    }
  } // end o2

  o2.init();
});
