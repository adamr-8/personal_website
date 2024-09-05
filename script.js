// Function to toggle button open and close
document.querySelectorAll('.button').forEach(function(button) {
    button.addEventListener('click', function() {
        if (this.classList.contains('open')) {
            this.classList.remove('open'); // Close button if already open
        } else {
            document.querySelectorAll('.button').forEach(function(btn) {
                btn.classList.remove('open'); // Close other open buttons
            });
            this.classList.add('open'); // Open the clicked button
        }
    });
});

// Close button click handler
document.querySelectorAll('.close-btn').forEach(function(btn) {
    btn.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the button from triggering open/close
        const openButton = this.closest('.button');
        openButton.classList.remove('open');
    });
});
