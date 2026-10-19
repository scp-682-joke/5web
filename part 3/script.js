const mouseBox = document.getElementById("mouse-box");
const keyboardInput = document.getElementById("keyboard-input");
const currentValue = document.getElementById("current-value");

mouseBox.addEventListener("mouseover", function () {
    mouseBox.style.backgroundColor = "lightblue";
});

mouseBox.addEventListener("mouseout", function () {
    mouseBox.style.backgroundColor = "";
});

keyboardInput.addEventListener("keyup", function () {
    currentValue.textContent = keyboardInput.value;
});

document.getElementById("calculate").addEventListener("click", function () {
    const firstNumber = document.getElementById("first-number").valueAsNumber;
    const secondNumber = document.getElementById("second-number").valueAsNumber;
    const operation = document.getElementById("operation").value;
    const result = document.getElementById("calculation-result");

    if (!Number.isFinite(firstNumber) || !Number.isFinite(secondNumber)) {
        result.textContent = "Please enter two valid numbers.";
        return;
    }

    let answer;
    if (operation === "+") {
        answer = firstNumber + secondNumber;
    } else if (operation === "-") {
        answer = firstNumber - secondNumber;
    } else if (operation === "*") {
        answer = firstNumber * secondNumber;
    } else if (operation === "/") {
        if (secondNumber === 0) {
            result.textContent = "Cannot divide by zero.";
            return;
        }
        answer = firstNumber / secondNumber;
    }

    result.textContent = "Result: " + answer;
});
