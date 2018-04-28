let messagesArray = [];

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

module.exports = {
  setMessages,
  getMessages,
  removeMessage,
};
