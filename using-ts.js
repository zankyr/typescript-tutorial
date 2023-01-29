// Variable should be renamed due to name collision with the JS file
var tsButton = document.querySelector("button"); // Here I'm telling TS that I'm sure that such element exists ("!") and I'm specifiyng its type with "as HTML...Element"
var tsInput1 = document.getElementById("num1");
var tsInput2 = document.getElementById("num2");
function tsAdd(num1, num2) {
  return num1 + num2;
}
tsButton.addEventListener("click", function () {
  console.log("Typescript function: ", tsAdd(+tsInput1.value, +tsInput2.value));
});
