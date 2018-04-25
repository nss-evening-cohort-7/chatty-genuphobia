// const data = require('./data');
const loadMessage = require('./chatty');
// const chattyDom = require('chattyDom');

const onLoadFunction = function () {
  const messagesData = JSON.parse(this.responseText);
  console.log('messagesData', messagesData);
};

const failToLoad = function () {
  console.error('Wrong!!!');
};

const initializer = () => {
  loadMessage(onLoadFunction, failToLoad);
};

module.exports = initializer;
