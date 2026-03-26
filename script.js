const add = (a, b) => {
  return a + b;
};
const subtract = (a, b) => {
  return a - b;
};
const multiply = (a, b) => {
  return a * b;
};
const divide = (a, b) => {
  return a / b;
};

let firstNumber = "";
let secondNumber = "";
let operator = "";

const operate = (num1, num2, operator) => {
  switch (operator) {
    case "+":
      return add(num1, num2);
      break;
    case "-":
      return subtract(num1, num2);
      break;
    case "*":
      return multiply(num1, num2);
      break;
    case "/":
      return divide(num1, num2);
      break;
  }
};

const digits = document.querySelectorAll(".digit");

const isSecond = false;
digits.forEach((digit) => {
  digit.addEventListener("click", (e) => {
    const value = e.target.value;
    if (!isSecond) {
      firstNumber += value;
      console.log(firstNumber);
    }
  });
});
