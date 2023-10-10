const list = document.querySelector("#list");
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const form = document.querySelector("form");
const display = document.querySelector("#display");

form.addEventListener("submit", function (evt) {
  evt.preventDefault();

  if(list.value == 1){
    display.innerHTML = parseInt(num1.value) + parseInt(num2.value);
  }
  if(list.value == 2){
    display.innerHTML = parseInt(num1.value) - parseInt(num2.value);
  }
  if(list.value == 3){
    display.innerHTML = parseInt(num1.value) * parseInt(num2.value);
  }
  if(list.value == 4){
    display.innerHTML = parseInt(num1.value) / parseInt(num2.value);
  }
});
