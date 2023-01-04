// const inputRef = document.querySelector('#font-size-control');
// const textRef = document.querySelector('#text');

// inputRef.addEventListener('input', (event) => {
//     const fontSize = event.currentTarget.value;
//     textRef.style.fontSize = '${fontSize}px';
// })
const input = document.getElementById("font-size-control");
const span = document.getElementById("text");
input.addEventListener("input", handleInputRange);
function handleInputRange(event) {
  span.style.fontSize = event.currentTarget.value + "px";
}