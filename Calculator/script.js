const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons button");

let expression = "";

buttons.forEach((button) => {
    button.addEventListener("click", function () {
        let value = this.innerText;

        if (value === "C") {
            expression = "";
            display.value = "";
        }
        else if (value === "⌫") {
            expression = expression.slice(0, -1);
            display.value = expression;
        }
        else if (value === "=") {
            try {
                expression = eval(expression).toString();
                display.value = expression;
            } catch (e) {
                display.value = "Error";
                expression = "";
            }
        }
        else {
            expression += value;
            display.value = expression;
        }
    });

    
});
