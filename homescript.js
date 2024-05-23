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
        goToFirst: false,
        goToFirstSpeed: 2000,

        // Navigation
        navigation: true,
        navigationText: ["prev", "next"],
        pagination: true,
        paginationNumbers: true,

        dotsEach: 1, 

        responsive: {
            0: {
              items: 2  // 2 items on small screens
            },
            768: {
              items: 3  // 3 items on medium screens
            },
            1200: {
              items: 3  // 4 items on large screens (adjust if needed)
            }
          }
          
     
    });


});




