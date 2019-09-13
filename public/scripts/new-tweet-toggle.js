$(() => {
  $('.new-tweet').hide();
  $('nav button').on('click', () => {
    $('.new-tweet').toggle("slow","swing");
    $(".new-tweet textarea").focus();
  });
});