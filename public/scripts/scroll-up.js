$(() => {
  $(window).on('scroll', () => {
    if ($(window).scrollTop() < 400) {
      $('.fa-angle-double-up')
      .css({'opacity': '0', 'visibility': 'hidden'});
      $('nav button')
      .css({'opacity': '1', 'visibility': 'visible'});
    } else {
      $('.fa-angle-double-up')
      .css({'opacity': '1', 'visibility': 'visible'});
      $('nav button')
      .css({'opacity': '0', 'visibility': 'hidden'});
    }
  })

  $('.fa-angle-double-up').on('click', () => {
    $('.new-tweet').show();
    $(".new-tweet textarea").focus();
    $(window).scrollTop(80);
  })

});

