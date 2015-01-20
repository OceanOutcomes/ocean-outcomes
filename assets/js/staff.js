$(function(){
  var $grid = $('#staff-grid'),
      // Grid items
      $items = $grid.children('li'),
      // Current expanded item index
      current = -1,
      // Position top of the expanded view and which row will the expanded item go to
      previewPosition = -1,
      // Amount of pixels to scroll the window
      scrollExtra = 0,
      // Add extra margin when expanded
      marginExpanded = 10,
      $window = $(window), winsize,
      $body = $('html, body'),
      // Transition end events
      transEndEventNames = {
        'WebkitTransition' : 'webkitTransitionEnd',
        'MozTransition' : 'transitionend',
        'OTransition' : 'oTransitionEnd',
        'msTransition' : 'MSTransitionEnd',
        'transition' : 'transitionend'
      },
      transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
      // Detect css transition support
      support = Modernizr.csstranistions,
      // defaults
      settings = {
        minHeight: 5000,
        speed: 350,
        easing: 'ease'
      };

  function init(config) {
    settings = $.extend(true, {}, settings, config);

    $grid.imagesLoaded(function() {
      // Save item size and offset
      saveItemInfo(true);
      // Get window size
      getWinSize();
      // Initialize events
      initEvents();
    });
  }

  // Saves items offset top and height
  function saveItemInfo(saveheight) {
    $items.each(function() {
      var $item = $(this);
      $item.data('offsetTop', $item.offset().top);
      
      if(saveheight) {
        $item.data('height', $item.height());
      }
    });
  }

  // Gets the window size
  function getWinSize() {
    winsize = { 
      width: $window.width(), 
      height: $window.height()
    };
  }

  // Initialize events
  function initEvents() {
    $items.on('click', 'span.staff-close', function(e) {
      hidePreview();
      return false;
    }).children('a').on('click', function(e) {
      var $item = $(this).parent(); 
      current === $item.index() ? hidePreview() : showPreview($item);
      return false;
    });

    // Get new window size on resize
    $window.on('debouncedresize', function(){
      scrollExtra = 0;
      previewPos = -1;
      saveItemInfo();
      getWinSize();
      var preview = $.data(this, 'preview');
      if(typeof preview != 'undefined') {
        hidePreview();
      }
    });
  }

  // Show expanded view
  function showPreview($item) {
    var preview = $.data(this, 'preview'),
        position = $item.data('offsetTop');

    scrollExtra = 0;

    if(typeof preview != 'undefined') {
      if(previewPos !== position) {
        if(position > previewPos) {
          scrollExtra = preview.height; 
        }
        hidePreview();
      }
    } else {
      preview.update($item); 
      return false;
    }

    previewPos = position;
    preview = $.data(this, 'preview', new Preview($item));
    preview.open();
  }

  // Expanded overlay
  function Preview($item) {
    this.$item = $item;
    this.expandedIdx = this.$item.index();
    this.create();
    this.update();
  }

  Preview.prototype = {
    // Create expanded item
    create: function() {
      this.$title = $('<h2></h2>');         
      this.$bio = $('<p></p>');
      this.$details = $('<div class="staff-details"></div>').append(this.$title, this.$bio);
      this.$loading = $('<div class="staff-loading"></div>');
      this.$fullImage = $('<div class="staff-full-image"></div>').append(this.$loading);
      this.$closePreview = $('<span class="staff-close"><i class="fa fa-close"></div></span>');
      this.$previewInner = $('<div class="staff-expander-inner"></div>').append(this.$closePreview, this.$fullImage, this.$details);
      this.$previewEl = $('<div class="staff-expander"></div>').append(this.$previewInner);

      this.$item.append(this.getEl());

      if(support) {
        this.setTransition(); 
      }
    }, // end create

    update: function($item) {
      if($item) {
        this.$item = $item; 
      }         

      if(current !== -1) {
        var $currentItem = $items.eq(current); 
        $currentItem.removeClass('staff-expanded');
        this.$item.addClass('staff-expanded')

        this.positionPreview();
      }

      current = this.$item.index();

      var $itemEl = this.$item.children('a'),
          elData = {
            largesrc: $itemEl.data('largesrc'),
            title: $itemEl.data('title'),
            bio: $itemEl.data('bio')
          };

      this.$title.html(elData.title);
      this.$bio.html(elData.bio);
      
      var self = this;

      if(typeof self.$largeImg != 'undefined') {
        self.$largeImage.remove(); 
      }

      if(self.$fullImage.is(':visible')) {
        this.$loading.show();      
        $('<img/>').load(function(){
          self.$loading.hide();
          self.$largeImage = $(this).fadeIn(350);
          self.$fullImage.append(self.$largeImage);
        }).attr('src', elData.largesrc);
      }
    }, // end update

    // Open expanded item
    open: function() {
      setTimeout($.proxy(function(){
        this.setHeights();
        this.positionPreview();
      }, this), 25);  
    }, // end Open
    
    // Set heights on expanded items
    setHeights: function() {
      var self = this,
          onEndFn = function() {
            if(support) {
              self.$item.off(transEndEventsName);
            }
            self.$item.addClass('staff-expanded');
          }
      
      this.calcHeight();
      this.$previewEl.css('height', this.height);
      this.$item.css('height', this.itemHeight).on(transEndEventName, onEndFn);

      if(!support) {
        onEndFn.call();
      }
    }, // end setHeights

    calcHeight: function() {
      var heightPreview = winsize.height - this.item.data('height') - marginExpanded,
          itemHeight = winsize.height;

      if(heightPreview < settings.minHeight) {
        heightPreview = settings.minHeight;
        itemHeight = settings.minHeight + this.$item.data('height') + marginExpanded;
      }

      this.height = heightPreview;
      this.itemHeight = itemHeight;
    }, // end calcHeight

    positionPreview: function() {
      var position = this.$item.data('offsetTop'),
          previewOffsetT = this.$previewEl.offset().top - scrollExtra,
          scrollVal = this.height + this.$item.data( 'height' ) + marginExpanded <= winsize.height ? position : this.height < winsize.height ? previewOffsetT - ( winsize.height - this.height ) : previewOffsetT;

      $body.animate({scrollTop: scrollVal}, settings.speed);
    }, // end positionPreview

    close: function() {
      var self = this,
          onEndFn = function() {
            if(support) {
              $(this).off(transEndEventName);
            }
            self.$item.removeClass('staff-expanded')
          };

      setTimeout($.proxy(function(){
        if(typeof this.$largeImage !== 'undefined') {
          this.largeImage.fadeOut('fast'); 
        }
        this.$previewEl.css('height', 0);

        var $expandedItem = $items.eq(this.expandedIdx);
        $expandedItem.css('height', $expandedItem.data('height')).on(transEndEventName, onEndFn);

        if(!support) {
          onEndFn.call(); 
        }
      }, this), 25);

      return false;
    }
  } // end Preview
  
});
