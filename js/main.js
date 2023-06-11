(function ($) {

    "use strict";

    // Preloader
    $(window).load(function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });


    // Portfolio filter
    $(window).on('load', function () {
        // In action
        var sortlist = $('#sortlist');
        var mg = new xFilterList(sortlist, {
            // you can set the margin in pixels
            margin: 0
        });
        // Filtering
        var filter, links = $('a');
        links.on('click', function () {
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

// gallery

var gallery = document.querySelector('.gallery');
var galleryItems = document.querySelectorAll('.gallery-item');
var numOfItems = gallery.children.length;
var itemWidth = 23; // percent: as set in css

var featured = document.querySelector('.featured-item');

var leftBtn = document.querySelector('.move-btn.left');
var rightBtn = document.querySelector('.move-btn.right');
var leftInterval;
var rightInterval;

var scrollRate = 0.2;
var left;

function selectItem(e) {
	if (e.target.classList.contains('active')) return;
	
	featured.style.backgroundImage = e.target.style.backgroundImage;
	
	for (var i = 0; i < galleryItems.length; i++) {
		if (galleryItems[i].classList.contains('active'))
			galleryItems[i].classList.remove('active');
	}
	
	e.target.classList.add('active');
}

function galleryWrapLeft() {
	var first = gallery.children[0];
	gallery.removeChild(first);
	gallery.style.left = -itemWidth + '%';
	gallery.appendChild(first);
	gallery.style.left = '0%';
}

function galleryWrapRight() {
	var last = gallery.children[gallery.children.length - 1];
	gallery.removeChild(last);
	gallery.insertBefore(last, gallery.children[0]);
	gallery.style.left = '-23%';
}

function moveLeft() {
	left = left || 0;

	leftInterval = setInterval(function() {
		gallery.style.left = left + '%';

		if (left > -itemWidth) {
			left -= scrollRate;
		} else {
			left = 0;
			galleryWrapLeft();
		}
	}, 1);
}

function moveRight() {
	//Make sure there is element to the leftd
	if (left > -itemWidth && left < 0) {
		left = left  - itemWidth;
		
		var last = gallery.children[gallery.children.length - 1];
		gallery.removeChild(last);
		gallery.style.left = left + '%';
		gallery.insertBefore(last, gallery.children[0]);	
	}
	
	left = left || 0;

	leftInterval = setInterval(function() {
		gallery.style.left = left + '%';

		if (left < 0) {
			left += scrollRate;
		} else {
			left = -itemWidth;
			galleryWrapRight();
		}
	}, 1);
}

function stopMovement() {
	clearInterval(leftInterval);
	clearInterval(rightInterval);
}

leftBtn.addEventListener('mouseenter', moveRight );
leftBtn.addEventListener('mouseleave', stopMovement);
rightBtn.addEventListener('mouseenter', moveLeft);
rightBtn.addEventListener('mouseleave', stopMovement);


//Start this baby up
(function init() {
	var images = [
		'../images/about/2.jpg',
		'../images/about/1.jpg',
		'../images/about/3.jpg',
		'../images/about/4.jpg',
		'../images/about/5.jpg',

		'../images/about/6.jpg',
		'../images/about/7.jpg',
		'../images/about/8.png',
		'../images/about/9.png',
		'../images/about/11.png',
        '../images/about/12.png',
		'../images/about/13.png',
		'../images/about/14.png',
        '../images/about/15.png',
		'../images/about/16.png',
		'../images/about/17.png',
		
	];
	
	//Set Initial Featured Image
	featured.style.backgroundImage = 'url(' + images[0] + ')';
	
	//Set Images for Gallery and Add Event Listeners
	for (var i = 0; i < galleryItems.length; i++) {
		galleryItems[i].style.backgroundImage = 'url(' + images[i] + ')';
		galleryItems[i].addEventListener('click', selectItem);
	}
})();



