let elem = document.getElementById('name-input')
let output = document.getElementById('name-output')

elem.addEventListener("input", (event) => {
    if (event.currentTarget.value) {
          output.textContent = event.currentTarget.value;
    }
    else {
        output.textContent = 'Anonymous'
    }
});