(function($) {

    "use strict";

    // Preloader
    $(window).load(function() {
        $('#preloader').fadeOut('slow', function() {
            $(this).remove();
        });
    });


    // Portfolio filter
    $(window).on('load', function() {
        // In action
        var sortlist = $('#sortlist');
        var mg = new xFilterList(sortlist, {
            // you can set the margin in pixels
            margin: 0
        });
        // Filtering
        var filter, links = $('a');
        links.on('click', function() {
            if (!$(this).hasClass('active')) {
                // Retrieve the filter value
                filter = $(this).attr('data-filter');
                // Filtering by retrieved value
                mg.filterBy(filter);
                links.removeClass('active');
                $(this).addClass('active');
                if (filter === 'all') {
                    sortlist.removeClass('filtered');
                } else {
                    sortlist.addClass('filtered');
                }
            }
        });
        // Trigger click event for first link
        links.first().trigger('click');
    });


    // Bootstrap accordion
    function toggleIcon(e) {
        $(e.target)
            .prev('.panel-heading')
            .find(".more-less")
            .toggleClass('glyphicon-menu-down glyphicon-menu-up');
    }
    $('.panel-group').on('hidden.bs.collapse', toggleIcon);
    $('.panel-group').on('shown.bs.collapse', toggleIcon);


    // slick-carousel for testimonial
    $(".testimonial-carousel").slick({
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 3000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]

    });


    // Light box - featherlightGallery
    $('.gallery').featherlightGallery({
        gallery: {
            fadeIn: 300,
            fadeOut: 300
        },
        openSpeed: 300,
        closeSpeed: 300
    });
    $('.gallery2').featherlightGallery({
        gallery: {
            next: 'next Â»',
            previous: 'Â« previous'
        },
        variant: 'featherlight-gallery2'
    });


    // Parallax background
    $('.jarallax').jarallax({
        speed: 0.5,
    })

    // Water ripples animation
    $('#water-animation').ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04
    });




})(window.jQuery);

var date = new Date();
var year = date.getFullYear();
document.getElementById("yearJs").innerHTML = year;