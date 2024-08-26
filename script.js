document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.button');
    let activeButton = null;

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (activeButton && activeButton !== button) {
                closeButton(activeButton);
            }
            if (button !== activeButton) {
                openButton(button);
                activeButton = button;
            } else {
                closeButton(button);
                activeButton = null;
            }
        });

        button.addEventListener('mouseover', () => {
            if (!activeButton) {
                button.classList.add('hover');
            }
        });

        button.addEventListener('mouseout', () => {
            if (!activeButton) {
                button.classList.remove('hover');
            }
        });
    });

    function openButton(button) {
        button.classList.add('open');
        button.style.transform = 'scale(3)';
        button.style.zIndex = '10';
        setTimeout(() => {
            const contentDiv = button.querySelector('.button-content');
            if (contentDiv) {
                contentDiv.style.display = 'block';
            }
        }, 300); // Delay to show content after button is fully opened
    }

    function closeButton(button) {
        const contentDiv = button.querySelector('.button-content');
        if (contentDiv) {
            contentDiv.style.display = 'none';
        }
        button.classList.remove('open');
        button.style.transform = '';
        button.style.zIndex = '';
    }
});
