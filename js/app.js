const confirmButton = document.querySelector(".confBtn");
const inputsElem = document.querySelectorAll("[date-input]");
const form = document.querySelector("form");
const completeState = document.querySelector(".completeState");
const completeStateBtn = document.querySelector(".completeState button");
const errorDateAndCvc = document.querySelector(".error");
const numberCardSpan = document.querySelector('.numberCard')
const nameAndDateSpan = document.querySelector('.nameAndDate')
const cvcSpan = document.querySelector('.bottomImg span')
console.log(cvcSpan)

confirmButton.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputsElem[1].value.length < 16 ||
    inputsElem[1].value == "" ||
    inputsElem[1].validity.patternMismatch
  ) {
    inputsElem[1].nextSibling.nextSibling.classList.add("active");
    inputsElem[1].nextSibling.nextSibling.innerText =
      "Wrong format, numbers only";
  } else {
    inputsElem[1].nextSibling.nextSibling.classList.remove("active");
    inputsElem[1].nextSibling.nextSibling.innerText = "";
  }

  if (
    inputsElem[2].value == "" ||
    inputsElem[3].value == "" ||
    inputsElem[2].value.length < 2 ||
    inputsElem[3].value.length < 2
  ) {
    errorDateAndCvc.firstElementChild.classList.add("active");
    errorDateAndCvc.firstElementChild.innerHTML = "Can't be blank";
  } else {
    errorDateAndCvc.firstElementChild.classList.remove("active");
    errorDateAndCvc.firstElementChild.innerHTML = "";
  }

  if (
    inputsElem[4].value == "" ||
    inputsElem[4].value.length < 3 ||
    inputsElem[4].validity.patternMismatch
  ) {
    errorDateAndCvc.lastElementChild.classList.add("active");
    errorDateAndCvc.lastElementChild.innerHTML = "Can't be blank";
  } else {
    errorDateAndCvc.lastElementChild.classList.remove("active");
    errorDateAndCvc.lastElementChild.innerHTML = "";
  }

  if (
    !inputsElem[1].value.length < 16 &&
    !inputsElem[1].value == "" &&
    !inputsElem[1].validity.patternMismatch &&
    !inputsElem[2].value == "" &&
    !inputsElem[3].value == "" &&
    !inputsElem[2].value.length < 2 &&
    !inputsElem[3].value.length < 2 &&
    !inputsElem[4].value == "" &&
    !inputsElem[4].value.length < 3 &&
    !inputsElem[4].validity.patternMismatch
  ) {
    form.classList.add("active");
    completeState.classList.remove("active");
  }
});

completeStateBtn.addEventListener("click", function () {
  form.classList.remove("active");
  completeState.classList.add("active");
  inputsElem.forEach(function (input) {
    input.value = "";
    window.history.go(0)
  });
});


inputsElem.forEach(function(input){
    input.addEventListener('input', function(){
        nameAndDateSpan.firstElementChild.innerHTML = inputsElem[0].value
        numberCardSpan.innerHTML = inputsElem[1].value
        nameAndDateSpan.lastElementChild.innerHTML = inputsElem[2].value + "/" + inputsElem[3].value
        cvcSpan.innerHTML = inputsElem[4].value
    })
})