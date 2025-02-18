document.addEventListener("DOMContentLoaded", () => {
    // Featured Tours Rotation
    const tours = [
        { img: 'images/rapid.webp', desc: '🌊 Conquer the wild rapids – if you dare! ' },
        { img: 'images/sunset.webp', desc: '🌅 Sunset paddles – chill vibes, epic views! ' },
        { img: 'images/extreme.webp', desc: '💥 Ultimate adrenaline rush – hold on tight! ' }
    ];
    let tourIndex = 0;
    const tourGrid = document.getElementById("tour-grid");
    function loadTours() {
        tourGrid.innerHTML = '';
        for (let i = 0; i < 3; i++) {
            const tour = tours[(tourIndex + i) % tours.length];
            tourGrid.innerHTML += `<div><img src="${tour.img}" alt=""><p>${tour.desc}</p></div>`;
        }
        tourIndex = (tourIndex + 1) % tours.length;
    }
    setInterval(loadTours, 3000);
    loadTours();
    
   // Testimonials Slider
   const testimonials = [
    {
        text: "Hands down, the best adventure of my life! The rapids were WILD, the guides were LEGENDS, and I left with stories to tell for years. Book it now – you won’t regret it!'",
        image: "images/client1.webp"
    },
    {
        text: "😂 'I screamed, I laughed, I nearly fell out of the boat—10/10 would do it all again! Rafael Rafting made me feel like an action hero!'",
        image: "images/client2.webp"
    },
    {
        text: "'If adventure had a middle name, it would be Rafael! These guys KNOW how to make every second unforgettable. Just book it already!'",
        image: "images/client3.webp"
    }
];


let testIndex = 0;

function updateTestimonial() {
    const testimonialText = document.getElementById("testimonial-text");
    const testimonialImage = document.getElementById("testimonial-image");

    testimonialText.innerText = testimonials[testIndex].text;
    testimonialImage.src = testimonials[testIndex].image;
    testimonialImage.alt = "Client testimonial image";

    testIndex = (testIndex + 1) % testimonials.length;
}

setInterval(updateTestimonial, 4000);
updateTestimonial();

    // Newsletter Validation
    document.getElementById("newsletter-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value;
        if (!email.includes("@")) {
            alert("Please enter a valid email.");
            return;
        }
        localStorage.setItem("subscribedEmail", email);
        alert("Thank you for subscribing!");
        document.getElementById("email").value = "";
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
