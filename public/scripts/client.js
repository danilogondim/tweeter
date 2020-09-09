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

  $('form').on('submit', function (evt) {
    evt.preventDefault();
    $.ajax({ url: '/tweets/', data: $(this).serialize(), method: "POST" }).then(response => {
      // maybe remove the then method in the final version?
      console.log("Success!")
    }).catch(e => {
      // maybe remove the catch method in the final version?
      console.log("Failed!");
    })
  })

  const loadTweets = () => {
    $.ajax({ url: '/tweets/', method: "GET" }).then(response => {
      console.log("Successful load!!");
      renderTweets(response);
    }).catch(e => {
      // maybe remove the catch method in the final version?
      console.log("Failed to load tweets");
    })
  }
  loadTweets();


});