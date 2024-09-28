const display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.dataset.value;

        if (value === 'C') {
            display.textContent = '0';
            currentInput = '';
            operator = '';
            firstOperand = '';
            secondOperand = '';
        } else if (value === '=') {
            secondOperand = currentInput;
            currentInput = '';
            if (operator) {
                display.textContent = calculate(firstOperand, secondOperand, operator);
                operator = '';
                firstOperand = display.textContent;
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (firstOperand && currentInput) {
                secondOperand = currentInput;
                currentInput = calculate(firstOperand, secondOperand, operator);
                display.textContent = currentInput;
                firstOperand = currentInput;
            } else {
                firstOperand = currentInput;
            }
            operator = value;
            currentInput = '';
        } else {
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});

function calculate(firstOperand, secondOperand, operator) {
    firstOperand = parseFloat(firstOperand);
    secondOperand = parseFloat(secondOperand);

    switch (operator) {
        case '+':
            return firstOperand + secondOperand;
        case '-':
            return firstOperand - secondOperand;
        case '*':
            return firstOperand * secondOperand;
        case '/':
            return firstOperand / secondOperand;
        default:
            return secondOperand;
    }
}
