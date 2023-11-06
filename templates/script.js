function hideAllSections() {
    document.getElementById('home-section').style.display = 'none';
    document.getElementById('dashboard-section').style.display = 'none';
    document.getElementById('report-section').style.display = 'none';
    document.getElementById('contact-section').style.display = 'none';
}

document.getElementById('home-icon').addEventListener('click', function() {
    hideAllSections();
    document.getElementById('home-section').style.display = 'block';
});

document.getElementById('dashboard-icon').addEventListener('click', function() {
    hideAllSections();
    const dashboardSection = document.getElementById('dashboard-section');
    dashboardSection.style.display = 'block'; // forcefully set to 'block'
});


document.getElementById('report-icon').addEventListener('click', function() {
    hideAllSections();
    document.getElementById('report-section').style.display = 'block';
});

document.getElementById('contact-icon').addEventListener('click', function() {
    console.log('Contact icon clicked!');
    hideAllSections();
    document.getElementById('contact-section').style.display = 'block';
});

// Toggle the visibility of the logo based on the sidebar state
function toggleLogoVisibility() {
    const logo = document.querySelector('.logo-img');
    const sidebar = document.querySelector('.sidebar');
    if (sidebar.classList.contains('expand')) {
        logo.style.display = 'block';
    } else {
        logo.style.display = 'none';
    }
}

// Set initial visibility state of the logo
document.addEventListener('DOMContentLoaded', function() {
    toggleLogoVisibility();
});

// Add event listener to the menu button
const btn_menu = document.querySelector(".btn-menu");
const side_bar = document.querySelector(".sidebar");
btn_menu.addEventListener("click", function () {
    side_bar.classList.toggle("expand");
    changebtn();
    toggleLogoVisibility(); // Call the function to toggle the logo visibility
});

function changebtn() {
    if (side_bar.classList.contains("expand")) {
        btn_menu.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
        btn_menu.classList.replace("bx-menu-alt-right", "bx-menu");
    }
}
