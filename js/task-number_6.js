const inputVal = document.querySelector(`#validation-input`);
const inputLenght = Number(inputVal.dataset.length);

inputVal.addEventListener('blur', onInputValidLength);

function onInputValidLength(event) {
  if (inputVal.value.length === inputLenght) {
    inputVal.classList.remove('invalid');
    inputVal.classList.add('valid');
  } else {
    inputVal.classList.remove('valid');
    inputVal.classList.add('invalid');
  }
}
