const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let parent = document.getElementById('ingredients')
for (let i = 0; i < ingredients.length; i++) {
  let elem = document.createElement('li')
  elem.innerHTML = ingredients[i]
  elem.classList.add('item')
  parent.appendChild(elem)
}


