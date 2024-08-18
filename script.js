document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    const detailsTitle = document.getElementById('details-title');
    const detailsContent = document.getElementById('details-content');
    const brandingLogo = document.getElementById('branding-logo');

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            // Hide branding logo
            brandingLogo.style.display = 'none';

            // Update details panel with content from the hovered button
            detailsTitle.innerText = button.innerText;
            detailsContent.innerHTML = button.getAttribute('data-info');
        });

        button.addEventListener('mouseout', () => {
            // Reset branding logo
            brandingLogo.style.display = 'flex';
            detailsTitle.innerText = 'Hover over a discipline';
            detailsContent.innerText = 'Details will appear here.';
        });
    });

    // Reset buttons when mouse leaves the circle-container
    const circleContainer = document.querySelector('.circle-container');
    circleContainer.addEventListener('mouseleave', () => {
        buttons.forEach(button => {
            button.style.zIndex = "0";
            button.style.transform = button.dataset.initialTransform;
        });
    });
});
