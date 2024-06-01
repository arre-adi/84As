$(document).ready(function () {
    var owl = $(".owl-carousel-1"); // Define the owl variable

    owl.owlCarousel({
        dots: true, 
        loop: false,
        // Basic Speeds
        slideSpeed: 1000,
        paginationSpeed: 1000,

        // Autoplay
        autoplay: false,
        goToFirst: false,
        goToFirstSpeed: 500,

        // Navigation
        navigation: true,
        navigationText: ["prev", "next"],
        pagination: false,
        paginationNumbers: false,


        dotsEach: 1, 

        responsive: {
            0: {
              items: 2.7  // 2 items on small screens
            },
            768: {
              items: 3.5  // 3 items on medium screens
            },
            1200: {
              items: 3.6 // 4 items on large screens (adjust if needed)
            }
          }
          
     
    });


});





