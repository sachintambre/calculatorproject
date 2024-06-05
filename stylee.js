document.addEventListener("DOMContentLoaded", function() {
    const inputBox = document.getElementById('inputbox');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.innerText;

            if (value === 'AC') {
                inputBox.value = '';
            } else if (value === 'DEL') {
                inputBox.value = inputBox.value.slice(0, -1);
            } else if (value === '=') {
                try {
                    inputBox.value = eval(inputBox.value);
                } catch {
                    inputBox.value = 'Error';
                }
            } else {
                inputBox.value += value;
            }
        });
    });
});
