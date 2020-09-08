$(document).ready(function () {
  /* reasons for not picking other options:
    -change -> it only triggers after the change is made
    -blur ->it only triggers when we lose focus
    -keydown -> seems ok at first, but the updates are delayed by one key
    -keypress -> it does not count backspace as an event
  */


  // it misses some enters if we keep holding the same key, but as soon we stop typing, it will show the result
  $("#tweet-text").bind("keyup", function (event) {

    /*
      Tip: You could re-target the textarea using the same selector you've used in this file to establish the event listener, but you already have a handle on the textarea thanks to this. But this points to a plain DOM node, meaning it doesn't have any of the nice jQuery functions like .val() to get the value of a textarea. How can you leverage this while also having access to these jQuery niceties ?
    */

    // leveraging this:
    console.log(140 - $(this).val().length);

    // without leveraging this (in the case the event is set with .on() instead of .bind(). It still works with bind() though)
    const value = 140 - $("#tweet-text").val().length;
    console.log(value);

    
  })

});


