// the two lines below are require what is exporting in the files in the parenthesis
const chattyDom = require('./chattyDom');
const data = require('./data');
// this returns an array of  every button with class of delete-btn
const deleteButtons = document.getElementsByClassName('delete-btn');
// this is setting a variable to be accessed by this id
const wipeOutBtn = document.getElementById('clear-button');
// this is setting a variable to be accessed by this id
const clearBtnDiv = document.getElementById('message-container');
// this is setting a variable to be accessed by this id
const darkCheckbox = document.querySelector('input[value="darkChng"]');
// this is setting a variable to be accessed by this id
const largeText = document.querySelector('input[value="largTxt"]');
// this is setting a variable to be accessed by this id
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

// this function is called when the clear button is clicked
const clearBtn = () => {
  // this line below is add a click event to clear button
  wipeOutBtn.addEventListener('click', () => {
    // the line below is clearing the dom of all the messages
    clearBtnDiv.innerHTML = '';
    // the line below is setting the array of preloaded messages to an empty array
    data.setMessages([]);
  });
};

// this function here is creating an event on change of a checkbox
darkCheckbox.onchange = function () {
  // the line below is stating the if the dark checkbox is checked...
  if (darkCheckbox.checked) {
    // ... then change the background color to a dark grey...
    otherText.style.backgroundColor = 'darkGrey';
    // ... and the change the color of the text to white
    otherText.style.color = 'white';
    // the line below is stating that if the checkbox is not checked
  } else {
    // have the background color set to this color
    otherText.style.backgroundColor = 'blanchedalmond';
    // and the text to be set to this color
    otherText.style.color = 'black';
  }
};

// this function is creating an event on the change of the large text checkbox
largeText.onchange = function () {
  // the line below is stating that if the checkbox is checked ...
  if (largeText.checked) {
    // ... then change the font size of the text to 40 px
    otherText.style.fontSize = '40px';
  } else {
    // otherwise the font size is set to be at 30 px
    otherText.style.fontSize = '30px';
  }
};

// the line below is setting a variable to access this id
const userInput = document.getElementById('user-input');

const getUserInput = (newMessagesArray) => {
  // this function is taking what the user inputs by pressing the enter key
  userInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      // stores the value of the input field into an array by calling the addUserMessages function
      data.addUserMessages(userInput.value);
      // and then sets the a variable equal to the getter of that array.
      const newMessagesArray = data.getMessages();
      // Then it is passed through the function that builds the dom string
      chattyDom(newMessagesArray);
      // and then calls the function that attaches the delete button to those messages
      attachDeleteEvents();
    }
  });
};

// this is exporting the following functions
module.exports = {
  attachDeleteEvents,
  clearBtn,
  getUserInput,
};
