let messagesArray = [];

const setMessages = (messArray) => {
  messagesArray = messArray;
};

const getMessages = () => {
  return messagesArray;
};

// function remove (array, element) {
//     const index = array.indexOf(element);

//     if (index !== -1) {
//       array.splice(index, 1);
//     }
//   }

module.exports = {
  setMessages,
  getMessages,
};
