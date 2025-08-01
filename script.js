document.getElementById("add").addEventListener("click", function () {
  calculate("+");
});

document.getElementById("subtract").addEventListener("click", function () {
  calculate("-");
});

document.getElementById("multiply").addEventListener("click", function () {
  calculate("*");
});

document.getElementById("divide").addEventListener("click", function () {
  calculate("/");
});

function calculate(operator) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  let result = 0;

    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2 ;
        break;
    }

  document.getElementById("result").textContent = result;
}