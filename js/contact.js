const form = document.querySelector("#contactForm");
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const formMessage = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

form.addEventListener("submit", validateForm);
form.addEventListener("submit", showSuccessMessage);

/*Functions */

/*Validate form */
function validateForm(event) {
  event.preventDefault();

  if (checkLength(fullName.value, 0) === false) {
    fullNameError.style.display = "block";
  } else {
    fullNameError.style.display = "none";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(formMessage.value, 0) === false) {
    messageError.style.display = "block";
  } else {
    messageError.style.display = "none";
  }
}

/*Check length */
function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

/*Validate email */
function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

/*Success message */

function showSuccessMessage() {
  if (
    checkLength(fullName.value, 0) === true &&
    checkLength(formMessage.value, 0) === true &&
    validateEmail(email.value) === true
  ) {
    document.querySelector(".success-message").style.display = "block";
  }
}

/*Reset inputs */

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#fullName").value = "";
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#message").value = "";
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#email").value = "";
});

/*Product image gallery*/
