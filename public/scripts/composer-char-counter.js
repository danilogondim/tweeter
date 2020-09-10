// make sure that the document is ready before we run our code
$(document).ready(function() {

  // add an event listen to handle actions after the user stop typing
  $("#tweet-text").bind("keyup", function() {

    // assign the text length to a variable and use it to update the form counter
    const value = 140 - $(this).val().length;
    $(this).parent().find(".counter").text(value);

    // check whether the counter is negative and assign a class to change its style
    value < 0 ? $(".counter").addClass("negative-value") : $(".counter").removeClass("negative-value");

  });

});