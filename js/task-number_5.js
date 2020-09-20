const refs = {
  input: document.getElementById('name-input'),
  nameLabel: document.getElementById('name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  if (refs.input.value === '') {
    refs.nameLabel.textContent = 'незнакомец';
  } else {
    refs.nameLabel.textContent = event.currentTarget.value;
  }
}
