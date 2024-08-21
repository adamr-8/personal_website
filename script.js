document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Check if the button is already expanded
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
        const originalTop = button.dataset.originalTop;
        const originalLeft = button.dataset.originalLeft;
        button.style.top = originalTop;
        button.style.left = originalLeft;
        button.style.transform = 'translate(-50%, -50%) scale(1)';
    }

    // Function to expand the button and move it to the center
    function expandButtonToCenter(button) {
        // Store the original position
        const rect = button.getBoundingClientRect();
        button.dataset.originalTop = button.style.top;
        button.dataset.originalLeft = button.style.left;

        // Set new position to center and scale it up
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        // Calculate the trajectory to create a 3D illusion
        const deltaX = centerX - rect.left - rect.width / 2;
        const deltaY = centerY - rect.top - rect.height / 2;

        button.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(10)`;
        button.style.transition = 'transform 1s ease-in-out';
        button.classList.add('expand');
    }
});
