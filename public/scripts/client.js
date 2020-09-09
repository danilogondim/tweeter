/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {

  const createTweetElement = (tweetObj) => {
    // still need some work so that the date is calculated instead of giving a fixed value of 10...
    const $tweet = $(`
      <article class="tweet">
        <header>
          <div>
            <img src="${tweetObj.user.avatars}">
            <p>${tweetObj.user.name}</p>
          </div>
          <a href="#">${tweetObj.user.handle}</a>
        </header>
        <p>${tweetObj.content.text}</p>
        <footer>
          <p>${10} days ago</p>
          <div>
            <span>&#9873</span>
            <span>&#8633</span>
            <span>&#9829</span>
          </div>
        </footer>
      </article>
    `)
    return $tweet;
  };

  const renderTweets = tweetsArray => {
    tweetsArray.forEach(elem => {
      const $tweet = createTweetElement(elem);
      $('#tweets-container').append($tweet);
    })

  };

  // Test / driver code (temporary). Eventually will get this from the server.
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png",
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
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];
  renderTweets(data);


});