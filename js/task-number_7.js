const controlFont = document.getElementById('font-size-control');
const text = document.getElementById('text');

controlFont.addEventListener('input', onIncreaseSize);

function onIncreaseSize(event) {
  text.style.fontSize = event.currentTarget.value + 'px';
}
