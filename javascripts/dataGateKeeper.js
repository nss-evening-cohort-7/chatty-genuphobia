// these lines are requiring the functions exported in the each file stated in the parenthesis
const data = require('./data');
const loadMessage = require('./chatty');
const chattyDom = require('./chattyDom');
const eventButtons = require('./eventButtons');

const onLoadFunction = function () {
  // the line below is parsing the data
  const messagesData = JSON.parse(this.responseText).messages;
  // this is setting the messageArray in data.js equal to messagesData
  data.setMessages(messagesData);
  // this writes my array of messages to the dom
  chattyDom(messagesData);
  // attaches the delete event listener to each delete button
  eventButtons.attachDeleteEvents();
  // is calling the function the gets the users input
  eventButtons.getUserInput();
};

// this function runs on Mondays typically
const failToLoad = function () {
  console.error('Wrong!!!');
};

// this function is running the load function and error function as well as the function written for the clearing od the messages container div
const initializer = () => {
  loadMessage(onLoadFunction, failToLoad);
  eventButtons.clearBtn();
};

// this line is exporting all the function running in the initializer function
module.exports = initializer;
