document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    const detailsTitle = document.getElementById('details-title');
    const detailsContent = document.getElementById('details-content');

    buttons.forEach(button => {
        // Store initial transform for reset purposes
        button.dataset.initialTransform = button.style.transform;

        button.addEventListener('mouseover', () => {
            // Reset z-index of all buttons and move them back to the original position
            buttons.forEach(btn => {
                btn.style.zIndex = "0"; 
                btn.style.transform = btn.dataset.initialTransform; // Reset position of all buttons
            });

            // Move hovered button to center with a larger scale
            button.style.zIndex = "1"; 
            button.style.transform = "translate(-50%, -50%) scale(1.25)"; // Adjusted scale value

            // Update details panel with content from the hovered button
            detailsTitle.innerText = button.innerText;
            detailsContent.innerText = button.getAttribute('data-info');
        });

        // Add touch event for mobile devices
        button.addEventListener('click', () => {
            // Reset z-index of all buttons and move them back to the original position
            buttons.forEach(btn => {
                btn.style.zInde
s