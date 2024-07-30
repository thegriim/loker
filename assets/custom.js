$(document).ready(function () {
  initHeaderSticky()
});
$(window).resize(function() {
  initHeaderSticky()
});
$(window).scroll(function() {
  initHeaderSticky()
});
function initHeaderSticky() {
  if (jQuery(document).height() > jQuery(window).height()) {
    if (jQuery('.site-header .header-main-navigationber').hasClass("sticky_header")) {
      if (jQuery(this).scrollTop() > 200) {
        jQuery('.site-header .header-main-navigationber').addClass("fixed");
      } else {
        jQuery('.site-header .header-main-navigationber').removeClass("fixed");
      }
    } else {
      jQuery('.site-header .header-main-navigationber').removeClass("fixed");
    }
  }
}
$(document).ready(function () {
    jQuery(".product-write-review").on('click',function(e) {
  $(".product-review").toggleClass("open-model");
  $('body').addClass('no-scroll open');
  $('.overlay').addClass('active');
  });
  jQuery(".overlay,.review-close-icon").on('click',function(e) {
  $(".product-review").removeClass("open-model");
  $('body').removeClass('no-scroll open');
  $('.overlay').removeClass('active');
  });
    jQuery('.cart__items-wrapper,.cart__footer-wrapper').wrapAll('<div class="container cart-page-section padding-top padding-bottom"><div class="row"></div></div>');
    jQuery('.carthead').prependTo('.template-cart .wrapper > .container > .row');
  var contentDiv = $('#WebPixelsManagerSandboxContainer');
  $('footer').after(contentDiv)
  countDownIni('.flip-countdown,.js-flip-countdown');
  /*********  size Popup  ********/ 
      $(".size-btn").click(function() { 
        $(".size-popup").toggleClass("active"); 
        $("body").toggleClass("no-scroll");
    });
    $(".close-search").click(function() { 
        $(".size-popup").removeClass("active"); 
        $("body").removeClass("no-scroll");
    });
    $(".close-btn").click(function() { 
        $(".size-popup").removeClass("active"); 
        $("body").removeClass("no-scroll");
    });
    /********* On scroll heder Sticky *********/
      var prevScrollpos = window.pageYOffset;
      window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          document.getElementById("header-sticky").style.top = "0";
        } else {
          document.getElementById("header-sticky").style.top = "-200px";
        }
        prevScrollpos = currentScrollPos;
      }
    /********* Mobile Menu ********/
    $('.mobile-menu-button').on('click', function (e) {
        e.preventDefault();
        setTimeout(function () {
            $('body').addClass('no-scroll active-menu');
            $(".mobile-menu-wrapper").toggleClass("active-menu");
            $('.overlay').addClass('menu-overlay');
        }, 50);
    });
    $('body').on('click', '.overlay.menu-overlay, .menu-close-icon svg', function (e) {
        e.preventDefault();
        $('body').removeClass('no-scroll active-menu');
        $(".mobile-menu-wrapper").removeClass("active-menu");
        $('.overlay').removeClass('menu-overlay');
    });
    /********* Cart Popup ********/
    $('.main-cart').on('click', function (e) {
        $('body').addClass('no-scroll cartOpen');
      });
      $('body').on('click', '.overlay.cart-overlay, .closecart', function (e) {
          $('body').removeClass('no-scroll cartOpen');
      });
    /*********  Header Search Popup  ********/
    $(".search-header a").click(function() { 
        $(".search-popup").toggleClass("active"); 
        $("body").toggleClass("no-scroll");
    });
    $(".close-search").click(function() { 
        $(".search-popup").removeClass("active"); 
        $("body").removeClass("no-scroll");
    });
    /********* Mobile Filter Popup ********/
      $('.mobile-facets__open').on('click', function (e) {
        $('body').addClass('mobile-open no-scroll');
        $('.overlay').addClass('active');
      });
      $('.overlay,.close-filter,.apply-btn').on('click', function (e) {
        $('body').removeClass('mobile-open no-scroll');
        $('.overlay').removeClass('active');
      });
    /******* Cookie Js *******/
    $('.cookie-close').click(function () {
        $('.cookie').slideUp();
    });
    /******* Subscribe popup Js *******/
    $('.close-sub-btn').click(function () {
        $('.subscribe-popup').slideUp();
        $(".subscribe-overlay").removeClass("open");
    });
    /********* qty spinner ********/
    var quantity = 0;
    $('.quantity-increment').click(function () {
        ;
        var t = $(this).siblings('.quantity');
        var quantity = parseInt($(t).val());
        $(t).val(quantity + 1);
    });
    $('.quantity-decrement').click(function () {
        var t = $(this).siblings('.quantity');
        var quantity = parseInt($(t).val());
        if (quantity > 1) {
            $(t).val(quantity - 1);
        }
    });
    /*********  Multi-level accordion nav  ********/
    $('.acnav-label').click(function () {
        var label = $(this);
        var parent = label.parent('.has-children');
        var list = label.siblings('.acnav-list');
        if (parent.hasClass('is-open')) {
            list.slideUp('fast');
            parent.removeClass('is-open');
        } else {
            list.slideDown('fast');
            parent.addClass('is-open');
        }
    });


    // home banner slider's
    var bnrmslider = new Swiper('.main-pro-slider', {
        slidesPerView: 1,
        centeredSlides: false,
        loop: true,
        speed: 1000,
        loopedSlides: 6,
        navigation: {
            nextEl: '.swiper-button-next.banner-nbtn',
            prevEl: '.swiper-button-prev.banner-nbtn',
        },
    });

    var bnrthumbs = new Swiper('.banner-thumb-slider', {
        slidesPerView: 2,
        spaceBetween: 10,
        centeredSlides: false,
        speed: 1000,
        loop: true,
        slideToClickedSlide: true,
        breakpoints: {
            575: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 3,
            },
            980: {
                slidesPerView: 4,
            }
        },
    });

    bnrmslider.controller.control = bnrthumbs;
    bnrthumbs.controller.control = bnrmslider;
//pdp-main-slider
 $('.pdp-main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: true,
        speed: 1000,
        loop: true,
        asNavFor: '.pdp-thumb-slider',
        autoplay: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                     prevArrow: '<button class="slide-arrow slick-prev"><svg width="13" height="21" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.43942 1.41655L0.441123 9.98976C-0.144552 10.5478 -0.144373 11.4523 0.441523 12.0101L9.44322 20.5797C10.0291 21.1375 10.9789 21.1373 11.5645 20.5793C12.1502 20.0213 12.15 19.1168 11.5641 18.559L3.6233 10.9993L11.5611 3.43643C12.1468 2.87842 12.1466 1.9739 11.5607 1.41613C10.9748 0.85835 10.0251 0.858538 9.43942 1.41655Z" fill="white"/></svg></button>',
                    nextArrow: '<button class="slide-arrow slick-next"><svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M2.56448 1.41655L11.5628 9.98976C12.1485 10.5478 12.1483 11.4523 11.5624 12.0101L2.56068 20.5797C1.97479 21.1375 1.02504 21.1373 0.439364 20.5793C-0.146312 20.0213 -0.146133 19.1168 0.439765 18.559L8.3806 10.9993L0.442763 3.43643C-0.142914 2.87842 -0.142735 1.9739 0.443164 1.41613C1.02906 0.85835 1.97881 0.858538 2.56448 1.41655Z" fill="white"/> </svg></button>',
                }
            }
        ]
    });

//pdp-thumb-slider
   $('.pdp-thumb-slider').slick({
        dots: false,
        asNavFor: '.pdp-main-slider',
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        touchMove: true,
        loop: false,
        autoplay: false,
        arrows: false,
        infinite: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    vertical: false,
                }
            },
        ]
    });

    
    /****  TAB Js ****/
    $('ul.tabs li').click(function () {
        var $this = $(this);
        var $theTab = $(this).attr('data-tab');
        console.log($theTab);
        if ($this.hasClass('active')) {
            // do nothing
        } else {
            $this.closest('.tabs-wrapper').find('ul.tabs li, .tabs-container .tab-content').removeClass('active');
            $('.tabs-container .tab-content[id="' + $theTab + '"], ul.tabs li[data-tab="' + $theTab + '"]').addClass('active');
        }
    });

    var swiper1 = new Swiper(".best-product-slider", {
        loop: true,
        speed: 1000,
        parallax: true,
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: false,
        autoplay:false,
        dots:false,
        breakpoints: {
            480: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 2,
            },
            1440: {
                slidesPerView: 3,
            },
            1880: {
                slidesPerView: 3,
            },
        },
          navigation: {
            nextEl: '.swiper-button-next', 
            prevEl: '.swiper-button-prev',
          }
    });
    var swiper2 = new Swiper(".new-product-slider", {
        loop: true,
        speed: 1000,
        parallax: true,
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: false,
        autoplay:false,
        dots:false,
        breakpoints: {
            480: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 3,
            },
            1440: {
                slidesPerView: 3,
            },
            1880: {
                slidesPerView: 4,
            },
        },
          navigation: {
            nextEl: '.swiper-button-next', 
            prevEl: '.swiper-button-prev',
          }
    });
    var swiper3 = new Swiper(".testimonial-slider", {
        loop: true,
        speed: 1000,
        parallax: true,
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: false,
        autoplay:false,
        dots:false,
        breakpoints: {
            480: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 1,
            },
            1440: {
                slidesPerView: 2,
            },
            1880: {
                slidesPerView: 2,
            },
        },
          navigation: {
            nextEl: '.swiper-button-next', 
            prevEl: '.swiper-button-prev',
          }
    });
    var swiper4 = new Swiper(".home-blog-slider", {
        loop: true,
        speed: 1000,
        parallax: true,
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: false,
        autoplay:false,
        dots:false,
        breakpoints: {
            480: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
            1440: {
                slidesPerView: 4,
            },
            1880: {
                slidesPerView: 4,
            },
        },
          navigation: {
            nextEl: '.swiper-button-next', 
            prevEl: '.swiper-button-prev',
          }
    });

    var swiper5 = new Swiper(".client-logo-slider", {
        loop: true,
        speed: 1000,
        parallax: true,
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true,
        autoplay:false,
        dots:false,
        breakpoints: {
            480: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 5,
            },
            1440: {
                slidesPerView: 5,
            },
            1880: {
                slidesPerView: 5,
            },
        },
          navigation: {
            nextEl: '.swiper-button-next', 
            prevEl: '.swiper-button-prev',
          }
    });
    var swiper6 = new Swiper(".related-product-slider", {
        loop: true,
        speed: 1000,
        parallax: true,
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: false,
        autoplay:false,
        dots:false,
        breakpoints: {
            480: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 3,
            },
            1440: {
                slidesPerView: 4,
            },
            1880: {
                slidesPerView: 4,
            },
        },
          navigation: {
            nextEl: '.swiper-button-next', 
            prevEl: '.swiper-button-prev',
          }
    });
    var swiper7 = new Swiper(".related-blog-slider", {
        loop: true,
        speed: 1000,
        parallax: true,
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: false,
        autoplay:false,
        dots:false,
        breakpoints: {
            480: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
            1440: {
                slidesPerView: 4,
            },
            1880: {
                slidesPerView: 4,
            },
        },
          navigation: {
            nextEl: '.swiper-button-next', 
            prevEl: '.swiper-button-prev',
          }
    });
          // currency
  function currencyFormSubmit(event) {
    event.target.form.submit();
  }

  document.querySelectorAll('.shopify-currency-form select').forEach(function(element) {
    element.addEventListener('change', currencyFormSubmit);
  });

  // coupan code
  $('body').on('keyup','.discount_coupan', function() {
   var apply_href = $('.apply').attr("href").split('discount=')[0];
   var val = $(this).val();
    $('.apply').attr("href",apply_href+'discount='+val);
  });

  // notify me
  $('body').on('click','.notify-btn', function(e) {
      e.preventDefault();
      $('body').addClass('no-scroll notify-active');
      $('.out-of-stock-form,.overlay').addClass('active');
    });
   $('body').on('click','.overlay,.notify-popup-close', function(e) {
      e.preventDefault();
     $('body').removeClass('no-scroll notify-active');
      $('.out-of-stock-form,.overlay').removeClass('active');
    });
  
// quickview
  $('body').on('click', '.quickview-close', function(e) {
    e.preventDefault();
    $('.quickview-popup').hide();
    $('body').removeClass('no-scroll quick-active');
  });
  
  $('body').on('click', '.quickview-btn, .show-qv', function(e) {
    e.preventDefault();
    $('body').addClass('no-scroll quick-active');
    var href= '/products/'+$(this).find('a').data('handle')+'?view=qv';
    $.get(href, function(product) {
      $('.quickview_popup_data').html(product);
      $('.qv_slider').slick({
          autoplay: false,
          slidesToShow: 1,
          speed: 1000,
          slidesToScroll: 1,
          arrows: true,
          prevArrow: '<button class="slide-arrow slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="4" height="6" viewBox="0 0 4 6" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.65976 0.662719C0.446746 0.879677 0.446746 1.23143 0.65976 1.44839L2.18316 3L0.65976 4.55161C0.446747 4.76856 0.446747 5.12032 0.65976 5.33728C0.872773 5.55424 1.21814 5.55424 1.43115 5.33728L3.34024 3.39284C3.55325 3.17588 3.55325 2.82412 3.34024 2.60716L1.43115 0.662719C1.21814 0.445761 0.872773 0.445761 0.65976 0.662719Z" fill="white"></path></svg></button>',
          nextArrow: '<button class="slide-arrow slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="4" height="6" viewBox="0 0 4 6" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.65976 0.662719C0.446746 0.879677 0.446746 1.23143 0.65976 1.44839L2.18316 3L0.65976 4.55161C0.446747 4.76856 0.446747 5.12032 0.65976 5.33728C0.872773 5.55424 1.21814 5.55424 1.43115 5.33728L3.34024 3.39284C3.55325 3.17588 3.55325 2.82412 3.34024 2.60716L1.43115 0.662719C1.21814 0.445761 0.872773 0.445761 0.65976 0.662719Z" fill="white"></path></svg></button>',
          dots: false,
          buttons: false,
          infinite: false,
          loop: false
      });

    });
    $('.quickview-popup').show();
  });

 $('body').on('change', '.nice-select.qv_select__select', function() {
    var selectedValues = [];

    // Collect selected option values
    $('.nice-select.qv_select__select').each(function() {
      var selectedValue = $(this).val();
      if (selectedValue) {
        selectedValues.push(selectedValue);
      }
    });
    var joinedValues = selectedValues.join(' / ');


    $('.variant-qv').each(function() {
     var variant_title = $(this).data('title'); 
     var variant_img = $('.variant-qv[data-title="'+variant_title+'"]').data('img');
     var variant_price = $('.variant-qv[data-title="'+variant_title+'"]').data('price');
     var qv_btn =  $('.variant-qv[data-title="'+variant_title+'"]').data('avail');
     var variant_id = $('.variant-qv[data-title="'+variant_title+'"]').data('id');
      variant_title = String(variant_title);
      joinedValues = String(joinedValues);
      
      if(variant_title === joinedValues){
      var slideIndex = $('.qv_slider .qv-pro-slider-img img[data-img="'+variant_img+'"]').parent().index();
      $('.qv_slider').slick('slickGoTo', slideIndex)
        
        $('.qv-price').find('.price-item--regular').text(variant_price);

        if(qv_btn === true ){
          $('#quick-view-temp .product-form__submit').find('span').text('Add to Cart');
          $('#quick-view-temp .product-form__submit').removeAttr('disabled');
          $('#quick-view-temp .quantity-select').show();
        }else{
          $('#quick-view-temp .product-form__submit').find('span').text('Sold out');
          $('#quick-view-temp .product-form__submit').attr('disabled', 'disabled');
          $('#quick-view-temp .quantity-select').hide();
        }

        $('input[name="id"]').val(variant_id);
        
      }
  });
  
  });
});

  // custom reviews on product page
  $(window).on('load', function() {
    $(".pdp-summery").find(".jdgm-prev-badge").append("<a class='product-write-review d-flex align-items-center'><svg xmlns='http://www.w3.org/2000/svg' fill='#ffffff' id='Outline' viewBox='0 0 24 24' width='16' height='16'><path d='M22.853,1.148a3.626,3.626,0,0,0-5.124,0L1.465,17.412A4.968,4.968,0,0,0,0,20.947V23a1,1,0,0,0,1,1H3.053a4.966,4.966,0,0,0,3.535-1.464L22.853,6.271A3.626,3.626,0,0,0,22.853,1.148ZM5.174,21.122A3.022,3.022,0,0,1,3.053,22H2V20.947a2.98,2.98,0,0,1,.879-2.121L15.222,6.483l2.3,2.3ZM21.438,4.857,18.932,7.364l-2.3-2.295,2.507-2.507a1.623,1.623,0,1,1,2.295,2.3Z'></path></svg> Write a Review</a>");
  });

if ($(".my-acc-column").length > 0) {
    jQuery(function ($) {
        var topMenuHeight = $("#daccount-nav").outerHeight();
        $("#account-nav").menuScroll(topMenuHeight);
        $(".account-list li:first-child").addClass("active");
    });
    // COPY THE FOLLOWING FUNCTION INTO ANY SCRIPTS
    jQuery.fn.extend({
        menuScroll: function (offset) {
            // Declare all global variables
            var topMenu = this;
            var topOffset = offset ? offset : 0;
            var menuItems = $(topMenu).find("a");
            var lastId;
            // Save all menu items into scrollItems array
            var scrollItems = $(menuItems).map(function () {
                var item = $($(this).attr("href"));
                if (item.length) {
                    return item;
                }
            });
            // When the menu item is clicked, get the #id from the href value, then scroll to the #id element
            $(topMenu).on("click", "a", function (e) {
                var href = $(this).attr("href");
                var offsetTop = href === "#" ? 0 : $(href).offset().top - topOffset;
                function checkWidth() {
                    var windowSize = $(window).width();
                    if (windowSize <= 767) {
                        $('html, body').stop().animate({
                            scrollTop: offsetTop - 200
                        }, 300);
                    }
                    else {
                        $('html, body').stop().animate({
                            scrollTop: offsetTop - 100
                        }, 300);
                    }
                }
                // Execute on load
                checkWidth();
                // Bind event listener
                $(window).resize(checkWidth);
                e.preventDefault();
            });
            // When page is scrolled
            $(window).scroll(function () {
                function checkWidth() {
                    var windowSize = $(window).width();
                    if (windowSize <= 767) {
                        var nm = $("html").scrollTop();
                        var nw = $("body").scrollTop();
                        var fromTop = (nm > nw ? nm : nw) + topOffset;
                        // When the page pass one #id section, return all passed sections to scrollItems and save them into new array current
                        var current = $(scrollItems).map(function () {
                            if ($(this).offset().top - 250 <= fromTop)
                                return this;
                        });
                        // Get the most recent passed section from current array
                        current = current[current.length - 1];
                        var id = current && current.length ? current[0].id : "";
                        if (lastId !== id) {
                            lastId = id;
                            // Set/remove active class
                            $(menuItems)
                                .parent().removeClass("active")
                                .end().filter("[href='#" + id + "']").parent().addClass("active");
                        }
                    }
                    else {
                        var nm = $("html").scrollTop();
                        var nw = $("body").scrollTop();
                        var fromTop = (nm > nw ? nm : nw) + topOffset;
                        // When the page pass one #id section, return all passed sections to scrollItems and save them into new array current
                        var current = $(scrollItems).map(function () {
                            if ($(this).offset().top <= fromTop)
                                return this;
                        });
                        // Get the most recent passed section from current array
                        current = current[current.length - 1];
                        var id = current && current.length ? current[0].id : "";
                        if (lastId !== id) {
                            lastId = id;
                            // Set/remove active class
                            $(menuItems)
                                .parent().removeClass("active")
                                .end().filter("[href='#" + id + "']").parent().addClass("active");
                        }
                    }
                }
                // Execute on load
                checkWidth();
                // Bind event listener
                $(window).resize(checkWidth);
            });
        }
    });
}
function responsiveMenu(){
  if(jQuery(window).width() < 768) {
      $('.product-filter-column').prependTo('.product-heading-row .container .row');
    }
    else { 
      $('.product-filter-column').prependTo('.product-list-row');
    }
  }
  jQuery(document).ready(function() {
    responsiveMenu();
  });
  jQuery(window).resize(function() {
    responsiveMenu();
  });
function countDownIni(countdown) {
  $(countdown).each(function () {
    var countdown = $(this);
    var promoperiod;
    if (countdown.attr('data-promoperiod')) {
      promoperiod = new Date().getTime() + parseInt(countdown.attr('data-promoperiod'), 10);
    } else if (countdown.attr('data-countdown')) {
      promoperiod = countdown.attr('data-countdown');
    }
    if (Date.parse(promoperiod) - Date.parse(new Date()) > 0) {
      $(this).addClass('countdown-block');
      countdown.countdown(promoperiod, function (event) {
        // countdown.html(event.strftime('%-w weeks %-d days %Hh %Mm %Ss'));
        countdown.html(event.strftime('<span><span>%D</span><span class="dots"> : </span></span>' + '<span><span>%H</span><span class="dots"> : </span></span>' + '<span><span>%M</span><span class="dots"> : </span></span>' + '<span><span class="second">%S</span></span>'));
      });
    }
  });
}