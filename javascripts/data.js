let messagesArray = [];

const setMessages = (messArray) => {
  messagesArray = messArray;
};

const getMessages = () => {
  return messagesArray;
};

const removeMessage = (id) => {
  console.log('data.js', id);
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
  removeMessage,
};
