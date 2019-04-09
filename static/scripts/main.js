$(document).ready(() => {
    var header = $('#home-nav');
  
    $(window).scroll(() => {
      if ($(this).scrollTop() > 250) {
        header.fadeOut();
      } else {
        header.fadeIn();
      }
    })
})