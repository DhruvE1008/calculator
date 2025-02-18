let isAdd = false;
let isSub = false;
let isMultiply = false;
let isDivide = false;
let isRemainder = false;
let isPower = false;
let num1 = 0;

function digitPressed(event) {
    document.getElementById("answer").innerText += event.target.innerText;
}

function clearAnswer() {
    document.getElementById("answer").innerText = "";
}

function add() {
    isAdd = true;
    num1 = parseInt(document.getElementById("answer").innerText);
    clearAnswer();
}

function sub() {
    isSub = true;
    num1 = parseInt(document.getElementById("answer").innerText);
    clearAnswer();
}

function multiply() {
    isMultiply = true;
    num1 = parseInt(document.getElementById("answer").innerText);
    clearAnswer();
}

function divide() {
    isDivide = true;
    num1 = parseInt(document.getElementById("answer").innerText);
    clearAnswer();
}

function remainder() {
    isRemainder = true;
    num1 = parseInt(document.getElementById("answer").innerText);
    clearAnswer();
}

function power() {
    isPower = true;
    num1 = parseInt(document.getElementById("answer").innerText);
    clearAnswer();
}

function equals() {
    let num2 = parseInt(document.getElementById("answer").innerText);
    if (isAdd) {
        document.getElementById("answer").innerText = num1 + num2;
        isAdd = false;
    } else if (isSub) {
        document.getElementById("answer").innerText = num1 - num2;
        isSub = false;
    } else if (isMultiply) {
        document.getElementById("answer").innerText = num1 * num2;
        isMultiply = false;
    } else if (isDivide) {
        document.getElementById("answer").innerText = num1 / num2;
        isDivide = false;
    } else if (isRemainder) {
        document.getElementById("answer").innerText = num1 % num2;
        isRemainder = false;
    } else if (isPower) {
        document.getElementById("answer").innerText = Math.pow(num1, num2);
        isPower = false;
    }
}