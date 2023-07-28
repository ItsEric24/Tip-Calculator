# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

-While building this project, i learnt a lot on **problem solving** and how to solve a problem step step instead of trying to tackle the problem all at once

-Below were my favourite lines of code:

```js
function calculateTip() {
  const tipAmount = billAmount * tipPercentage;
  const totalAmount = tipAmount + billAmount;
  const tipPerPerson = tipAmount / numOfPeople;
  const totalPerPerson = totalAmount / numOfPeople;

  tipPerPersonText.innerHTML = "$" + tipPerPerson.toFixed(2);
  totalAmountText.innerHTML = "$" + totalPerPerson.toFixed(2);
}

billInput.addEventListener("input", function () {
  if (billInput.value !== "" && parseFloat(billInput.value) >= 10) {
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
```


### Continued development

-I stll need to work on my **problem solving**.I can't say its bad but it needs more improvement


## Author

- Frontend Mentor - [@ItsEric24](https://www.frontendmentor.io/profile/@ItsEric24)
- GitHub - [@ItsEric24](https://github.com/ItsEric24)
