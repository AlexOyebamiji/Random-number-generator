'use strict';
const displayEl = document.getElementById('display');
const answerEl = document.getElementById('answer');

const generateNum = function () {
  const generate = Math.trunc(1000 + Math.random() * 9000);
  displayEl.textContent = generate;
};

answerEl.addEventListener('click', generateNum);
