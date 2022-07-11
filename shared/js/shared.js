/*!
 * ScriptName: shared.js
 *
 */
/*--------------------------------LANG-PAGE--------------------------------*/

// $('.nav-fixed[scroll-active]').length && $('.nav-fixed').attr('scroll-active') === "true"

$(document).ready(function() {
    if ($('#lang-page').length)
        $(document).on('scroll', onScroll)

    $('.nav-fixed a[href*="#"], .menu1 a[href*="#"]').on('click', function() {
       
        var e = $(this).attr('href')
        var h = $('.nav-fixed').outerHeight()
        var b = $(e).length ? $(e).offset().top : 0
        
        $('html, body').animate({
            scrollTop: (b + 1 - h)
        }, 1000)
    })


});

function onScroll() {
    var scroll = $(window).scrollTop()
    var header = $('.nav-fixed').outerHeight()
    $('.nav-fixed a[href^="#"]').each(function() {
        var el = $(this).attr('href')
        var offset = $(el).length ? $(el).offset().top : 0
        if ((scroll + header) >= offset && ($(el).outerHeight() + offset) > (scroll + header)) {
            $('.nav-fixed a[href^="#"]').removeClass('active')
            $(this).addClass('active')
        }
    })
}
var lastScrollTop = 0;
/*--------------------------------END-LANG-PAGE--------------------------------*/

/*====================*__pagetop__*====================*/
$(window).scroll(function() {
    var st = $(this).scrollTop();
    if (lastScrollTop != 0) {
        if (st < lastScrollTop) {
            $("#pagetop").addClass("visible");
            if (st < 10) {
                $("#pagetop").removeClass("visible");
            }
        } else if (st > lastScrollTop) {

            $("#pagetop").removeClass("visible");

        }
    }
    lastScrollTop = st;

});



$("body").on("click", "#pagetop", function() {
    if (!$(this).hasClass("in-scroll")) {
        $(this).addClass("in-scroll");

        var $scrollDuration = $.inArray($(this).attr("data-duration"), ["slow", "normal", "fast"]) >= 0 || parseInt($(this).attr("data-duration")) > 0 ? $(this).attr("data-duration") : "slow";

        $("html, body").stop().animate({
            scrollTop: 0
        }, $scrollDuration, function() {
            $("#pagetop").removeClass("in-scroll");
            $("#pagetop").removeClass("visible");
        });

    }
});





// END: scroll to top


$(function() {
    $('body').removeClass('navOpen');
    $(".hamburger").click(function() {
        if ($('body').hasClass('navOpen')) {
            $('body').addClass('navClose');
            $('body').removeClass('navOpen');
            // $('body').css('position', 'static');
            // $(window).scrollTop(offsetY);
            $(".hamburger").removeClass('is-active');

        } else {
            $('body').addClass('navOpen');
            $('body').removeClass('navClose');

            // offsetY = window.pageYOffset;
            // $('body').css({
            //     position: 'fixed',
            //     width: '100%',
            //     'top': -offsetY + 'px'
            // });

            $(".hamburger").addClass('is-active');
            return false;
        }
    });

    $(".close_btn,#menu_toggle a").click(function() {
        $('body').removeClass('navOpen');
        $('body').addClass('navClose');
        $(".hamburger").removeClass('is-active');
        // $('body').css('position', 'static');
    });


});

//fix scroll ios
var overflowIsHidden = function(node) {
    var style = getComputedStyle(node);
    return style.overflow === "hidden" || style.overflowX === "hidden" || style.overflowY === "hidden";
}
var isItScrollableWithoutVisibleScrollbars = function(el) {
    if (el === null) return false;
    var isScrollable = false,
        hasScrollbars = false;
    isScrollable = el.scrollHeight > el.offsetHeight ? true : false; // first, lets find out if it has scrollable content
    // isScrollable = el.scrollHeight + 1 > el.clientHeight ? true : false; // first, lets find out if it has scrollable content
    if (isScrollable) hasScrollbars = (el.offsetWidth > el.scrollWidth) ? true : false; // if it's scrollable, let's see if it likely has scrollbars
    // if (isScrollable) hasScrollbars = (el.offsetWidth > el.scrollWidth - 1) ? true : false; // if it's scrollable, let's see if it likely has scrollbars
    if (isScrollable && !hasScrollbars && !overflowIsHidden(el)) return true;
    else return false;
};
document.addEventListener("touchmove", function(e) {
    if (document.body.classList.contains("navOpen") && !isItScrollableWithoutVisibleScrollbars(document.getElementById("menu_toggle"))) e.preventDefault();
}, {
    passive: false
});



//has_nav
$(document).ready(function() {
    $(window).scroll(function() {
        ////console.log(TargetPos);
        var TargetPos = $('section.block').offset().top;
        var ScrollPos = $(window).scrollTop();
        if (ScrollPos > TargetPos) {
            $("body").addClass('has_nav');
        } else {

            $("body").removeClass('has_nav');
        }
    });
});

/*-----------------------------/toggle_lv2/-----------------------------*/
$(".toggle-link").click(function(e) {
    e.stopPropagation();
    $(this).parent().find(".toggle-main").slideToggle(500);
    if ($(this).parent().hasClass('active')) {
        $(this).parent().removeClass('active');
    } else {
        $(this).parent().addClass('active');
    }
});



// /*====================*__ACTIVE-2NAV__*====================*/
// $(document).ready(function() {
//     if ($('.nav-fixed[scroll-active]').length && $('.nav-fixed').attr('scroll-active') === "true")
//         $(document).on('scroll', onScroll)
//     $('.nav-fixed a[href*="#"] , #menu_toggle nav a[href^="#"]').on('click', function() {
//         // console.log(1)
//         var e = $(this).attr('href')
//         var h = $(window).width() > 1000 ? $('.nav-fixed').outerHeight() : 0
//         var b = $(e).length ? $(e).offset().top : 0
//         $('html, body').animate({
//             scrollTop: (b + 1 - h)
//         }, 500)
//         if ($('body').hasClass('navOpen')) {
//             $("body").removeClass("navClose");
//             $("body").addClass("has_nav");
//             $(".hamburger").removeClass("is-active");
//             //     // Clear ALL
//             //     bodyScrollLock.clearAllBodyScrollLocks();
//         }
//         return false;
//     })
// });

// function onScroll() {
//     var scroll = $(window).scrollTop()
//     var header = $('.nav-fixed').outerHeight()
//     var element = $(window).width() > 1000 ? '.nav-fixed nav a[href^="#"]' : '#menu_toggle nav a[href^="#"]'
//     $(element).each(function() {
//         var el = $(this).attr('href')
//         var offset = $(el).length ? $(el).offset().top : 0
//             // if ($(this).find('img').length) {
//             //     var _src_ = $(this).find('img').attr("src");
//             //     _src_ = _src_.replace(/^(.*?)_on\.(.*)$/, "$1.$2");
//             //     $(this).find('img').attr("src", _src_)
//             // }
//         if ((scroll + header) >= offset && ($(el).outerHeight() + offset) > (scroll + header)) {
//             $(element).removeClass('active')
//             $(this).addClass('active')
//             if ($(this).find('img').length) {
//                 // $(element + ' img').addClass('btn')
//                 // $(this).find('img').removeClass('btn')
//                 $(element + ' img').each(function() {
//                     var src = $(this).attr('src')
//                     var newSrc = src.replace('_on', '')
//                     $(this).attr('src', newSrc)
//                 })
//                 $(this).find('img').attr("src").match(/^(.*)(\.{1}.*)/g);
//                 var newSrc = RegExp.$1 + "_on" + RegExp.$2;
//                 $(this).find('img').attr("src", newSrc); // update src

//             }
//             // $(this).find('img').trigger('mouseout').trigger('mouseover')
//         }
//     })
// }
// var lastScrollTop = 0;

/*--------------------------------fix IE hash--------------------------------*/
// $(document).ready(function() {
//     function navClick() {
//         $("a[href*='#']:not([href='#']):not([class*='unsmooth']), a[xlink\\:href*='#']:not([xlink\\:href='#']):not([class*='unsmooth'])").on('click', function() {
//             var _e = $(this).attr('href')
//             var h = $(window).width() > 767 ? $('.nav-fixed').outerHeight() : 0
//             var b = $(_e).length ? $(_e).offset().top : 0
//             $('html, body').animate({
//                 scrollTop: (b - h + 1)
//             }, 500);
//         })
//         $(window).load(function() {
//             var hash_load = location.hash;
//             var h_header = $(window).width() > 767 ? $('.nav-fixed').outerHeight() : 0
//             if (hash_load) {
//                 var top_hash = $(hash_load).offset().top;
//                 $('html, body').animate({
//                     scrollTop: (top_hash - h_header + 1)
//                 }, 0)
//             }
//         });
//     }
//     if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
//         navClick()
//     }
//     if ($(window).width() < 768) {
//         navClick()
//     }
// })