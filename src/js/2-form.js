let formData = { email: "", message: "" }


const inputField = document.querySelector("label input");
const textareaField = document.querySelector("label textarea");

const saved = localStorage.getItem("feedback-form-state");

if (saved) {
    const typed = JSON.parse(saved);
    inputField.value = typed.email;
    textareaField.value = typed.message;
}

const form = document.querySelector(".feedback-form");

form.addEventListener("submit", (event) => {
    if (formData.email.length == 0 || formData.message.length == 0) {
        alert("Fill please all fields");
    } else {
        console.log(formData);
        formData = { email: "", message: "" };
        localStorage.removeItem("feedback-form-state");
    }
});

form.addEventListener("input", (event) => {
    formData.email = inputField.value;
    formData.message = textareaField.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});