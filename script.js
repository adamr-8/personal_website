document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    const detailsTitle = document.getElementById('details-title');
    const detailsContent = document.getElementById('details-content');
    const brandingLogo = document.getElementById('branding-logo');
    
    // Function to reset to the branding logo
    const resetDetailsPanel = () => {
        detailsTitle.innerText = "Hover over a discipline";
        detailsContent.innerText = "Details will appear here.";
        brandingLogo.style.display = "block";
    };

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            // Reset z-index of all buttons and move them back to original position
            buttons.forEach(btn => {
                btn.style.zIndex = "0"; 
                btn.style.transform = btn.dataset.initialTransform; // Reset position of all buttons
            });

            // Move hovered button to center with a larger scale
            button.style.zIndex = "1"; 
            button.style.transform = "translate(-50%, -50%) scale(2.5)"; // Scale the hovered button

            // Hide branding logo and show details
            brandingLogo.style.display = "none";
            detailsTitle.innerText = button.innerText;
            detailsContent.innerHTML = button.getAttribute('data-info');
        });

        // Store initial transform for reset purposes
        button.dataset.initialTransform = button.style.transform;
    });

    // Reset to branding logo when mouse leaves the circle-container
    const circleContainer = document.querySelector('.circle-container');
    circleContainer.addEventListener('mouseleave', () => {
        resetDetailsPanel();
        buttons.forEach(button => {
            button.style.zIndex = "0";
            button.style.transform = button.dataset.initialTransform;
        });
    });

    // Initialize the details panel with branding logo
    resetDetailsPanel();
});
