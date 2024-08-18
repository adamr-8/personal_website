document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    const detailsTitle = document.getElementById('details-title');
    const detailsContent = document.getElementById('details-content');
    const circleContainer = document.querySelector('.circle-container');
    const centerX = circleContainer.offsetWidth / 2;
    const centerY = circleContainer.offsetHeight / 2;

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            const rect = button.getBoundingClientRect();
            const containerRect = circleContainer.getBoundingClientRect();
            const buttonX = rect.left + rect.width / 2;
            const buttonY = rect.top + rect.height / 2;

            const deltaX = (containerRect.left + centerX) - buttonX;
            const deltaY = (containerRect.top + centerY) - buttonY;

            // Calculate the final position to move to the center
            const translateX = deltaX;
            const translateY = deltaY;

            // Reset all buttons
            buttons.forEach(btn => {
                btn.classList.remove('centered');
                btn.style.zIndex = "0";
                btn.style.transform = btn.dataset.initialTransform;
            });

            // Move the hovered button to the center and gradually increase its size
            button.classList.add('centered');
            button.style.zIndex = "10";
            button.style.transition = "transform 0.5s ease"; // Smooth transition
            button.style.transform = `translate(${translateX}px, ${translateY}px) scale(3)`; // Move to center and scale up

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
    circleContainer.addEventListener('mouseleave', () => {
        buttons.forEach(button => {
            button.classList.remove('centered');
            button.style.transform = button.dataset.initialTransform;
            button.style.zIndex = "0";
        });
    });
});
