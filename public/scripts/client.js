/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {

  const createTweetElement = (tweetObj) => {
    // calculate how many days after the data of creation we are
    const date = Math.round((Date.now() - tweetObj.created_at) / (1000 * 60 * 60 * 24));
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
          <p>${date} days ago</p>
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


  $('form').on('submit', function (evt) {
    evt.preventDefault();
    $.ajax({ url: '/tweets/', data: $(this).serialize(), method: "POST" }).then(response => {
      console.log("Success!")
    }).catch(e => {
      console.log("Failed!");
    })
  })


});