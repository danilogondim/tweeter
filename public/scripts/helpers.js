// a function to transform user input in plain text so we can deal with XSS vulnerability (malicious input containing js scripts)
const escape = str => {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

// calculate the time spent between the tweet creation and the day the tweet is being rendered
const timeFromTweet = creationDate => {
  const milliseconds = (Date.now() - creationDate);
  // calculate every possibility and populate an array
  const seconds = milliseconds / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  const months = days / 30;
  const years = months / 12;
  const periods = [years, months, days, hours, minutes, seconds];

  // loop through each element and stop at the first one that is higher then 1
  let counter = 0;
  let output;
  for (const reference of periods) {
    if (reference > 1) {
      output = reference;
      break;
    }
    counter++
  }
  
  const suffix = {
    0: " years",
    1: " months",
    2: " days",
    3: " hours",
    4: " minutes",
    5: " seconds"
  }

  // print the adequate output
  return Math.round(output) ? Math.round(output) + suffix[counter] + " ago" : "Just now";
};