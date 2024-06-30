var body = document.body;
var toggle = document.getElementById('toggleMode');
var logoLight = document.getElementById('logoFor-light');
var logoDark = document.getElementById('logoFor-dark');

if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark-mode');
    toggle.classList.add('active');
}

toggle.addEventListener('click', function() {
    toggle.classList.toggle('active');
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'true');
    } else {
        localStorage.setItem('darkMode', 'false');
    }
});

// Get all the relevant elements
var mainPageSelector = document.getElementById('main_PageSelector');
var paymentsMenuBtn = document.getElementById('paymentsMenu_btn');
var transactions = document.getElementById('transactions');
var management = document.getElementById('management');
var additionalsPage = document.getElementById('additionals_page');

// Function to handle click events on menu items
function handleMenuClick(targetElement) {
    // Reset all menu items to default background color
    mainPageSelector.style.backgroundColor = '#ffffff';
    paymentsMenuBtn.style.backgroundColor = '#ffffff';
    transactions.style.backgroundColor = '#ffffff';
    management.style.backgroundColor = '#ffffff';
    additionalsPage.style.backgroundColor = '#ffffff';

    // Set the background color for the clicked element
    targetElement.style.backgroundColor = 'var(--button-color-01)';
}

// Add click event listeners to each menu item
mainPageSelector.addEventListener('click', function() {
    handleMenuClick(mainPageSelector);
});

paymentsMenuBtn.addEventListener('click', function() {
    handleMenuClick(paymentsMenuBtn);
});

transactions.addEventListener('click', function() {
    handleMenuClick(transactions);
});

management.addEventListener('click', function() {
    handleMenuClick(management);
});

additionalsPage.addEventListener('click', function() {
    handleMenuClick(additionalsPage);
});
