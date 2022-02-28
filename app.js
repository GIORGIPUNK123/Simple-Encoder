const encryptBtn = document.getElementById('encryptBtn');
const decryptBtn = document.getElementById('decryptBtn');

const encryptInput = document.getElementById('encryptInput');
const decryptInput = document.getElementById('decryptInput');

encryptBtn.addEventListener('click', () => {
  fetch('/encrypt', {
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
  fetch('/decrypt', {
    method: 'POST',
    body: decryptInput.value,
  })
    .then((resp) => resp.text())
    .then((data) => {
      encryptInput.value = data;
    });
  decryptInput.value = '';
});
