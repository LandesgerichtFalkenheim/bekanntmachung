document.getElementById("loginForm")?.addEventListener("submit", e => {
    e.preventDefault();

    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === "admin" && pass === "1234") {
        window.location.href = "dashboard.html";
    } else {
        alert("Falsche Zugangsdaten");
    }
});
