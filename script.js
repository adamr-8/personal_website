
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Toggle expansion on click
            if (!button.classList.contains('expanded')) {
                // Collapse any expanded button
                buttons.forEach(btn => btn.classList.remove('expanded'));

                // Expand the clicked button
                button.classList.add('expanded');
            } else {
                // Revert to original state
                button.classList.remove('expanded');
            }
        });
    });
});
