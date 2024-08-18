document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    const detailsTitle = document.getElementById('details-title');
    const detailsContent = document.getElementById('details-content');
    const brandingLogo = document.getElementById('branding-logo');

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            // Hide branding logo when hovering over a button
            brandingLogo.style.display = 'none';

            // Show details panel with content
            detailsTitle.innerText = button.innerText;
            detailsContent.innerText = button.getAttribute('data-info');

            // Reset z-index and transform of all buttons
            buttons.forEach(btn => {
                btn.style.zIndex = "0";
                btn.style.transform = btn.dataset.initialTransform;
            });

            // Move hovered button to center with larger scale
            button.style.zIndex = "1";
            button.style.transform = "translate(-50%, -50%) scale(2.5)";
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

        // Show branding logo when not hovering over a button
        brandingLogo.style.display = 'flex';
        detailsTitle.innerText = 'Hover over a discipline';
        detailsContent.innerText = 'Details will appear here.';
    });
});
