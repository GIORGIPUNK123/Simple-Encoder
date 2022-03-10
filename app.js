const encryptBtn = document.getElementById('encryptBtn');
const decryptBtn = document.getElementById('decryptBtn');

const encryptInput = document.getElementById('encryptInput');
const decryptInput = document.getElementById('decryptInput');

const copyBtn = document.getElementById('copyBtn');

copyBtn.addEventListener('click', () => {
  decryptInput.focus();
  decryptInput.select();
  document.execCommand('copy');
});

encryptBtn.addEventListener('click', () => {
  fetch('https://simple-encoder.herokuapp.com/encrypt', {
    method: 'POST',
    body: encryptInput.value,
  })
    .then((resp) => resp.text())
    .then((data) => {
      decryptInput.value = data;
    });
  encryptInput.value = '';
});

decryptBtn.addEventListener('click', () => {
  fetch('https://simple-encoder.herokuapp.com/decrypt', {
    method: 'POST',
    body: decryptInput.value,
  })
    .then((resp) => resp.text())
    .then((data) => {
      encryptInput.value = data;
    });
  decryptInput.value = '';
});
