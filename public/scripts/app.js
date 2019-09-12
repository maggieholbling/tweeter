$(document).ready(function() {

  const escape = (userData) => {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(userData));
    return div.innerHTML;
  };

  const createTweetElement = function(object) {
    const name = object.user.name;
    const avatars = object.user.avatars;
    const handle = object.user.handle;
    const text = object.content.text;
    const timestamp = Math.round((Date.now() - object.created_at) / (1000*60*60*24));
    
    const article = $(
    `<article class="tweet">
    <header>
      <div class="left">
        <img src="${avatars}" alt="Avatar" height="42" width="42">
        <p>${name}</p>
      </div>
      <div class="right hidden">
        <p>${handle}</p>
      </div>
    </header>
    <div class="clear"></div>
    <p class ="tweet-text">${escape(text)}</p>
    <footer>
      <div class="left">
        <p>${timestamp} days ago</p>
      </div>
      <div class="right">
        <i class="fab fa-font-awesome-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
      </div>
    </footer>
    <div class="clear"></div>
  </article>`);
    return article;
  }

  const renderTweets = function(arrayOfObjects) {
    $('container').text("");
    arrayOfObjects.forEach(obj => {
      $('container').append(createTweetElement(obj));
    });
  };

  const loadTweets = () => {
    $('form textarea').val("");
    $.ajax('/tweets')
    .then(renderTweets)
    // .catch(err => {
    //   alert('Error loading tweets')
    // });
  };

  loadTweets();

  //Hijacking form
  $('form').on('submit', function(event) {
    event.preventDefault();
    $('.new-tweet .left p')
      .text('')
      .css("display", "none")

    if (!$('form textarea').val()) {
      $('.new-tweet .left p')
      .text('No tweet entered')
      .toggle("slow","swing")
      // .css("display", "inline-block")

      return;
    }

    if ($('form textarea').val().length > 140) {
      $('.new-tweet .left p')
      .text('Max length exceeded')
      .css("display", "inline-block")
      return;
    }
    formData = $(this).serialize();

    $.ajax('/tweets', {
      method: 'POST',
      data: formData
    })
    .then(loadTweets)
    // .catch(err => {
    //   alert('Error posting tweet')
    // });
  });

});