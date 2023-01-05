const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// let parent = document.getElementById('ingredients')
// for (let i = 0; i < ingredients.length; i++) {
//   let elem = document.createElement('li')
//   elem.innerHTML = ingredients[i]
//   elem.classList.add('item')
//   parent.appendChild(elem)
// }

const list = document.querySelector('#ingredients')
const liArray = []

ingredients.forEach(ingredient => {
	const item = document.createElement('li')
	item.className = 'item'
	item.textContent = ingredient
	liArray.push(item)
})

list.append(...liArray)
