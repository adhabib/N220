let total;

function calculate() {
  let numOne = document.getElementById("first").value;
  numOne = parseInt(numOne);
  let numTwo = document.getElementById("second").value;
  numTwo = parseInt(numTwo);
  let operator = document.getElementById("operator").value;
  console.log(numOne);
  console.log(numTwo);
  console.log(operator);

  switch (operator) {
    case "add":
      total = numOne + numTwo;
      document.getElementById("equation").innerHTML =
        "Result: " + numOne + " + " + numTwo + " = " + total;
      console.log(total);
      break;
    case "subtract":
      total = numOne - numTwo;
      document.getElementById("equation").innerHTML =
        "Result: " + numOne + " - " + numTwo + " = " + total;
      console.log(total);
      break;
    case "multiply":
      total = numOne * numTwo;
      document.getElementById("equation").innerHTML =
        "Result: " + numOne + " * " + numTwo + " = " + total;
      console.log(total);
      break;
    case "divide":
      total = numOne / numTwo;
      document.getElementById("equation").innerHTML =
        "Result: " + numOne + " / " + numTwo + " = " + total;
      console.log(total);
      break;
    default:
      document.getElementById("equation").innerHTML = "Something went wrong";
  }
}

document.getElementsByTagName("form")[0].addEventListener("submit", function (event) {
    event.preventDefault();
    calculate();
  });
