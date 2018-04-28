// const eventButtons = require('./eventButtons');
const messagesOutputDiv = document.getElementById('message-container');

const domStrang = (messages) => {
  let domStrang = '';
  messages.forEach((message) =>
  {
    domStrang += `<div id="msgs">`;
    domStrang += `<p>${message.message}</p>`;
    domStrang += `<button id="${message.id}" class="delete-btn">Delete</button>`;
    domStrang += `</div>`;
  });
  return domStrang;
};

// const userDom = (userInput) => {
//   let userDom = '';
//   domStrang += `<div id="msgs">`;
//   domStrang += `<p>${eventButtons.userInput}</p>`;
//   domStrang += `<button id="${message.id}" class="delete-btn">Delete</button>`;
//   domStrang += `</div>`;
// }

const printMessagesToDom = (messages) => {
  // each time this line runs it wipes out the messagesOutputDiv and replaces
  // its contents with what comes back from the domString function
  messagesOutputDiv.innerHTML = domStrang(messages);
};

module.exports = printMessagesToDom;
