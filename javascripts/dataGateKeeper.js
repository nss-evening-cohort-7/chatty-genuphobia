const data = require('./data');
const loadMessage = require('./chatty');
const chattyDom = require('./chattyDom');
const eventButtons = require('./eventButtons');

const onLoadFunction = function () {
  // the line below is parsing the data
  const messagesData = JSON.parse(this.responseText).messages;
  // this is choosing which functions that were exported in data.js by using the dot
  data.setMessages(messagesData);
  chattyDom(messagesData);
};

const failToLoad = function () {
  console.error('Wrong!!!');
};

const initializer = () => {
  loadMessage(onLoadFunction, failToLoad);
  eventButtons();
};

module.exports = initializer;
