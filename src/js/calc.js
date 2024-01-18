document.addEventListener('DOMContentLoaded', function () {
    const math = window.electron.math;
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('dark');
    });

    // Calculator

    // 2nd button

    const secondElements = document.getElementsByClassName('disappear-2nd');
    const thirdElements = document.getElementsByClassName('disappear-3rd');
    const secondBtn = document.getElementById('secondBtn');

    secondBtn.addEventListener('click', function() {
        for (var i = 0; i < secondElements.length; i++) {
            secondElements[i].classList.toggle('hidden');
        }
        for (var i = 0; i < thirdElements.length; i++) {
            thirdElements[i].classList.toggle('hidden');
        }
    });

    // Operations

    const result = document.getElementById('result');
    const equalsBtn = document.getElementById('equalsBtn');
    const buttons = document.querySelectorAll('.grid button[id*="Btn"]');
    let num1 = '';
    let num2 = '';
    let operator = '';
    let firstZero = false;

    document.querySelectorAll('.calc-buttons-1, .calc-buttons-2').forEach(button => {
        button.addEventListener('click', () => {
            if (button.id === 'clearBtn') {
                result.value = '0';
                return;
            } else if (button.id === 'backspaceBtn') {
                result.value = result.value.slice(0, -1);

                if (result.value === '') result.value = '0';
            } else {
                if (isOperator(button.getAttribute("data-value"))) {
                    var operator = button.getAttribute('data-value');
                    result.value += operator;
                } else {
                    if (result.value === '0') {
                        result.value = '';
                    }
                    result.value += button.textContent;
                }
            }
        });
    });

    equalsBtn.addEventListener('click', () => {
        calculate(result.value);
        console.log("Equals clicked!");
    });
    function isOperator(value) {
        return ['+', '-', '*', '/'].includes(value);
    }
    function calculate(value) {
        result.value = math.evaluate(value);
    }

});