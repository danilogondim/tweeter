$(document).ready(() => {

  // add a event listener to the nav anchor element to toggle the submission form
  $("#compose-button").on('click', () => {
    // if the form is not visible, slide down the form
    if ($('.new-tweet:visible').length === 0) {
      $('.new-tweet').slideDown();
      return $("#tweet-text").focus();
    }
    // else, unfocus the button and hide the form
    $("#compose-button").blur();
    return $('.new-tweet').slideUp();
  });


  $("#scroll-button").on('click', () => {
    window.scrollTo(0, 0);
    $('.new-tweet').slideDown();
    return $("#tweet-text").focus();
  });

  $(window).scroll(() => {

    const scroll = $(window).scrollTop();
    if (scroll >= 400) {
      $("#compose-button").hide();
      $("#scroll-button").show();
    } else {
      $("#compose-button").show();
      $("#scroll-button").hide();
    }
  });
});