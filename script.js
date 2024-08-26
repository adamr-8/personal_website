document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        const buttonId = button.id;

        // Toggle open class on button click
        button.addEventListener('click', () => {
            const wasOpen = button.classList.contains('open');

            // Close all buttons
            buttons.forEach(btn => {
                btn.classList.remove('open');
                btn.style.zIndex = 1; // Reset z-index to default
            });

            if (!wasOpen) {
                // Open the clicked button
                button.classList.add('open');
                button.style.zIndex = 10; // Bring the open button to the front

                // Handle specific behavior based on button ID
                handleButtonClick(buttonId);
            }
        });

        // Store initial transform for reset purposes
        button.dataset.initialTransform = button.style.transform;

        button.addEventListener('mouseover', () => {
            if (button.classList.contains('open')) {
                // Reset button to initial state if already open
                button.style.transform = button.dataset.initialTransform;
            }
        });

        button.addEventListener('mouseleave', () => {
            if (!button.classList.contains('open')) {
                button.style.transform = button.dataset.initialTransform;
            }
        });
    });

    function handleButtonClick(buttonId) {
        // This function can be used to handle specific logic for each button
        console.log(`Button ${buttonId} clicked`);
        if (buttonId === 'traditional') {
            // Specific behavior for Traditional button
            populateContentForTraditional();
        }
        // Add additional conditions for other buttons if needed
    }

    function populateContentForTraditional() {
        // Populate content specifically for the Traditional button
        console.log("Populating content for Traditional Marketing");
        // Here you can add any additional logic for the content population
    }
});
