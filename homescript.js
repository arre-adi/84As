$(document).ready(function () {
    var owl = $(".owl-carousel"); // Define the owl variable

    owl.owlCarousel({
        dots: false,
        margin: 40,
        loop: true,
        // Basic Speeds
        slideSpeed: 2000,
        paginationSpeed: 2000,

        // Autoplay
        autoplay: true,
        goToFirst: true,
        goToFirstSpeed: 2000,

        // Navigation
        navigation: false,
        navigationText: ["prev", "next"],
        pagination: false,
        paginationNumbers: false,


        responsive: {
            0: {
                items: 3,
                margin: 10
            },
            480: {
                items: 4
            },
            768: {
                items: 4
            },
            992: {
                items: 4
            },
            1200: {
                items: 6
            }
        },
        autoplay: true, 
        autoplayTimeout: 2500, 
        autoplayHoverPause: true 
    });

  
    owl.on('mouseenter', function () {
        owl.trigger('stop.owl.autoplay');
    });

  
    owl.on('mouseleave', function () {
        owl.trigger('play.owl.autoplay', [owl.data('owl.autoplay.timeout')]);
    });
});




$(document).ready(function () {
    var owl = $(".owl-carousel-1"); // Define the owl variable

    owl.owlCarousel({
        dots: true,
        margin: 0,
        loop: true,
        // Basic Speeds
        slideSpeed: 2000,
        paginationSpeed: 2000,

        // Autoplay
        autoplay: true,
        goToFirst: true,
        goToFirstSpeed: 2000,

        // Navigation
        navigation: false,
        navigationText: ["prev", "next"],
        pagination: false,
        paginationNumbers: false,


        responsive: {
            0: {
                items: 3,
                margin: 0
            },
            480: {
                items: 3
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            },
            1200: {
                items: 3
            }
        },
        autoplay: true, 
        autoplayTimeout: 2500, 
        autoplayHoverPause: true 
    });

  
    owl.on('mouseenter', function () {
        owl.trigger('stop.owl.autoplay');
    });

  
    owl.on('mouseleave', function () {
        owl.trigger('play.owl.autoplay', [owl.data('owl.autoplay.timeout')]);
    });
});
