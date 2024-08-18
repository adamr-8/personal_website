document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    const detailsTitle = document.getElementById('details-title');
    const detailsContent = document.getElementById('details-content');

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            // Reset z-index of all buttons and move them back to original position
            buttons.forEach(btn => {
                btn.style.zIndex = "0"; 
                btn.style.transform = btn.dataset.initialTransform; // Reset position of all buttons
            });

            // Move hovered button to center with a larger scale
            button.style.zIndex = "1"; 
            button.style.transform = "translate(-50%, -50%) scale(2)"; // Increased scale value for larger size

            // Update details panel with content from the hovered button
            detailsTitle.innerText = button.innerText;
            detailsContent.innerText = button.getAttribute('data-info');
        });

        // Store initial transform for reset purposes
        button.dataset.initialTransform = button.style.transform;
    });

    // Optional: Reset the buttons when mouse leaves the circle-container
    const circleContainer = document.querySelector('.circle-container');
    circleContainer.addEventListener('mouseleave', () => {
        buttons.forEach(button => {
            button.style.zIndex = "0";
            button.style.transform = button.dataset.initialTransform;
        });
    });
});
