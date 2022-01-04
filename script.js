let display = document.querySelector("#output");
let numberShow = "";
let operator = "";

let previousNumber;

function handleInput(value) {
  if (isNaN(value)) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
}

function answer() {
  if (operator === null) {
    return;
  } else {
    switch (operator) {
      case "+":
        display.innerText = parseInt(previousNumber) + parseInt(numberShow);
        break;
      case "-":
        display.innerText = parseInt(previousNumber) - parseInt(numberShow);
        break;
      case "X":
        display.innerText = parseInt(previousNumber) * parseInt(numberShow);
        break;
      case "÷":
        display.innerText = parseInt(previousNumber) / parseInt(numberShow);
        break;
      default:
        break;
    }
    numberShow = display.innerText;
    operator = null;
  }
}

function handleSymbol(value) {
  console.log("Symbol");
  switch (value) {
    case "÷":
    case "X":
    case "-":
    case "+":
      operator = value;
      previousNumber = numberShow;
      numberShow = "";
      display.innerText = operator;
      break;
    case "C":
      numberShow = 0;
      rerender();
      break;
    case "⬅":
      if (display.innerText.length < 2) {
        numberShow = 0;
      } else {
        numberShow = numberShow.slice(0, -1);
      }
      rerender();
      break;
    case "=":
      answer();
  }
}

function handleNumber(value) {
  if (numberShow === 0) {
    numberShow = value;
  } else {
    numberShow = numberShow + value.toString();
  }
  rerender();
}

function rerender() {
  display.innerText = numberShow;
}

function init() {
  document
    .querySelector(".buttons-section")
    .addEventListener("click", function (e) {
      handleInput(e.target.innerText);
    });
}

init();
