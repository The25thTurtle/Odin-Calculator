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

let num1 = 0;
let num2 = 0;
let operator = "";

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
        if (operator === "") {
            if (num1 === 0) {
                num1 = btn.textContent;
                update();
            }
            else {
                num1 = num1 + btn.textContent;
                update();
            }
        }
        else {
            if (num2 === 0) {
                num2 = btn.textContent;
                update();
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
        operator = btnOP.textContent;
        update();
    });
});

const btnEqual = document.querySelector(".equal").addEventListener("click", () => {
    let results1 = parseInt(num1);
    let results2 = parseInt(num2);
    let getOperator = operator;
    update(operate(results1, results2, getOperator));
});

function update(answer) {
    const results = document.querySelector("#results");
    results.textContent = num1 + "" + operator + "" + num2+ " = " +answer;
}

const btnClear = document.querySelector(".clear").addEventListener("click", () => {
    num1 = 0;
    num2 = 0;
    operator = "";
    update();
});