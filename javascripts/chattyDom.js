const eventButtons = require('./eventButtons');
const messagesOutputDiv = document.getElementById('message-container');

const domStrang = (messages) => {
  let domStrang = '';
  messages.forEach((message) =>
  {
    domStrang += `<div id="msgs">`;
    domStrang += `<p id="${message.id}">${message.message}</p>`;
    domStrang += `<button class="delete-btn">Delete</button>`;
    domStrang += `</div>`;
  });
  return domStrang;
};

const printMessagesToDom = (messages) => {
  messagesOutputDiv.innerHTML = domStrang(messages);
  eventButtons.messagesDelete();
};

module.exports = printMessagesToDom;
