document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    const contentBox = document.getElementById('content-box');
    const contentText = document.getElementById('content-text');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const content = getContent(button.id);
            contentText.innerText = content;
            contentBox.classList.add('visible');
            contentBox.classList.remove('hidden');
        });
    });

    function getContent(id) {
        switch(id) {
            case 'brand-management':
                return 'Details about Brand Management...';
            case 'abm':
                return 'Details about Account-Based Marketing...';
            case 'digital-marketing':
                return 'Details about Digital Marketing...';
            // Add cases for other buttons
            default:
                return 'Content not found.';
        }
    }
});
