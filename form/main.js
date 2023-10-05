const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const form = document.querySelector("form");
const display = document.querySelector("#display");

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  display.innerHTML = parseInt(num1.value) + parseInt(num2.value);
});
