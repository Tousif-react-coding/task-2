let string = "";
buttons = document.querySelectorAll(".btn");

function err() {
    const input = document.querySelector('.textarea');
    input.value = "Error";
}

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (event) => {
        const input = document.querySelector('.textarea');
        try {
            if (event.target.innerHTML == '=') {
                string = eval(string);
                input.value = string;
            } else if (event.target.innerHTML == 'C') {
                string = "";
                input.value = "";
            } else if (event.target.innerHTML == 'X') {
                string = string.slice(0, -1);
                input.value = string;
            } else if (event.target.innerHTML == 'π') {
                string += Math.PI;
                input.value = string;
            } else if (event.target.innerHTML == '√') {
                string = Math.sqrt(eval(string));
                input.value = string;
            } else if (event.target.innerHTML == 'M+') {
                memory += parseFloat(string);
                input.value = string;

            } else if (event.target.innerHTML == 'M-') {
                memory -= parseFloat(string);
                input.value = string;

            }
            else {
                string = string + event.target.innerHTML;
                input.value = string;
            }
        } catch (error) {
            alert('type error');
            err();
        }
    });
});
