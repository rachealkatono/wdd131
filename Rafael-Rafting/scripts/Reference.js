// 🔍 Search References Function
function searchReferences() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let table = document.getElementById("referencesTable");
    let rows = table.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {
        let text = rows[i].textContent.toLowerCase();
        rows[i].style.display = text.includes(input) ? "" : "none";
    }
}

// 📋 Copy Citation Function
function copyCitation(button) {
    let row = button.parentElement.parentElement;
    let citation = row.cells[0].textContent + " - " + row.cells[1].textContent;
    
    navigator.clipboard.writeText(citation).then(() => {
        alert("Citation copied: " + citation);
    });
}

// 🌙 Dark Mode Toggle
document.getElementById("darkModeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// Hamburger menu logic
const hamburgerButton = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburgerButton && navMenu) {
    hamburgerButton.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}
