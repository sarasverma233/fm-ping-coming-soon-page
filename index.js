const form = document.getElementById("emailForm");
const email = document.getElementById("email");
const warning = document.getElementById("warning");

const validateBtn = document
  .getElementById("validateBtn")
  .addEventListener("click", function (e) {
    e.preventDefault(); // to prevent default checking

    const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.value.match(emailformat)) {
      form.submit();
    } else {
      warning.innerText = "Please provide a valid email address";
      email.style.borderColor = "hsl(354, 100%, 66%)";
    }
  });
