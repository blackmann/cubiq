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
})

AOS.init();