$(function() {

    //Меню

    // $(".top-line .sf-menu").superfish({
    // 	cssArrows: false,
    // 	hoverClass:'no-class'
    // });
    //Карусель

    $(".owl-carousel").owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
    });

    //Scrool to id

    $("a[href*='#header']").mPageScroll2id();
    $("a[href*='#arwe2016']").mPageScroll2id();
    $("a[href*='#key-sections']").mPageScroll2id();
    $("a[href*='#types']").mPageScroll2id();
    $("a[href*='#location']").mPageScroll2id();
    $("a[href*='#partners']").mPageScroll2id();

    // Анимация при скроле
    $(document).ready(function() {
        var w = $(window).width();
        if (w > 768) {
            $(".type__item_1").animated("fadeInLeft"),
                $(".type__item_2").animated("fadeInUp"),
                $(".type__item_3").animated("fadeInRight");
        };
    });

    // Табы


    $('.arwe2016__tub-btn').on('click', 'button:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('.arwe2016').find('.arwe2016__tub-item ').removeClass('active').eq($(this).index()).addClass('active');
    });

		//Мобильное меню

    $('.header__top-menu-btn ').click(function() {
        $('.header__top-menu-inners').toggleClass('header__top-menu-active');
				return false
    });

    $(document).on('click', function(e) {
        if (!$(e.target).closest(".header__top-menu-inners").length) {
          $('.header__top-menu-inners').removeClass('header__top-menu-active');

        }
        e.stopPropagation();

    });

    //Попап регистрация

    $('.header__registration ').click(function() {
        $('.reg__popup-form').toggleClass('reg__popup-form-active');
        return false
    });

    $('.close').click(function() {
        $('.reg__popup-form').removeClass('reg__popup-form-active');
        return false
    });

    $(document).on('click', function(e) {
        if (!$(e.target).closest(".reg__popup-form").length) {
          $('.reg__popup-form').removeClass('reg__popup-form-active');

        }
        e.stopPropagation();

    });


    //Попап программа
    $('.key-sections__link ').click(function() {
        $('.programm__popup-form').toggleClass('reg__popup-form-active');
        return false
    });

    $('.programm__link ').click(function() {
        $('.programm__popup-form').toggleClass('reg__popup-form-active');
        return false
    });
    $('.close').click(function() {
        $('.programm__popup-form').removeClass('reg__popup-form-active');
        return false
    });

    $(document).on('click', function(e) {
        if (!$(e.target).closest(".programm__popup-form").length) {
          $('.programm__popup-form').removeClass('reg__popup-form-active');

        }
        e.stopPropagation();

    });

    //Попап контакты
    $('.header__contacts').click(function() {
        $('.popup__contact').toggleClass('reg__popup-form-active');
        return false
    });

    $('.close').click(function() {
        $('.popup__contact').removeClass('reg__popup-form-active');
        return false
    });

    $(document).on('click', function(e) {
        if (!$(e.target).closest(".popup__contact").length) {
          $('.popup__contact').removeClass('reg__popup-form-active');

        }
        e.stopPropagation();

    });



    //Радиобатоны

    $('#radio-1').click(function() {
        $('.radio-1__discription').addClass('radio__active'),
        $('.radio-2__discription').removeClass('radio__active'),
        $('.radio-3__discription').removeClass('radio__active');

   });
    $('#radio-2').click(function() {
        $('.radio-2__discription').addClass('radio__active'),
        $('.radio-1__discription').removeClass('radio__active'),
        $('.radio-3__discription').removeClass('radio__active');

    });

    $('#radio-3').click(function() {
        $('.radio-3__discription').addClass('radio__active'),
        $('.radio-1__discription').removeClass('radio__active'),
        $('.radio-2__discription').removeClass('radio__active');
    });

    //Выравнивание блоков по высоте

    // $(".services__item h4").equalHeights();
    // $(".news__text h4").equalHeights();
    // $(".news__text p").equalHeights();
    // $(".links__item span").equalHeights();

    //popup

    // $('.popup-with-move-anim').magnificPopup({
    // 	type: 'inline',
    //
    // 	fixedContentPos: false,
    // 	fixedBgPos: true,
    //
    // 	overflowY: 'auto',
    //
    // 	closeBtnInside: true,
    // 	preloader: false,
    //
    // 	midClick: true,
    // 	removalDelay: 300,
    // 	mainClass: 'my-mfp-slide-bottom'
    // });

    // $("a[href=#callback]").click(function() {
    // 	$("#callback .formname").val($(this).data("form"));
    // })

    //SVG Fallback
    if (!Modernizr.svg) {
        $("img[src*='svg']").attr("src", function() {
            return $(this).attr("src").replace(".svg", ".png");
        });
    };

    //E-mail Ajax Send
    //Documentation & Example: https://github.com/agragregra/uniMail
    $("#callback").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            $(".success").addClass("visible");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
                $(".success").removeClass("visible");
                $.magnificPopup.close();
            }, 3000);
        });
        return false;
    });

    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {

    };

    $("img, a").on("dragstart", function(event) {
        event.preventDefault();
    });

});


/*
var form = popup.querySelector("form");
*/


// Стилизация форм


// (function($) {
// $(function() {
//
//   $('input, select').styler();
//
// });
// })(jQuery);

// Ренджи


// $( function() {
//     $( "#slider-range" ).slider({
//       range: true,
//       min: 0,
//       max: 500,
//       values: [ 75, 300 ],
//       slide: function( event, ui ) {
//         $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
//       }
//     });
//     $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
//       " - $" + $( "#slider-range" ).slider( "values", 1 ) );
//   } );


// Попапы


// var link = document.querySelector(".search-button");
// var popup = document.querySelector(".search");
// var linkin = document.querySelector(".sign-in-button");
// var popupin = document.querySelector(".user-block__form");
// var linkbk = document.querySelector(".bascet-button");
// var popupbk = document.querySelector(".user-block__bascet");
// var linkfb = document.querySelector(".map__contact_btn");
// var popupfb = document.querySelector(".map__contact__form");
// // var close = document.querySelector(".but-2");
// // var login = popup.querySelector("[name=login]");
// // var password = popup.querySelector("[name=e-mail]");
// // var storage = localStorage.getItem("login");


// link.addEventListener("click", function() {
// 	popup.classList.toggle("popup-show");
// 	popupin.classList.remove("popup-show");
// 	popupbk.classList.remove("popup-show");
//
// });
//
//
// window.addEventListener("keydown", function(event) {
// 	if (event.keyCode == 27) {
// 		if (popup.classList.contains("popup-show")) {
// 			popup.classList.remove("popup-show");
// 		}
// 	}
// });
//
// linkin.addEventListener("click", function() {
// 	popupin.classList.toggle("popup-show");
// 	popup.classList.remove("popup-show");
// 	popupbk.classList.remove("popup-show");
//
// });
//
//
// window.addEventListener("keydown", function(event) {
// 	if (event.keyCode == 27) {
// 		if (popupin.classList.contains("popup-show")) {
// 			popupin.classList.remove("popup-show");
// 		}
// 	}
// });
//
// linkbk.addEventListener("click", function() {
// 	popupbk.classList.toggle("popup-show");
// 	popup.classList.remove("popup-show");
// 	popupin.classList.remove("popup-show");
//
// });
//
//
// window.addEventListener("keydown", function(event) {
// 	if (event.keyCode == 27) {
// 		if (popupbk.classList.contains("popup-show")) {
// 			popupbk.classList.remove("popup-show");
// 		}
// 	}
// });
//
//
// linkfb.addEventListener("click", function() {
// 	popupfb.classList.toggle("popup-show");
//
// });
//
//
// window.addEventListener("keydown", function(event) {
// 	if (event.keyCode == 27) {
// 		if (popupfb.classList.contains("popup-show")) {
// 			popupfb.classList.remove("popup-show");
// 		}
// 	}
// });
