const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");

// This function will always return a string concantenation
function add(num1, num2) {
  return num1 + num2;
}

// This function converts the inputs to a number type
function improvedAdd(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return +num1 + +num2;
  }
}

button.addEventListener("click", function () {
  console.log("Standard function: ", add(input1.value, input2.value));
  console.log("Improved function: ", improvedAdd(input1.value, input2.value));
});
