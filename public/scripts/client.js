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
    // check whether the tweet is invalid and return an alert to the user
    if ($("#tweet-text").val().length > 140) {
      return alert("Unfortunately, your tweet could not be processed because it exceeds the 140 character limit. Please update its content and try again.")
    }
    if (!$("#tweet-text").val()) {
      return alert("It seems that your tweet is currently empty. Please fill it in with some awesome content!!")
    }

    // if it is valid, save the content to the "data" variable, reset the textarea and the counter and request the server to update the database
    const data = $(this).serialize()
    $("#tweet-text").val("");
    $("#tweet-text").parent().find(".counter").text(140);
    $.ajax({ url: '/tweets/', data, method: "POST" }).then(response => {

      // if our post was successful, we should do a get request to /tweets/, emptying our tweets-container and rendering the new tweets 
      $.ajax({ url: '/tweets/', method: "GET" }).then(response => {
        $("#tweets-container").empty();
        renderTweets(response);
      })

      // remove the console.log in the final version?
      console.log("Success!")
    }).catch(e => {
      // maybe remove the catch method in the final version?
      console.log("Failed!");
    })



  });

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