// const data = require('./data');
const loadFunction = require('./messages');
// const chattyDom = require('chattyDom');

const onLoadFunction = function () {
  const messageData = JSON.parse(this.responseText).messages;
  console.log('messageData', messageData);
};

const failToLoad = function () {
  console.error('Wrong!!!');
};

const initializer = () => {
  loadFunction(onLoadFunction, failToLoad);
};

onLoadFunction();
module.exports = {
  initializer,
};
