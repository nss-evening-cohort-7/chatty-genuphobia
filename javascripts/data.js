// this file should not touch the dom at all its like a fake database. You do not pull in dom stuff but pass it in instead.
// the line below is setting a variable to an empty array
let messagesArray = [];
// this line below is setting the counter so that when new messages are added they have the proper value regardless if the preloaded messages are manipulated
let counter = 6;

// this function below is setting the data into the empty array defined on line 3
const setMessages = (messArray) => {
  messagesArray = messArray;
};

// this function below is just simply returning that array
const getMessages = () => {
  return messagesArray;
};

const removeMessage = (passedId) => {
  // loop over the messagesArray
  for (let m = 0; m < messagesArray.length; m++) {
    // if the id of the current index of the messageArray matches the id passed in
    if (messagesArray[m].id === passedId) {
      // cut out that index from messagesArray
      messagesArray.splice(m, 1);
    }
  }
};

// the line below is stating a function by passing in what the user inputs in the input field
const addUserMessages = (userInput) => {
  // the line below is running a push method to the meesagesArray
  messagesArray.push({
    // this line below is using the counter to set the id of the user input message
    id: `message${counter}`,
    // the line below is setting the user input as the message
    message: `${userInput}`,
  }
  );
  // in this line the counter is incremented by one for every new input
  counter++;
};

// these are all the functions that are being exported
module.exports = {
  setMessages,
  getMessages,
  removeMessage,
  addUserMessages,
};
