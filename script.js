document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            // Reset z-index and transform of all buttons
            buttons.forEach(btn => {
                btn.style.zIndex = "0";
                btn.style.transform = btn.dataset.initialTransform;
            });

            // Move hovered button to center with larger scale
            if (window.innerWidth > 768) { // Desktop behavior
                button.style.zIndex = "1";
                button.style.transform = "translate(-50%, -50%) scale(8)";
            }

            // Ensure content container visibility
            button.classList.add('open');
        });

        // Store initial transform for reset purposes
        button.dataset.initialTransform = button.style.transform;

        button.addEventListener('mouseout', () => {
            // Close the content container on mouse out
            button.classList.remove('open');
        });
    });
});
