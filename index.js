function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multi(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

let num1 = "";
let num2 = "";
let operator = "";
let justCalculated = false;

function operate(num1, num2, operator) {
    if (operator === "+") {
        return add(num1, num2);
    }

    if(operator === "-") {
        return subtract(num1, num2);
    }
    if(operator === "*") {
        return multi(num1, num2);
    }

    if(operator === "/") {
        return divide(num1, num2);
    }

    else {
        return "Error";
    }
}

const btn = document.querySelectorAll(".numbers").forEach(btn => {
    btn.addEventListener("click", () => {
        if (operator === "" && justCalculated !== true) {
            if (num1 === "") {
                num1 = btn.textContent;
                update();
            }
            else {
                num1 = num1 + btn.textContent;
                update();
            }
        }
        else {
            if (justCalculated === true) {
                num1 = btn.textContent;
                update();
                justCalculated = false;
            }
            else {
                num2 = num2 + btn.textContent;
                update();
            }
        }
    });
});

const btnOP = document.querySelectorAll(".operators").forEach(btnOP => {
    btnOP.addEventListener("click", () => {
        if (num2 !== "" && justCalculated !== true) {
            let results1 = parseInt(num1);
            let results2 = parseInt(num2);
            let getOperator = operator;
            num1 = operate(results1, results2, getOperator);
            num2 = "";
            operator = btnOP.textContent;
            update();
        }
        else {
            operator = btnOP.textContent;
            justCalculated = false;
            update();
        }
    });
});

const btnEqual = document.querySelector(".equal").addEventListener("click", () => {
    if (num2 !== "" && justCalculated !== true) {
        let results1 = parseFloat(num1);
        let results2 = parseFloat(num2);
        let getOperator = operator;
        num1 = operate(results1, results2, getOperator);
        num2 = "";
        operator ="";
        justCalculated = true;
        update();
    }
    else {
        const results = document.querySelector("#results");
        results.textContent = "ERROR";
    }
});

function update() {
    const results = document.querySelector("#results");
    if (operator === "" && num2 === "") {
        results.textContent = num1;
    }
    else {
        results.textContent = num1 +" "+ operator +" "+ num2;
    }
}

const btnClear = document.querySelector(".clear").addEventListener("click", () => {
    num1 = "";
    num2 = "";
    operator = "";
    justCalculated = false;
    update();
});