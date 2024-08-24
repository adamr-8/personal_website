// script.js

// Function to handle button click
function handleButtonClick(event) {
    const clickedButton = event.currentTarget;
    const isOpen = clickedButton.classList.contains('open');

    // Close all other buttons
    document.querySelectorAll('.button').forEach(button => {
        button.classList.remove('open');
        button.style.transform = '';  // Reset transform
        button.querySelector('.button-content').style.display = 'none'; // Hide content
    });

    // Toggle the clicked button
    if (!isOpen) {
        clickedButton.classList.add('open');
        clickedButton.style.transform = 'scale(3)'; // Ensure it scales correctly
        clickedButton.querySelector('.button-content').style.display = 'block'; // Show content
    }
}

// Apply the click event to each button
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

// Function to ensure content is loaded only after expansion
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('transitionend', (event) => {
        if (button.classList.contains('open')) {
            button.querySelector('.button-content').style.display = 'block';
        } else {
            button.querySelector('.button-content').style.display = 'none';
        }
    });
});
