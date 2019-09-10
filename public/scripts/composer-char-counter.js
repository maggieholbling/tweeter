$(document).ready(function() {
  // $('.new-tweet textarea').on('change',() => {
  //   console.log('works3');
  // });

  // $('.new-tweet textarea').on('keydown',() => {
  //   console.log('works1');
  // });

  // $('.new-tweet textarea').on('keyup',() => {
  //   console.log('works2');
  // });

  // $('.new-tweet textarea').on('blur',() => {
  //   console.log('works4');
  // });

  // $('.new-tweet textarea').on('keyup',function() {
  //   console.log($(this).val());
  // });


  $('.new-tweet textarea').on('keyup',function() {
    //$(this).val().length
    const remainingChars = 140 - $(this).val().length;

    if (remainingChars < 0) {
      $(this).nextAll('.counter').css('color', 'red');
    } else {
      $(this).nextAll('.counter').css('color', '#545149');
    }

    $(this).nextAll('.counter').text(remainingChars);
  });

  140
});