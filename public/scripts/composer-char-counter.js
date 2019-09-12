$(document).ready(function() {

  $('.new-tweet textarea').on('input',function() {
    const remainingChars = 140 - $(this).val().length;

    if (remainingChars < 0) {
      $(this).nextAll('.counter').css('color', 'red');
    } else {
      $(this).nextAll('.counter').css('color', '#545149');
    }

    $(this).nextAll('.counter').text(remainingChars);
  });
});