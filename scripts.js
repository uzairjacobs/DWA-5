
const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  try {
    if (dividend === '' || divider === '') {
      result.innerHTML = 'Division not performed. Both values are required in inputs. Try again.';

    } else if (divider <= 0) {
      result.innerHTML = 'Division not performed. Invalid number provided. Try again.';
      throw new RangeError('Divider is not within the valid range');

    } else if (isNaN(dividend) || isNaN(divider)) {
      document.body.innerHTML = 'Something critical went wrong. Please reload the page.';
      throw new TypeError('Dividend or Divider is not a number.');

    } else {
      result.innerText = Math.floor(dividend / divider);
    }

  } catch (e) {

    console.log(e);
  }
});
