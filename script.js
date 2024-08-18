document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    const detailsTitle = document.getElementById('details-title');
    const detailsContent = document.getElementById('details-content');

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            // Reset all buttons
            buttons.forEach(btn => {
                btn.classList.remove('centered'); // Remove the centered class from all buttons
                btn.style.zIndex = "0"; 
                btn.style.transform = btn.dataset.initialTransform; // Reset position of all buttons
            });

            // Move the hovered button to the center and enlarge it
            button.classList.add('centered');
            button.style.transform = "translate(-50%, -50%)"; // Move directly to center

            // Update details panel
            detailsTitle.innerText = button.innerText;
            detailsContent.innerText = button.getAttribute('data-info');
        });
    });

    buttons.forEach(button => {
        // Store initial transform for reset purposes
        button.dataset.initialTransform = button.style.transform;
    });

    // Reset the centered button when hovering outside the circle-container
    document.querySelector('.circle-container').addEventListener('mouseleave', () => {
        buttons.forEach(button => {
            button.classList.remove('centered');
            button.style.transform = button.dataset.initialTransform;
            button.style.zIndex = "0";
        });
    });
});
