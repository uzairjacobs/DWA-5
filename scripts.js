// scripts.js

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  if (dividend === "" || divider === "") {
    result.innerText = "Division not performed. Both values are required in inputs. Try again"
    return
  }
  if (!isNumeric(dividend) || !isNumeric(divider)) {
    result.innerText = "Division not performed. Invalid number provided. Try again"
    return
  }

  const quotient = dividend / divider
  if (isWholeNumber(quotient)) {
    result.innerText = quotient
  } else {
    result.innerText = Math.floor(quotient)
  }
});

function isNumeric(value) {
  return /^\d+$/.test(value)
}

function isWholeNumber(value) {
  return typeof value === 'number' && value % 1 === 0;
}