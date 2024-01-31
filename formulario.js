const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#password-confirmation");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkForm();
});

email.addEventListener("blur" , () =>{
  checkInputEmail();
}
)
email.addEventListener("blur" , () =>{
  checkInputUsername();
}
)


function checkInputUsername() {
  const usernameValue = username.value;

  if (usernameValue === "") {
    errorInput(username, "Preencha o usuário.");
  } else {
    const formItem = username.parentElement;
    formItem.className = "form-content";
  }
}

function checkInputEmail() {
  const emailValue = email.value;

  if (emailValue === "") {
    errorInput(email, "O email é obrigatório.");
  } else {
    const formItem = email.parentElement;
    formItem.className = "form-content";
  }
}

function checkInputPassword() {
  const passwordValue = password.value;

  if (passwordValue === "") {
    errorInput(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 8) {
    errorInput(password, "A senha precisa ter no mínimo 8 caracteres.");
  } else {
    const formItem = password.parentElement;
    formItem.className = "form-content";
  }
}

function checkInputPasswordConfirmation() {
  const passwordValue = password.value;
  const confirmationPasswordValue = passwordConfirmation.value;

  if (confirmationPasswordValue === "") {
    errorInput(passwordConfirmation, "A confirmação de senha é obrigatória.");
  } else if (confirmationPasswordValue !== passwordValue) {
    errorInput(passwordConfirmation, "As senhas não são iguais.");
  } else {
    const formItem = passwordConfirmation.parentElement;
    formItem.className = "form-content";
  }
}



function checkForm() {
  checkInputUsername();
  checkInputEmail();
  checkInputPassword(); 
  checkInputPasswordConfirmation();

  const formItems = form.querySelectorAll(".form-content");

  const isValid = [...formItems].every((item) => {
    return item.className === "form-content";
  });

  if (isValid) {
    alert("Cadastrado com sucesso!");
  } else {
    alert("Preencha todos os campos");
  }
}

function errorInput(input, message) {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a");

  textMessage.innerText = message;


  formItem.className = "form-content error";
}
