const wordsCount = {};
const form = document.querySelector('.add-form');
const input = document.querySelector(".label__input")
const button = document.querySelector('.add-form__submit');
button.disabled = true

form.addEventListener('submit', function(event) {
    event.preventDefault();
});

input.addEventListener('keyup', function (event) {
  const text = event.target.value;
  button.disabled = !text;
});

button.addEventListener('click', function () {
    const inputValue = input.value;
    if (!wordsCount[inputValue]) {
        wordsCount[inputValue] = 1;
    } else {
        wordsCount[inputValue] += 1;
    }
    document.querySelector('p.info__report').innerText = `The count for ${inputValue} is ${wordsCount[inputValue]}`;
});
