document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    let openButton = null;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (openButton && openButton !== button) {
                // Close the previously opened button
                openButton.classList.remove('open');
                openButton = null;
            }

            if (!button.classList.contains('open')) {
                button.classList.add('open');
                openButton = button;

                // Hide other buttons
                buttons.forEach(otherButton => {
                    if (otherButton !== button) {
                        otherButton.classList.add('hidden');
                    }
                });

            } else {
                button.classList.remove('open');
                openButton = null;

                // Show other buttons
                buttons.forEach(otherButton => {
                    otherButton.classList.remove('hidden');
                });
            }
        });
    });
});
