const form = document.querySelector("form");
const eField = form.querySelector(".email");
const eInput = eField.querySelector("input");
const eErrorIcon = eField.querySelector("i");
const eErrorText = eField.querySelector(".txt-error");
const pField = form.querySelector(".pass");
const pInput = pField.querySelector("input");
const pErrorIcon = pField.querySelector("i");
const pErrorText = pField.querySelector(".txt-error");

let accounts = JSON.parse(localStorage.getItem("accounts"));

form.onsubmit = (e) => {
  e.preventDefault();

  accounts.map((value) => {
    if (eInput.value === "") {
      eErrorIcon.classList.add("errors");
      eErrorText.classList.add("errors");
      eInput.style.borderColor = "red";
      eErrorText.innerText = "Enter your email";
    } else if (!(eInput.value === value.email)) {
      eErrorIcon.classList.add("errors");
      eErrorText.classList.add("errors");
      eInput.style.borderColor = "red";
      eErrorText.innerText = "Enter the correct email";
    }
    if (pInput.value === "") {
      pErrorIcon.classList.add("errors");
      pErrorText.classList.add("errors");
      pInput.style.borderColor = "red";
      pErrorText.innerText = "Enter your password";
    } else if (!(pInput.value === value.password)) {
      pErrorIcon.classList.add("errors");
      pErrorText.classList.add("errors");
      pInput.style.borderColor = "red";
      pErrorText.innerText = "Enter the correct password";
    }

    if (eInput.value === value.email && pInput.value === value.password) {
      window.location.href = "./main.html";
    }
  });
};

eInput.onkeyup = () => {
  if (!(eInput.value === "")) {
    eErrorIcon.classList.remove("errors");
    eErrorText.classList.remove("errors");
    eInput.style.borderColor = "#bfb7b7";
  }
};
eInput.onkeydown = () => {
  if (eInput.value === "") {
    eErrorIcon.classList.add("errors");
    eErrorText.classList.add("errors");
    eInput.style.borderColor = "red";
  }
};

pInput.onkeyup = () => {
  if (!(pInput.value === "")) {
    pErrorIcon.classList.remove("errors");
    pErrorText.classList.remove("errors");
    pInput.style.borderColor = "#bfb7b7";
  }
};
pInput.onkeydown = () => {
  if (pInput.value === "") {
    pErrorIcon.classList.add("errors");
    pErrorText.classList.add("errors");
    pInput.style.borderColor = "red";
  }
};
