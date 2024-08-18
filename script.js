document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    const detailsTitle = document.getElementById('details-title');
    const detailsContent = document.getElementById('details-content');
    const brandingLogo = document.getElementById('branding-logo');

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            // Reset branding logo visibility
            brandingLogo.style.display = 'none';

            // Reset z-index of all buttons and move them back to original position
            buttons.forEach(btn => {
                btn.classList.remove('centered');
            });

            // Move hovered button to center with a larger scale
            button.classList.add('centered');

            // Update details panel with content from the hovered button
            detailsTitle.innerText = button.innerText;
            detailsContent.innerHTML = button.getAttribute('data-info');
        });

        // Store initial transform for reset purposes
        button.dataset.initialTransform = button.style.transform;
    });

    // Optional: Reset the buttons when mouse leaves the circle-container
    const circleContainer = document.querySelector('.circle-container');
    circleContainer.addEventListener('mouseleave', () => {
        buttons.forEach(button => {
            button.classList.remove('centered');
        });

        // Show branding logo when not hovering over any button
        brandingLogo.style.display = 'block';

        // Reset details panel
        detailsTitle.innerText = 'Hover over a discipline';
        detailsContent.innerText = 'Details will appear here.';
    });
});
