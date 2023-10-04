// scripts.js

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  if (dividend === '' || divider === '') {
    result.innerHTML = " Division not performed. Both values are required in inputs. Try again."
  }
  else if (divider < 0) {
    result.innerHTML = "Division not performed. Invalid number provided. Try again."
    console.error("Invalid number.")
  }
  else if (isNaN(dividend) || isNaN(divider)) {
    document.body.innerHTML = "Something critical went wrong. Please reload the page.";
    console.error("Something critical went wrong.");
  } else {
    result.innerText = Math.floor(dividend / divider);
  }
});