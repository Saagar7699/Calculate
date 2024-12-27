const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        let expression = display.value;
        // Replace percentage with its equivalent decimal value
        expression = expression.replace(/(\d+)%/g, (match, p1) => {
            return p1 / 100;
        });
        display.value = eval(expression);
    } catch (error) {
        display.value = "Error";
    }
}

function toggleSign() {
    if (display.value.startsWith("-")) {
        display.value = display.value.substring(1);
    } else {
        display.value = "-" + display.value;
    }
}