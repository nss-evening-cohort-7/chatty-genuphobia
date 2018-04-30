const chattyDom = require('./chattyDom');
const data = require('./data');
// this returns an array of  every button with class of delete-btn
const deleteButtons = document.getElementsByClassName('delete-btn');
const wipeOutBtn = document.getElementById('clear-button');
const clearBtnDiv = document.getElementById('message-container');
const darkCheckbox = document.querySelector('input[value="darkChng"]');
const largeText = document.querySelector('input[value="largTxt"]');
const otherText = document.getElementById('message-container');

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

const clearBtn = () => {
  wipeOutBtn.addEventListener('click', () => {
    clearBtnDiv.innerHTML = '';
    data.setMessages([]);
  });
};

darkCheckbox.onchange = function () {
  if (darkCheckbox.checked) {
    otherText.style.backgroundColor = 'darkGrey';
    otherText.style.color = 'white';
  } else {
    otherText.style.backgroundColor = 'blanchedalmond';
    otherText.style.color = 'black';
  }
};

largeText.onchange = function () {
  if (largeText.checked) {
    otherText.style.fontSize = '40px';
  } else {
    otherText.style.fontSize = '30px';
  }
};

const userInput = document.getElementById('user-input');

const getUserInput = (newMessagesArray) => {
  userInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      // console.log(userInput.value);
      data.addUserMessages(userInput.value);
      const newMessagesArray = data.getMessages();
      chattyDom(newMessagesArray);
      attachDeleteEvents();
    }
  });
};

module.exports = {
  attachDeleteEvents,
  clearBtn,
  getUserInput,
};
