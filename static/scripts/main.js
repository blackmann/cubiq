$(document).ready(() => {
    var header = $('#home-nav');
    var goUpButton = $('.go-up');

    goUpButton.hide();
  
    $(window).scroll(() => {
      if ($(this).scrollTop() > 250) {
        header.fadeOut();
        goUpButton.fadeIn();
      } else {
        header.fadeIn();
        goUpButton.fadeOut();
      }
    });

    goUpButton.on('click', function(e) {
      console.log("scrolling up...");
      $('html, body').animate({
        scrollTop: $('#top').offset().top
      }, 500, 'linear');
    });

    // navbar activation on mobile
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }
})

AOS.init();