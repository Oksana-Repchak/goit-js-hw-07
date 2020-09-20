const incrementButtonEl = document.querySelector("[data-action='increment']");
const decrementButtonEl = document.querySelector("[data-action='decrement']");

incrementButtonEl.addEventListener('click', onIncrementBtnClick);
decrementButtonEl.addEventListener('click', onDecrementBtnClick);

let counterValue = 0;

function onIncrementBtnClick(event) {
  counterValue += 1;

  document.getElementById('value').textContent = counterValue;
}

function onDecrementBtnClick(event) {
  counterValue -= 1;

  document.getElementById('value').textContent = counterValue;
}
