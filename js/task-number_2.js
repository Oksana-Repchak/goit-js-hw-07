const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListEl = document.querySelector('ul');

const ingredientsList = ingredients.map(ingredient => {
  const listEl = document.createElement('li');
  listEl.textContent = `${ingredient}`;
  ingredientsListEl.append(listEl);
});
console.log(ingredientsListEl);
