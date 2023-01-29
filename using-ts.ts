// Variable should be renamed due to name collision with the JS file
const tsButton = document.querySelector("button")! as HTMLButtonElement; // Here I'm telling TS that I'm sure that such element exists ("!") and I'm specifiyng its type with "as HTML...Element"
const tsInput1 = document.getElementById("num1")! as HTMLInputElement;
const tsInput2 = document.getElementById("num2")! as HTMLInputElement;

function tsAdd(num1: number, num2: number) {
  return num1 + num2;
}

tsButton.addEventListener("click", function () {
  console.log("Standard function: ", tsAdd(+tsInput1.value, +tsInput2.value));
});
