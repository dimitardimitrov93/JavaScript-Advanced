function validate() {
    const inputElement = document.getElementById('email');
    const emailValidatorRegEx = /^[a-z]+@[a-z]+[\.][a-z]+$/;

    inputElement.addEventListener('change', function(e) {
        const emailForValidation = inputElement.value;
        let isValidEmail = emailValidatorRegEx.test(emailForValidation);

        if (isValidEmail) {
            inputElement.classList.remove('error');
        } else {
            inputElement.classList.add('error');
        }
    });
}