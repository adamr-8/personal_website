document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    let expandedButton = null;

// Adjust hover behavior
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        // Show details panel with content
        const buttonId = button.id.toLowerCase();
        if (buttonDetails[buttonId]) {
            detailsTitle.innerText = buttonDetails[buttonId].title;
            detailsContent.innerHTML = buttonDetails[buttonId].content;
        } else {
            detailsTitle.innerText = button.innerText;
            detailsContent.innerText = button.getAttribute('data-info');
        }

        // Reset z-index and transform of all buttons
        buttons.forEach(btn => {
            btn.style.zIndex = "0";
            btn.style.transform = btn.dataset.initialTransform;
        });

        // Move hovered button to center with larger scale
        button.style.zIndex = "1";
        button.style.transform = "translate(-50%, -50%) scale(3)"; // Increased scale
    });

    // Store initial transform for reset purposes
    button.dataset.initialTransform = button.style.transform;
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
