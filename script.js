// Dark Mode Toggle Function
const toggleButton = document.getElementById('darkModeToggle');

// Check for existing dark mode preference in localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

// Event listener for button click
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Save the mode preference to localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});
