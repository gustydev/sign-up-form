const pass = document.querySelector('input#password');
const passConfirm = document.querySelector('input#password-confirm');
const passInputs = document.querySelectorAll("input[type='password']");
const createButton = document.querySelector("button[type='submit']");
const notMatch = document.querySelector('div.not-match');

createButton.addEventListener('click', (e) => {
    if (!(pass.value === passConfirm.value)) {
        e.preventDefault();
        notMatch.textContent = '* Passwords do not match.';
        passInputs.forEach((input) => {
            input.style = 'border-color: rgb(116, 0, 29);';
        })
    } else {
        notMatch.textContent = '';
    }
});

passInputs.forEach((input) => {
    input.addEventListener('input', () => {
        if (pass.value === passConfirm.value) {
            notMatch.textContent = '';
            passInputs.forEach((input) => {
                input.style = 'border-color: rgb(53, 53, 53);'
            })
        } else {
            notMatch.textContent = '* Passwords do not match.';
            passInputs.forEach((input) => {
                input.style = 'border-color: rgb(116, 0, 29);';
            })
        }
    })
})