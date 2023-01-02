let elem = document.getElementById('validation-input')
elem.addEventListener('blur', (event) => {
    let l = elem.getAttribute('data-length')
    if (l == event.target.value.length) {
        elem.classList.add('valid')
        elem.classList.remove("invalid");

    } else {
        elem.classList.add('invalid');
        elem.classList.remove("valid");
}
})