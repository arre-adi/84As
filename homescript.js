$(document).ready(function() {
  var owl = $(".owl-carousel"); // Define the owl variable

  owl.owlCarousel({
    dots:false,
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

      // Responsive
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
      autoplay: true, // Enable autoplay
      autoplayTimeout: 3000, // Set autoplay timeout (milliseconds)
      autoplayHoverPause: true // Pause autoplay on hover
  });

  // Pause autoplay on mouse enter
  owl.on('mouseenter', function() {
      owl.trigger('stop.owl.autoplay');
  });

  // Resume autoplay on mouse leave
  owl.on('mouseleave', function() {
      owl.trigger('play.owl.autoplay', [owl.data('owl.autoplay.timeout')]);
  });
});
