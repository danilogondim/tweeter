// a function to transform user input in plain text so we can deal with XSS vulnerability (malicious input containing js scripts)
const escape = str => {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

// calculate the time spent between the tweet creation and the day the tweet is being rendered
const timeFromTweet = creationDate => {
  const milliseconds = Date.now() - creationDate;
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
      output = Math.round(reference);
      break;
    }
    counter++;
  }

  const suffix = {
    0: " year",
    1: " month",
    2: " day",
    3: " hour",
    4: " minute",
    5: " second"
  };

  const adjustedSuffix = output > 1 ? suffix[counter] + "s" : suffix[counter];

  // print the adequate output
  return output ? output + adjustedSuffix + " ago" : "Just now";
};