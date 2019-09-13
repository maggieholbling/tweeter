$(() => {
  let heightBreak = 400;
  let top = 33;
  $(document).resize(function() {
    if ($(window).width() > 768) {
      heightBreak = 80;
      top = 0;
    }
  });

  if ($(window).width() > 768) {
    heightBreak = 80;
    top = 0;
  }

  $(window).on('scroll', function() {
    if ($(this).scrollTop() < heightBreak) {
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
  });

  $('.fa-angle-double-up').on('click', () => {
    $('.new-tweet').show();
    $(".new-tweet textarea").focus();
    $(window).scrollTop(top);
  });

});

