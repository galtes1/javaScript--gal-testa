let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let firstNameInput = document.getElementById("firstName");
let lastNameInput = document.getElementById("lastName");

let registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let user = {
    email: emailInput.value,
    password: passwordInput.value,
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
  };
  let users = JSON.parse(localStorage.getItem("users"));

  if (users) {
    for (let index = 0; index < users.length; index++) {
      if (users[index].email == user.email) {
        alert("email already exists");
        return;
      }
    }
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  } else {
    localStorage.setItem("users", JSON.stringify([user]));
  }
});
