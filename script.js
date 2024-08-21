const buttons = document.querySelectorAll('.circle-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => {
            if (btn !== button) {
                btn.style.transform = 'scale(0)'; // Hide other buttons
            }
        });
        button.style.transform = 'scale(5)'; // Enlarge clicked button
    });

    button.addEventListener('transitionend', () => {
        buttons.forEach(btn => {
            if (btn !== button) {
                btn.style.transform = ''; // Reset other buttons
            }
        });
    });
});
