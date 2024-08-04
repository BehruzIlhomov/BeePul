var body = document.body;

// Get elements by class names
var menuLinks = document.querySelectorAll('.main_PageSelector, .paymentsMenu_btn, .transactions, .management');

function handleMenuClick(clickedLink) {
    // Get the parent div of the clicked link
    var parentDiv = clickedLink.parentElement.parentElement;

    // Reset background color for all parent divs
    menuLinks.forEach(link => {
        link.parentElement.parentElement.style.backgroundColor = '#ffffff';
    });

    // Set background color for the clicked parent div
    parentDiv.style.backgroundColor = 'var(--button-color-01)';
}

// Add event listeners to menu links
menuLinks.forEach(link => {
    link.addEventListener('click', function () {
        handleMenuClick(link);
    });
});

var toggleSidebar = document.querySelector('.toggleSidebar');
var sidebar = document.getElementById('sidebar');
var xSidebar = document.querySelector('.x_sidebar');

toggleSidebar.addEventListener('click', () => {
    sidebar.classList.add('active');
    body.classList.toggle('no-scroll');
    updateXSidebarDisplay();
});

function updateXSidebarDisplay() {
    if (sidebar.classList.contains('active')) {
        xSidebar.style.display = 'block';
    } else {
        xSidebar.style.display = 'none';
    }
}

updateXSidebarDisplay();

xSidebar.addEventListener('click', () => {
    sidebar.classList.remove('active');
});
