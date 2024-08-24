document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button');
    const container = document.querySelector('.circle-container');

    buttons.forEach(button => {
        // Store the initial transformation state of each button
        button.dataset.initialTransform = button.style.transform;
        button.dataset.initialTransformStyle = button.style.transformStyle;

        button.addEventListener('click', function() {
            // Remove the 'open' class from all buttons except the clicked one
            buttons.forEach(btn => {
                if (btn !== button) {
                    btn.classList.remove('open');
                    btn.style.transform = btn.dataset.initialTransform; // Reset to initial position
                    btn.style.zIndex = 1; // Reset z-index
                }
            });

            // Toggle 'open' class on the clicked button
            if (button.classList.contains('open')) {
                button.classList.remove('open');
                button.style.transform = button.dataset.initialTransform; // Reset to initial position
                button.style.zIndex = 1; // Reset z-index
            } else {
                button.classList.add('open');
                button.style.transform = 'scale(3)'; // Adjust scaling as needed
                button.style.zIndex = 10; // Bring to the front
            }
        });

        button.addEventListener('mouseenter', function() {
            if (!button.classList.contains('open')) {
                button.style.transform = 'scale(3)';
                button.style.zIndex = 10; // Bring to the front
            }
        });

        button.addEventListener('mouseleave', function() {
            if (!button.classList.contains('open')) {
                button.style.transform = button.dataset.initialTransform; // Reset to initial position
                button.style.zIndex = 1; // Reset z-index
            }
        });
    });
});
