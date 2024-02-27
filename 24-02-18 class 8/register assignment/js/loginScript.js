let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let loginBtn = document.getElementById("btn");

loginBtn.addEventListener("click", (emailInput, passwordInput) => {
  if (emailInput.vlaue === localStorage.user.email) {
    if (passwordInput.value === localStorage.users.user.password) {
      console.log("success");
      //alert("sign in successful!");
      //window.location = "welcome.html";
    } else {
      alert("password is incorrect");
    }
  } else {
    alert("email not found");
  }
});
