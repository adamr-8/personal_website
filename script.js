document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Check if button is already expanded
            if (button.classList.contains('expanded')) {
                // Shrink the button back and show all buttons
                buttons.forEach(btn => {
                    btn.classList.remove('hidden');
                });
                button.classList.remove('expanded');
            } else {
                // Hide all other buttons and expand the clicked button
                buttons.forEach(btn => {
                    if (btn !== button) {
                        btn.classList.add('hidden');
                    }
                });
                button.classList.add('expanded');
            }
        });
    });
});
