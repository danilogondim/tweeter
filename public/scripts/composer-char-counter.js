
// make sure that the document is ready before we run our code
$(document).ready(function () {

  // add an event listen to handle actions after the user stop typing. It uses .bind() instead of on() to leverage THIS
  $("#tweet-text").bind("keyup", function (event) {
    // assign the text length to a variable
    const value = 140 - $(this).val().length;
    // use the text length to update the counter that is in the same form as the textarea
    $(this).parent().find(".counter").text(value)
    // check whether the counter is negative and assign a class to change its style
    value < 0 ? $(".counter").addClass("negative-value") : $(".counter").removeClass("negative-value")
 
  })

});