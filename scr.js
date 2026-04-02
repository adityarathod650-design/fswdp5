let display = document.getElementById("display");
let historyList = document.getElementById("historyList");

function append(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value;
        let result = eval(expression);

        // Add to history
        let li = document.createElement("li");
        li.textContent = expression + " = " + result;
        historyList.appendChild(li);

        display.value = result;
    } catch {
        display.value = "Error";
    }
}

// ✅ Keyboard support
document.addEventListener("keydown", function(event) {
    const key = event.key;

    if (!isNaN(key) || ['+', '-', '*', '/', '.', '%'].includes(key)) {
        append(key);
    } else if (key === "Enter") {
        calculate();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key === "Escape") {
        clearDisplay();
    }
});