// const eventButtons = require('./eventButtons');

// the line below is setting a variable to accessing this div element
const messagesOutputDiv = document.getElementById('message-container');

// the line below is is starting a function that builds a domString
const domStrang = (messages) => {
  // the line below is setting a variable that is subject to change as an empty string
  let domStrang = '';
  // the lone below is looping through the messages array that is passed in
  messages.forEach((message) =>
  {
    // these lines below are combined to create the domString
    domStrang += `<div id="msgs">`;
    domStrang += `<p class="col-sm-11">${message.message}</p>`;
    domStrang += `<button id="${message.id}" class="delete-btn col-sm-1">Delete</button>`;
    domStrang += `</div>`;
  });
  // the line below is just returning said domString
  return domStrang;
};

const printMessagesToDom = (messages) => {
  // each time this line runs it wipes out the messagesOutputDiv and replaces
  // its contents with what comes back from the domString function
  messagesOutputDiv.innerHTML = domStrang(messages);
};

// the line below is exporting this function
module.exports = printMessagesToDom;
