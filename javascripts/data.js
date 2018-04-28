// this file should not touch the dom at all its like a fake database. You do not pull in dom stuff but pass it in instead.
let messagesArray = [];
let counter = 6;

const setMessages = (messArray) => {
  messagesArray = messArray;
};

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

const addUserMessages = (userInput) => {
  messagesArray.push({
    id: `message${counter}`,
    message: `${userInput}`,
  }
  );
  counter++;
  console.log(messagesArray);
};

module.exports = {
  setMessages,
  getMessages,
  removeMessage,
  addUserMessages,
};
