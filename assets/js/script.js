/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Tire Service Center
 * @author      - 
 * @created_by  - Afzal Hossain
 * @created_at  - 09-03-2021
 * @modified_by - kawsar bin siraj
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {

    // animation  start
    // when trigged specific section
    $(function () {
        $(window).on('scroll', function () {
            let scrollTop = $(this).scrollTop();
            let bannerTitle = $('.banner .banner-title');
            bannerTitle.css({
                //'opacity': (1 - scrollTop / 600),
                // 'transform': `scale(${1 - (scrollTop / 2000)})`,
                '--style-width': `${(scrollTop / 180) * 100}%`,
            });
        });
    });

});



/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

$(document).ready(function () {

    // our-brand-slider init
    $(function () {
        $('.our-brand-slider').length ?
            $('.our-brand-slider').owlCarousel({
                loop: true,
                margin: 40,
                nav: false,
                autoplay: true,
                autoplayTimeout:2000,
                smartSpeed:700,
                stagePadding: 20,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1000: {
                        items: 4
                    }
                }
            }) : null
    });


    // parallax with jarallax
    $(function () {
        $('.jarallax').length ? jarallax(document.querySelectorAll('.jarallax')) : null
    });


    // wow js init
    $(function () {
        var wow = new WOW({
            animateClass: 'animated',
            mobile: true
        });
        wow.init();
    });


});
