const data = require('./data');

const wipeOutBtn = document.getElementById('clear-button');

const clearBtnDiv = document.getElementById('message-container');

const clearBtn = () => {
  wipeOutBtn.addEventListener('click', () => {
    clearBtnDiv.innerHTML = '';
    data.setMessages([]);
  });
};

module.exports = clearBtn;
