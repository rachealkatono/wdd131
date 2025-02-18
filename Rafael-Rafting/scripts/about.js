// Toggle the visibility of team member details
function toggleDetails(guideId) {
    const details = document.getElementById(guideId);
    details.style.display = details.style.display === 'block' ? 'none' : 'block';
}

// Hamburger menu logic
const hamburgerButton = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburgerButton && navMenu) {
    hamburgerButton.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}
