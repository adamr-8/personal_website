document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    let expandedButton = null;

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            if (!expandedButton) { // Only animate if no button is expanded
                const buttonId = button.id.toLowerCase();
                button.style.zIndex = "1";
                button.style.transform = "translate(-50%, -50%) scale(3)"; // 300% scale
            }
        });

        button.addEventListener('click', () => {
            if (expandedButton) { // Close the expanded button
                expandedButton.style.transform = expandedButton.dataset.initialTransform;
                expandedButton.style.zIndex = "0";
                expandedButton = null;
            } else { // Expand the clicked button
                expandedButton = button;
                button.style.zIndex = "10";
                button.style.transform = "translate(-50%, -50%) scale(3)"; // 300% scale
            }
        });

        button.addEventListener('mouseleave', () => {
            if (!expandedButton) { // Only reset if no button is expanded
                button.style.zIndex = "0";
                button.style.transform = button.dataset.initialTransform;
            }
        });

        // Store initial transform for reset purposes
        button.dataset.initialTransform = button.style.transform;
    });
});
