let number_of_categories = document.querySelectorAll(".item")

console.log('Number of categories: ', number_of_categories.length)

for (let i = 0; i < number_of_categories.length; i++) {
    console.log('Category: ', number_of_categories[i].getElementsByTagName('h2')[0].innerHTML)
    console.log('Elements', number_of_categories[i].getElementsByTagName('li').length)
}