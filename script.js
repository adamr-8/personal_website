document.querySelectorAll('.circle-button').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelector('.circle-button.active')?.classList.remove('active');
        this.classList.add('active');

        // Move clicked button to center
        this.style.transform = 'translate(-50%, -50%) scale(3)';
        this.style.zIndex = '10';

        // Move other buttons back to their original positions
        document.querySelectorAll('.circle-button').forEach(otherButton => {
            if (otherButton !== this) {
                otherButton.style.transform = '';
                otherButton.style.zIndex = '1';
            }
        });

        // Display corresponding content
        const contentId = this.getAttribute('id') + '-content';
        document.querySelector('.content.active')?.classList.remove('active');
        document.getElementById(contentId)?.classList.add('active');
    });
});
