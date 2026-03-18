function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        localStorage.setItem("adminLoggedIn", "true");
        window.location.href = "admin.html";
    } else {
        alert("Wrong login");
    }
}
const loginButton = document.getElementById("login-btn")


loginButton.addEventListener("click", function() {
    login()
})