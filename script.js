let billInput = document.querySelector(".bill-input");
let tipBtn = document.querySelectorAll(".tip-btn");
let resetBtn = document.querySelector(".reset-btn");
let customInput = document.querySelector(".custom");
let peopleCount = document.querySelector(".people-count");
let tipPerPersonText = document.querySelector(".single-tip");
let totalAmountText = document.querySelector(".total-amount");

let tipPercentage = 0;
let billAmount = 0;
let numOfPeople = 1;

function calculateTip() {
  const tipAmount = billAmount * tipPercentage;
  const totalAmount = tipAmount + billAmount;
  const tipPerPerson = tipAmount / numOfPeople;
  const totalPerPerson = totalAmount / numOfPeople;

  tipPerPersonText.innerHTML = "$" + tipPerPerson.toFixed(2);
  totalAmountText.innerHTML = "$" + totalPerPerson.toFixed(2);
}

function resetTip() {
  billInput.value = "";
  peopleCount.value = "";
  customInput.value = "";
  totalAmountText.innerHTML = "$0.00";
  tipPerPersonText.innerHTML = "$0.00";

  tipBtn.forEach((btn) => {
    btn.classList.remove("active-btn");
  });

  billAmount = 0;
  tipPercentage = 0;
  numOfPeople = 1;
}

billInput.addEventListener("input", function () {
  if (billInput.value !== "" && parseFloat(billInput.value) > 0) {
    billAmount = parseFloat(billInput.value);
    calculateTip();
  } else {
    tipPerPersonText.innerHTML = "$0.00";
    totalAmountText.innerHTML = "$0.00";
  }
});

customInput.addEventListener("input", function () {
  if (
    customInput.value !== "" &&
    parseFloat(customInput.value) < 100 &&
    parseFloat(customInput.value) > 0
  ) {
    tipPercentage = parseFloat(customInput.value / 100);
    calculateTip();
  } else {
    tipPerPersonText.innerHTML = "$0.00";
    totalAmountText.innerHTML = "$0.00";
  }
});

tipBtn.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    tipPercentage = event.target.id / 100;
    tipBtn.forEach((button) => {
      button.classList.remove("active-btn");
    });
    event.target.classList.add("active-btn");
    calculateTip();
  });
});

peopleCount.addEventListener("input", function () {
  if (peopleCount.value !== "" && parseInt(peopleCount.value) > 0) {
    numOfPeople = parseInt(peopleCount.value);
    calculateTip();
  } else {
    tipPerPersonText.innerHTML = "$0.00";
    totalAmountText.innerHTML = "$0.00";
  }
});

resetBtn.addEventListener("click", resetTip);
