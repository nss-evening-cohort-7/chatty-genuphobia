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
  eventButtons.getUserInput();
};

const failToLoad = function () {
  console.error('Wrong!!!');
};

const initializer = () => {
  loadMessage(onLoadFunction, failToLoad);
  eventButtons.clearBtn();
};

module.exports = initializer;
