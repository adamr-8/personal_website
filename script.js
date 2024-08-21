document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Close any already expanded button
            buttons.forEach(btn => {
                if (btn.classList.contains('expand')) {
                    btn.classList.remove('expand');
                }
            });

            // Expand the clicked button
            expandButtonToCenter(button);
        });
    });

    // Function to reset the button's position after shrinking back
    function resetButtonPositions(button) {
        const originalTop = button.dataset.originalTop;
        const originalLeft = button.dataset.originalLeft;
        button.style.top = originalTop;
        button.style.left = originalLeft;
    }

    // Function to expand the button and move it to the center
    function expandButtonToCenter(button) {
        // Store the original position
        const rect = button.getBoundingClientRect();
        button.dataset.originalTop = button.style.top;
        button.dataset.originalLeft = button.style.left;

        // Set new position to center
        button.style.top = '50%';
        button.style.left = '50%';
        button.classList.add('expand');
    }
});
