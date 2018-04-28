const chattyDom = require('./chattyDom');
const data = require('./data');
// this returns an array of  every button with class of delete-btn
const deleteButtons = document.getElementsByClassName('delete-btn');

// Delete Button
const attachDeleteEvents = () => {
  // looping over the array of delete buttons
  for (let i = 0; i < deleteButtons.length; i++) {
    // attaches a click event listener that points to the messagesDelete function
    deleteButtons[i].addEventListener('click', messagesDelete);
  }
};

// this function gets called when I click on a button with a class of delete-btn
const messagesDelete = (e) => {
  // this grabs the id off the button.  This id is the one from the json file.
  const buttId = e.target.id;
  // calls the removeMessage function in data.js and passes in the id
  data.removeMessage(buttId);
  // this pulls the current state of the messageArray from the data file
  const newMessagesArray = data.getMessages();
  // printing the dom based on the current messagesArray (replaces everything)
  chattyDom(newMessagesArray);
  // attaches delete events to the new delete buttons in the DOM
  attachDeleteEvents();
};

module.exports = {
  attachDeleteEvents,
};
