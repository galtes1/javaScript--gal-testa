let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", (event) => {
 event.preventDefault();
 console.log(passwordInput.value);
 console.log(emailInput.value);
 let users = JSON.parse(localStorage.getItem("users"));
 if (users) {
  for (let index = 0; index < users.length; index++) {
   if (
    users[index].email === emailInput.value &&
    users[index].password === passwordInput.value
   ) {
    sessionStorage.setItem("isLogged", true);
    location.href = "../html/welcome.html";
    break;
   }
  }
  alert("email or password invalid");
 }
});
