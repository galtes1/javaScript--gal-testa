let isLogged = sessionStorage.getItem("isLogged");
if (isLogged != "true") {
 location.href = "../html/login.html";
}

let loggoutBtn = document.getElementById("loggoutBtn");
loggoutBtn.addEventListener("click", () => {
 sessionStorage.setItem("isLogged", null);
 location.href = "../html/login.html";
});
