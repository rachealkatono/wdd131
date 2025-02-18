document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("booking-form");

    // Autofill fields if data exists in localStorage
    document.getElementById("fullName").value = localStorage.getItem("fullName") || "";
    document.getElementById("email").value = localStorage.getItem("email") || "";
    document.getElementById("phone").value = localStorage.getItem("phone") || "";

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let fullName = document.getElementById("fullName").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let date = document.getElementById("date").value;

        // Validation
        if (fullName.length < 3) {
            alert("Full Name must be at least 3 characters.");
            return;
        }

        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            alert("Enter a valid email address.");
            return;
        }

        let phonePattern = /^[0-9]{10}$/;
        if (!phone.match(phonePattern)) {
            alert("Enter a valid 10-digit phone number.");
            return;
        }

        if (!date) {
            alert("Please select a preferred date.");
            return;
        }

        // Save details to localStorage
        localStorage.setItem("fullName", fullName);
        localStorage.setItem("email", email);
        localStorage.setItem("phone", phone);

        alert("Booking successful! We will contact you soon.");
        form.reset();
    });
});

// Hamburger menu logic
const hamburgerButton = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburgerButton && navMenu) {
    hamburgerButton.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}
