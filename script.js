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
            case 'social-media':
                return 'Details about Social Media...';
            case 'abm':
                return 'Details about ABM...';
            case 'digital-marketing':
                return 'Details about Digital Marketing...';
            case 'brand-management':
                return 'Details about Brand Management...';
            case 'traditional-marketing':
                return 'Details about Traditional Marketing...';
            case 'ad-buying':
                return 'Details about Ad Buying...';
            case 'event-marketing':
                return 'Details about Event Marketing...';
            case 'public-relations':
                return 'Details about Public Relations...';
            case 'market-research':
                return 'Details about Market Research...';
            case 'customer-loyalty':
                return 'Details about Customer Loyalty...';
            case 'marketing-technology':
                return 'Details about Marketing Technology...';
            case 'content-marketing':
                return 'Details about Content Marketing...';
            default:
                return 'Content not found.';
        }
    }
});
