document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Check if button is already expanded
            if (button.classList.contains('expand')) {
                // Shrink the button back to its original size and position, and show all buttons
                buttons.forEach(btn => {
                    btn.classList.remove('hidden');
                });
                button.classList.remove('expand');
                resetButtonPositions(button);
            } else {
                // Hide all other buttons and expand the clicked button
                buttons.forEach(btn => {
                    if (btn !== button) {
                        btn.classList.add('hidden');
                    }
                });
                expandButtonToCenter(button);
            }
        });
    });

    // Function to reset the button's position after shrinking back
    function resetButtonPositions(button) {
        button.style.top = button.dataset.originalTop;
        button.style.left = button.dataset.originalLeft;
        button.style.transform = 'translate(-50%, -50%)';
    }

    // Function to expand the button and move it to the center
    function expandButtonToCenter(button) {
        // Store the original position
        if (!button.dataset.originalTop) {
            const rect = button.getBoundingClientRect();
            button.dataset.originalTop = button.style.top;
            button.dataset.originalLeft = button.style.left;
        }

        // Set new position to center
        button.style.top = '50%';
        button.style.left = '50%';
        button.style.transform = 'translate(-50%, -50%) scale(3)';
        button.classList.add('expand');
    }
});
