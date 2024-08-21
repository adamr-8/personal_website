document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('expand')) {
                buttons.forEach(btn => {
                    btn.classList.remove('hidden');
                    btn.classList.remove('expand');
                    resetButtonPositions(btn);
                });
            } else {
                buttons.forEach(btn => {
                    if (btn !== button) {
                        btn.classList.add('hidden');
                    }
                });
                expandButtonToCenter(button);
            }
        });
    });

    function resetButtonPositions(button) {
        button.style.transform = '';
        button.style.transition = 'transform 0.6s ease-in-out';
    }

    function expandButtonToCenter(button) {
        button.style.transform = 'translate(-50%, -50%) scale(6)';
        button.style.transition = 'transform 0.6s ease-in-out';
        button.classList.add('expand');
    }
});
