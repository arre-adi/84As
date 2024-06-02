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
              items: 3  // 2 items on small screens
            },
            768: {
              items: 4  // 3 items on medium screens
            },
            1200: {
              items: 4 // 4 items on large screens (adjust if needed)
            }
          }
          
     
    });


});




document.addEventListener("DOMContentLoaded", function() {
  const dropdownButtons = document.querySelectorAll(".dropdown-button");

  dropdownButtons.forEach(button => {
      button.addEventListener("click", function() {
          const parentItem = this.parentElement;
          const isActive = parentItem.classList.contains("active");

          document.querySelectorAll(".dropdown-item").forEach(item => {
              item.classList.remove("active");
          });

          if (!isActive) {
              parentItem.classList.add("active");
          }
      });
  });
});










