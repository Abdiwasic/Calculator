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
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
};

const display = document.querySelector(".display");
let isSecond = false;

let isSecondOperator = false;

const updateNumberVariables = () => {
  const digits = document.querySelectorAll(".digit");

  digits.forEach((digit) => {
    digit.addEventListener("click", (e) => {
      const value = e.target.value;
      if (!isSecond) {
        firstNumber += value;
        display.textContent = firstNumber;
      } else {
        secondNumber += value;
        display.textContent = secondNumber;
      }
    });
  });
};

const operators = document.querySelectorAll(".operator");

operators.forEach((op) => {
  op.addEventListener("click", (e) => {
    if (firstNumber !== "" && secondNumber !== "") {
      const result = operate(
        Number(firstNumber),
        Number(secondNumber),
        operator,
      );
      secondNumber = "";
      firstNumber = result;
      display.textContent = firstNumber;
    }

    isSecond = true;
    const value = e.target.value;
    operator = value;
  });
});

updateNumberVariables();

const equalBtn = document.querySelector(".equal-btn");

equalBtn.addEventListener("click", (e) => {
  const result = operate(Number(firstNumber), Number(secondNumber), operator);
  display.textContent = result;
  isSecond = false;
  firstNumber = result.toString();
  secondNumber = "";
});

const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener("click", (e) => {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  isSecond = false;
  display.textContent = "0";
});
