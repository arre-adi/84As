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



$(document).ready(function () {
  var owl = $(".owl-carousel-2"); // Define the owl variable

  owl.owlCarousel({
      dots: true, 
      loop: false,
      // Basic Speeds
      slideSpeed: 500,
      paginationSpeed: 500,

      // Autoplay
      autoplay: false,
      goToFirst: false,
      goToFirstSpeed: 500,

      // Navigation
      navigation: true,
      navigationText: ["prev", "next"],
      pagination: true,
      paginationNumbers: false,


      dotsEach: 1, 

      responsive: {
          0: {
            items: 2.5  // 2 items on small screens
          },
          768: {
            items: 4  // 3 items on medium screens
          },
          1200: {
            items: 5 // 4 items on large screens (adjust if needed)
          }
        }
        
   
  });


});



document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
      const faqItem = question.parentElement;
      const isOpen = faqItem.classList.contains('open');
      
      document.querySelectorAll('.faq-item').forEach(item => {
          if (item !== faqItem) {
              item.classList.remove('open');
              item.querySelector('.faq-answer').style.maxHeight = null;
          }
      });
      
      if (!isOpen) {
          faqItem.classList.add('open');
          const answer = faqItem.querySelector('.faq-answer');
          answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
          faqItem.classList.remove('open');
          faqItem.querySelector('.faq-answer').style.maxHeight = null;
      }
  });
});















