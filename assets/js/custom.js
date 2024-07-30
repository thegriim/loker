/*  jQuery Nice Select - v1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */
! function (e) {
    e.fn.niceSelect = function (t) {
        function s(t) {
            t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class") || "").addClass(t.attr("disabled") ? "disabled" : "").attr("tabindex", t.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));
            var s = t.next(),
                n = t.find("option"),
                i = t.find("option:selected");
            s.find(".current").html(i.data("display") || i.text()), n.each(function (t) {
                var n = e(this),
                    i = n.data("display");
                s.find("ul").append(e("<li></li>").attr("data-value", n.val()).attr("data-display", i || null).addClass("option" + (n.is(":selected") ? " selected" : "") + (n.is(":disabled") ? " disabled" : "")).html(n.text()))
            })
        }
        if ("string" == typeof t) return "update" == t ? this.each(function () {
            var t = e(this),
                n = e(this).next(".nice-select"),
                i = n.hasClass("open");
            n.length && (n.remove(), s(t), i && t.next().trigger("click"))
        }) : "destroy" == t ? (this.each(function () {
            var t = e(this),
                s = e(this).next(".nice-select");
            s.length && (s.remove(), t.css("display", ""))
        }), 0 == e(".nice-select").length && e(document).off(".nice_select")) : console.log('Method "' + t + '" does not exist.'), this;
        this.hide(), this.each(function () {
            var t = e(this);
            t.next().hasClass("nice-select") || s(t)
        }), e(document).off(".nice_select"), e(document).on("click.nice_select", ".nice-select", function (t) {
            var s = e(this);
            e(".nice-select").not(s).removeClass("open"), s.toggleClass("open"), s.hasClass("open") ? (s.find(".option"), s.find(".focus").removeClass("focus"), s.find(".selected").addClass("focus")) : s.focus()
        }), e(document).on("click.nice_select", function (t) {
            0 === e(t.target).closest(".nice-select").length && e(".nice-select").removeClass("open").find(".option")
        }), e(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function (t) {
            var s = e(this),
                n = s.closest(".nice-select");
            n.find(".selected").removeClass("selected"), s.addClass("selected");
            var i = s.data("display") || s.text();
            n.find(".current").text(i), n.prev("select").val(s.data("value")).trigger("change")
        }), e(document).on("keydown.nice_select", ".nice-select", function (t) {
            var s = e(this),
                n = e(s.find(".focus") || s.find(".list .option.selected"));
            if (32 == t.keyCode || 13 == t.keyCode) return s.hasClass("open") ? n.trigger("click") : s.trigger("click"), !1;
            if (40 == t.keyCode) {
                if (s.hasClass("open")) {
                    var i = n.nextAll(".option:not(.disabled)").first();
                    i.length > 0 && (s.find(".focus").removeClass("focus"), i.addClass("focus"))
                } else s.trigger("click");
                return !1
            }
            if (38 == t.keyCode) {
                if (s.hasClass("open")) {
                    var l = n.prevAll(".option:not(.disabled)").first();
                    l.length > 0 && (s.find(".focus").removeClass("focus"), l.addClass("focus"))
                } else s.trigger("click");
                return !1
            }
            if (27 == t.keyCode) s.hasClass("open") && s.trigger("click");
            else if (9 == t.keyCode && s.hasClass("open")) return !1
        });
        var n = document.createElement("a").style;
        return n.cssText = "pointer-events:auto", "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"), this
    }
}(jQuery);


$(document).ready(function () {
    /********* On scroll heder Sticky *********/
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $("header").addClass("head-sticky");
        } else {
            $("header").removeClass("head-sticky");
        }
    });
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $("header").addClass("head-sticky");
            $(".top-header-wrapper").slideUp('slow');
        } else {
            $("header").removeClass("head-sticky");
            $(".top-header-wrapper").slideDown('slow');
        }
    });
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
    $('.cart-header').on('click', function (e) {
        e.preventDefault();
        setTimeout(function () {
            $('body').addClass('no-scroll cartOpen');
            $('.overlay').addClass('cart-overlay');
        }, 50);
    });
    $('body').on('click', '.overlay.cart-overlay, .closecart', function (e) {
        e.preventDefault();
        $('.overlay').removeClass('cart-overlay');
        $('body').removeClass('no-scroll cartOpen');
    });
    /*********  Header Search Popup  ********/
    $(".search-header a").click(function () {
        $(".search-popup").toggleClass("active");
        $("body").toggleClass("no-scroll");
        $("body").toggleClass("search-popup-open");
    });
    $(".close-search").click(function () {
        $(".search-popup").removeClass("active");
        $("body").removeClass("no-scroll");
        $("body").removeClass("search-popup-open");
    });
    /********* Mobile Filter Popup ********/
    $('.filter-title').on('click', function (e) {
        e.preventDefault();
        setTimeout(function () {
            $('body').addClass('no-scroll filter-open');
            $('.overlay').addClass('active');
        }, 50);
    });
    $('body').on('click', '.overlay.active, .close-filter', function (e) {
        e.preventDefault();
        $('.overlay').removeClass('active');
        $('body').removeClass('no-scroll filter-open');
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
    /******  Nice Select  ******/
    $('select').niceSelect();
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
                slidesPerView: 2,
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


// pdp slider's
var pdpslider = new Swiper('.pdp-main-slider', {
    slidesPerView: 1,
    centeredSlides: false,
    loop: true,
    speed: 1000,
    loopedSlides: 6,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var pdpthumbs = new Swiper('.pdp-thumb-slider', {
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
            slidesPerView: 3,
        }
    },
});

pdpslider.controller.control = pdpthumbs;
pdpthumbs.controller.control = pdpslider;


$(window).on('load resize orientationchange', function() { 
    /********* Wrapper top space ********/
    var header_hright = $('header').outerHeight();
    $('header').next('.wrapper').css('margin-top', header_hright + 'px');  
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