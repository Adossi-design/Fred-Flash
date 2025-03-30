const display = document.getElementById('calc-display');
const buttons = document.querySelectorAll('.calc-btn');
let currentInput = '0';

function updateDisplay() {
    display.value = currentInput;
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        
        if (value === 'AC') {
            currentInput = '0';
        } else if (value === '=') {
            try {
                currentInput = eval(currentInput).toString();
            } catch {
                currentInput = 'Error';
            }
        } else {
            currentInput = currentInput === '0' ? value : currentInput + value;
        }
        
        updateDisplay();
    });
});

// Keyboard support
document.addEventListener('keydown', (e) => {
    if (/[0-9+\-*/.()]/.test(e.key)) {
        e.preventDefault();
        currentInput = currentInput === '0' ? e.key : currentInput + e.key;
        updateDisplay();
    } else if (e.key === 'Enter') {
        e.preventDefault();
        try {
            currentInput = eval(currentInput).toString();
            updateDisplay();
        } catch {
            currentInput = 'Error';
            updateDisplay();
        }
    } else if (e.key === 'Escape') {
        e.preventDefault();
        currentInput = '0';
        updateDisplay();
    }
});
