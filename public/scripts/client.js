// make sure that the document is ready before we run our code
$(document).ready(() => {

  // a function that creates a single tweet element based on a tweet object
  const createTweetElement = tweetObj => {
    const $tweet = $(`
      <article class="tweet">
        <header>
          <div class="avatar-and-name">
            <img src="${escape(tweetObj.user.avatars)}">
            <p>${escape(tweetObj.user.name)}</p>
          </div>
          <a class="handle" href="#">${escape(tweetObj.user.handle)}</a>
        </header>
        <p class="tweet-text">${escape(tweetObj.content.text)}</p>
        <footer>
          <p>${timeFromTweet(tweetObj.created_at)} days ago</p>
          <div class="icons">
            <span>&#9873</span>
            <span>&#8633</span>
            <span>&#9829</span>
          </div>
        </footer>
      </article>
    `);
    return $tweet;
  };

  // a function that receives an array containing all tweet objects from the database and renders each tweet by calling the previous function
  const renderTweets = tweetsArray => {
    tweetsArray.forEach(elem => {
      const $tweet = createTweetElement(elem);
      $('#tweets-container').append($tweet);
    });
  };

  // a function that loads the tweets' database and call the function that renders all tweets
  const loadTweets = () => {
    $.ajax({ url: '/tweets/', method: "GET" }).then(response => {
      renderTweets(response);
    });
  };

  // load the current database as soon as the document is ready and before the user interact with the page
  loadTweets();

  // assign an event listener to the form to handle tweet submissions
  $('form').on('submit', function(evt) {
    evt.preventDefault();
    // before validating the input, get rid of any error messages
    $("#error-message").slideUp();
    $("#error-message").empty();

    // check whether the tweet exceeds the limit of characters and alert the user
    if ($("#tweet-text").val().length > 140) {
      $("#error-message").html("&#10060; Your tweet could not be processed because it exceeds the 140 character limit. Please try again.");
      $("#error-message").slideDown({
        start: function() {
          $(this).css({
            display: "flex"
          });
        }
      });
      return;
    }

    // check whether the tweet is empty and alert the user
    if (!$("#tweet-text").val()) {
      $("#error-message").html("&#10060; It seems that your tweet is currently empty. Please fill it in with some awesome content!!");
      $("#error-message").slideDown({
        start: function() {
          $(this).css({
            display: "flex"
          });
        }
      });
      return;
    }

    // if it is a valid tweet (not empty or over 140 characters), save the content to the "data" variable, reset the textarea and the counter and request the server to update the database
    const data = $(this).serialize();
    $("#tweet-text").val("");
    $("#tweet-text").parent().find(".counter").text(140);
    $.ajax({ url: '/tweets/', data, method: "POST" }).then(() => {
      // after updating the database, request /tweets/, empty the tweets-container and render the new tweets
      $.ajax({ url: '/tweets/', method: "GET" }).then(response => {
        $("#tweets-container").empty();
        renderTweets(response);
      });
    });
    
  });
});