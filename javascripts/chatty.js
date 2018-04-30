// This is the request for the data from the db file
const loadMessages = (loadFunction, errorFunction) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', loadFunction);
  myRequest.addEventListener('error', errorFunction);
  myRequest.open('GET', '../db/messages.json');
  myRequest.send();
};

// this line is exporting our request
module.exports = loadMessages;
