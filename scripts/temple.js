document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("last-modified-date").textContent = document.lastModified;

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show");

        // Toggle the symbol for the hamburger button
        menuToggle.textContent = navMenu.classList.contains("show") ? "✖" : "☰";
    });
});
