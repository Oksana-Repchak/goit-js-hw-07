const quantityСategories = document.querySelector('#categories').children
  .length;
console.log(`В списке ${quantityСategories} категории.`);

const itemsEl = document.querySelectorAll('.item');

itemsEl.forEach(element => {
  const titleEl = element.querySelector('h2').textContent;
  const itemsLengthEl = element.querySelectorAll('li').length;
  console.log(`Категория: ${titleEl}\nКоличество элементов: ${itemsLengthEl}`);
});
