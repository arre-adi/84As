$(document).ready(function () {
    var owl = $(".owl-carousel"); // Define the owl variable

    owl.owlCarousel({
        dots: true,
        loop: false,
        // Basic Speeds
        slideSpeed: 2000,
        paginationSpeed: 2000,

        // Autoplay
        autoplay: false,
        goToFirst: true,
        goToFirstSpeed: 2000,

        // Navigation
        navigation: true,
        navigationText: ["prev", "next"],
        pagination: true,
        paginationNumbers: true,

        dotsEach: 1, 

        responsive: {
            0: {
                items: 3
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
                items: 3.5  
            }
        },
     
    });

  
    owl.on('mouseenter', function () {
        owl.trigger('stop.owl.autoplay');
    });

  
    owl.on('mouseleave', function () {
        owl.trigger('play.owl.autoplay', [owl.data('owl.autoplay.timeout')]);
    });
});




