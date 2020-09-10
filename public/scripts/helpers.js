// a function to transform user input in plain text so we can deal with XSS vulnerability (malicious input containing js scripts)
const escape = str => {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

// calculate the time spent between the tweet creation and the day the tweet is being rendered

// to be implemented: display time be years, months, etc. Need to change the text that generates the tweet
const timeFromTweet = creationDate => {
  const date = Math.round((Date.now() - creationDate) / (1000 * 60 * 60 * 24));
  return date;
};