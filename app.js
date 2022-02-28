const encryptBtn = document.getElementById('encryptBtn');
const decryptBtn = document.getElementById('decryptBtn');

const encryptInput = document.getElementById('encryptInput');
const decryptInput = document.getElementById('decryptInput');

encryptBtn.addEventListener('click', () => {
  fetch('/encrypt:3000', {
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
  fetch('/decrypt:3001', {
    method: 'POST',
    body: decryptInput.value,
  })
    .then((resp) => resp.text())
    .then((data) => {
      encryptInput.value = data;
    });
  decryptInput.value = '';
});
