let counterValue = 0;

let firstButton = document.getElementsByTagName('button')[0]
let secondButton = document.getElementsByTagName('button')[1]

firstButton.addEventListener('click', () => { counterValue -= 1; document.getElementById('value').innerHTML = counterValue
})
secondButton.addEventListener('click', () => { counterValue += 1; document.getElementById('value').innerHTML = counterValue
 })

// while (true) {
// }
// document.getElementById('value').innerHTML = counterValue
