$(document).ready(function() {

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

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
    <p class ="tweet-text">${text}</p>
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
    arrayOfObjects.forEach(obj => {
      $('container').append(createTweetElement(obj));
    });
  };

  renderTweets(data);
});