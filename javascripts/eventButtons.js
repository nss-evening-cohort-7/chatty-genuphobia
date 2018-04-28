const data = require('./data');
// const chattyDom = require('./chattyDom');
// const messages = document.getElementById('message-container');
// const loadMessages = require('./chatty.js')
const deleteButtons = document.getElementsByClassName('delete-btn');

// Delete Button
const messagesDelete = () => {
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', (e) => {
      const buttId = e.target.id;
      data.removeMessage(buttId);
    });
  }
};

module.exports = {
  messagesDelete,
};
