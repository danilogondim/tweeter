// make sure that the document is ready before we run our code
$(document).ready(() => {

  // add an event listener to the compose-button to toggle the submission form
  $("#compose-button").on('click', () => {
    
    // if the form is not visible, slide down the form and focus the textarea
    if ($('.new-tweet:visible').length === 0) {
      $('.new-tweet').slideDown();
      return $("#tweet-text").focus();
    }

    // else, unfocus the button and hide the form
    $("#compose-button").blur();
    return $('.new-tweet').slideUp();

  });

  // add an event listener to the scroll-button to toggle the submission form
  $("#scroll-button").on('click', () => {
    window.scrollTo(0, 0);
    $('.new-tweet').slideDown();
    return $("#tweet-text").focus();
  });

  // add an event listener to react to user scrolling by showing/hiding the compose and scroll buttons
  $(window).scroll(() => {
    const scroll = $(window).scrollTop();

    // if the user is scrolling down the page, hide the compose button and show the scroll button (the one that brings the user back to the top of the page and focus the textarea to create a new tweet)
    if (scroll >= 400) {
      $("#compose-button").hide();
      $("#scroll-button").show();

    // if the user returns to the top of the page, show the compose button and hide the scroll button
    } else {
      $("#compose-button").show();
      $("#scroll-button").hide();
    }
  });
  
});