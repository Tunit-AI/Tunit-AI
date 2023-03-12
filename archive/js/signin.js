function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".formMSG");

    messageElement.textContent = message;
    messageElement.classList.remove("formMSG-success", "formMSG-err");
    messageElement.classList.add(`formMSG-${type}`);
}

// setFormMessage(loginForm, "success", "Logging you in");

function setInputError(inputElement, message) {
    inputElement.classList.add("formInput-err");
    inputElement.parentElement.querySelector(".formInput-err-MSG").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("formInput-err");
    inputElement.parentElement.querySelector(".formInput-err-MSG").textContent = "";
}


document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const signupForm = document.querySelector("#signup");

    document.querySelector("#linkSignup").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form-Hidden");
        signupForm.classList.remove("form-Hidden");
    });
    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form-Hidden");
        signupForm.classList.add("form-Hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();
        // perform ajax/fetch login

        setFormMessage(loginForm, "err", "Invalid credentials provided")
    });

    document.querySelectorAll(".formInput").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupPassword" && e.target.value.length > 0 && e.target.value.length < 8) {
                setInputError(inputElement, "Password must be at least 8 characters in length");
            }
        });
        inputElement.addEventListener("input", e => {
            clearInputError(inputElement)
        });
    });
});