document.addEventListener("DOMContentLoaded", () => {
    // === 🌊 TRIP DATA (Stored in localStorage for quick updates) ===
    const trips = [
        {
            id: 1, name: "White Water Thrill", location: "Nile River, Jinja",
            duration: "3 Days", price: "$250", difficulty: "Expert",
            image: "https://images.pexels.com/photos/5543358/pexels-photo-5543358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
            description: "Extreme rapids and high-adrenaline adventure!"
        },
        {
            id: 2, name: "Sunset Paddle", location: "Lake Victoria",
            duration: "1 Day", price: "$100", difficulty: "Beginner",
            image: "https://images.unsplash.com/photo-1725434157173-317f5ec88a00?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
            description: "Relaxing trip with a beautiful sunset view."
        },
        {
            id: 3, name: "Jungle Rapids", location: "Murchison Falls",
            duration: "2 Days", price: "$180", difficulty: "Intermediate",
            image: "https://images.pexels.com/photos/14284537/pexels-photo-14284537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
            description: "Navigate lush jungle rapids and enjoy scenic wildlife."
        },
        {
            id: 4, name: "River of Dreams", location: "Source of the Nile",
            duration: "4 Days", price: "$300", difficulty: "Intermediate",
            image: "https://images.pexels.com/photos/30530472/pexels-photo-30530472/free-photo-of-scenic-autumn-river-landscape-in-ohio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
            description: "A serene yet thrilling adventure through the Nile's source."
        },
        {
            id: 5, name: "Family Fun Adventure", location: "Lake Bunyonyi",
            duration: "2 Days", price: "$150", difficulty: "Beginner",
            image: "https://images.pexels.com/photos/34524/amusement-park-europa-park-boot-park.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
            description: "Gentle rapids ideal for families with children."
        },
        {
            id: 6, name: "Mountain Rapids Escape", location: "Rwenzori Mountains",
            duration: "3 Days", price: "$220", difficulty: "Advanced",
            image: "https://images.pexels.com/photos/27927862/pexels-photo-27927862/free-photo-of-the-bridge.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
            description: "Tackle challenging rapids in the breathtaking Rwenzori mountains."
        },
        {
            id: 7, name: "Waterfall Adventure", location: "Sipi Falls",
            duration: "1 Day", price: "$120", difficulty: "Intermediate",
            image: "https://images.pexels.com/photos/2025306/pexels-photo-2025306.jpeg", 
            description: "Raft past stunning waterfalls and enjoy the natural beauty."
        },
        {
            id: 8, name: "Cultural River Journey", location: "Bujagali Falls",
            duration: "2 Days", price: "$170", difficulty: "Beginner",
            image: "https://images.pexels.com/photos/2310876/pexels-photo-2310876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
            description: "Immerse yourself in local culture while navigating calm waters."
        },
        {
            id: 9, name: "Extreme Rapids Challenge", location: "Kaliro River",
            duration: "3 Days", price: "$275", difficulty: "Expert",
            image: "https://images.pexels.com/photos/1761282/pexels-photo-1761282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
            description: "For the bold, conquer the wildest rapids in the region!"
        },
        {
            id: 10, name: "Tropical Rapids Adventure", location: "Ssese Islands",
            duration: "4 Days", price: "$280", difficulty: "Intermediate",
            image: "https://images.pexels.com/photos/3748650/pexels-photo-3748650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
            description: "Experience both thrilling rapids and tranquil tropical landscapes."
        },
        {
            id: 11, name: "Safari River Adventure", location: "Queen Elizabeth National Park",
            duration: "5 Days", price: "$350", difficulty: "Advanced",
            image: "https://images.pexels.com/photos/51318/alligator-american-alligator-gator-dangerous-51318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
            description: "Combine rafting with wildlife sightings on this one-of-a-kind safari experience."
        },
        {
            id: 12, name: "Moonlit Rapids Escape", location: "Kidepo Valley",
            duration: "2 Days", price: "$200", difficulty: "Intermediate",
            image: "https://images.pexels.com/photos/30666404/pexels-photo-30666404/free-photo-of-dynamic-ocean-waves-captured-from-above.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
            description: "A unique rafting experience under the moonlight in the wild Kidepo Valley."
        }
    ];
    
    localStorage.setItem("trips", JSON.stringify(trips));

    // === 🏕️ LOAD TRIPS INTO GRID ===
    const tripGrid = document.getElementById("trip-grid");
    
    function loadTrips(filter = "", searchQuery = "") {
        tripGrid.innerHTML = ""; // Clear grid before adding new content
        const filteredTrips = trips.filter(trip => {
            const matchDifficulty = filter === "" || trip.difficulty === filter;
            const matchSearch = searchQuery === "" || trip.name.toLowerCase().includes(searchQuery.toLowerCase());
            return matchDifficulty && matchSearch;
        });

        if (filteredTrips.length === 0) {
            tripGrid.innerHTML = `<p class="no-results">🚫 No trips match your criteria. Try another filter!</p>`;
            return;
        }

        filteredTrips.forEach(trip => {
            tripGrid.innerHTML += `
                <div class="trip-card">
                    <img src="${trip.image}" alt="${trip.name}" loading="lazy">
                    <h3>${trip.name}</h3>
                    <p><strong>Location:</strong> ${trip.location}</p>
                    <p><strong>Duration:</strong> ${trip.duration}</p>
                    <p><strong>Price:</strong> ${trip.price}</p>
                        <p>${trip.description}</p>
                        <a href="booking.html" class="book-btn">Book Now</a>
                    </div>
                </div>
            `;
        });

        attachEventListeners();
    }
    loadTrips(); // Load all trips initially

    // === 🔍 FILTERING & SEARCH FUNCTIONALITY ===
    const difficultyFilter = document.getElementById("difficulty-filter");
    const searchBar = document.getElementById("trip-search");

    difficultyFilter.addEventListener("change", () => {
        loadTrips(difficultyFilter.value, searchBar.value);
    });

    searchBar.addEventListener("input", () => {
        loadTrips(difficultyFilter.value, searchBar.value);
    });

    // === 🔄 ATTACH EVENT LISTENERS FOR DETAILS TOGGLE ===
    function attachEventListeners() {
        document.querySelectorAll(".details-btn").forEach(button => {
            button.addEventListener("click", (event) => {
                const tripId = event.target.dataset.id;
                const detailsDiv = document.getElementById(`details-${tripId}`);
                detailsDiv.classList.toggle("hidden");
                event.target.textContent = detailsDiv.classList.contains("hidden") ? "Learn More" : "Hide Details";
            });
        });
    }

    // === 📊 POPULATE TRIP TABLE ===
    const tripTableBody = document.getElementById("trip-table-body");

    function loadTripTable() {
        tripTableBody.innerHTML = "";
        trips.forEach(trip => {
            tripTableBody.innerHTML += `
                <tr>
                    <td>${trip.name}</td>
                    <td>${trip.duration}</td>
                    <td>${trip.difficulty}</td>
                    <td>${trip.price}</td>
                </tr>
            `;
        });
    }
    loadTripTable();
});

// Hamburger menu logic
const hamburgerButton = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburgerButton && navMenu) {
    hamburgerButton.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}
