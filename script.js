document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            buttons.forEach(btn => {
                btn.style.zIndex = "0";
                btn.style.transform = btn.dataset.initialTransform;
                btn.querySelector('.button-content').style.display = 'none';
                btn.querySelector('.button-content').style.pointerEvents = 'none';
            });

            if (window.innerWidth > 768) { // Desktop behavior
                button.style.zIndex = "1";
                button.style.transform = "translate(-50%, -50%) scale(8)";
                button.querySelector('.button-content').style.display = 'block';
                button.querySelector('.button-content').style.pointerEvents = 'auto';
            }
        });

        button.dataset.initialTransform = button.style.transform;

        button.addEventListener('click', () => {
            // Close the button when clicking anywhere inside the button, including on the text
            if (button.style.transform.includes('scale(8)') || button.style.transform.includes('scale(12)')) {
                button.style.transform = button.dataset.initialTransform;
                document.body.style.overflow = "hidden";
                button.querySelector('.button-content').style.display = 'none';
                button.querySelector('.button-content').style.pointerEvents = 'none';
            } else {
                if (window.innerWidth <= 768) {
                    button.style.transform = "translate(-50%, -50%) scale(12)";
                } else {
                    button.style.transform = "translate(-50%, -50%) scale(8)";
                }
                document.body.style.overflow = "hidden";
                button.querySelector('.button-content').style.display = 'block';
                button.querySelector('.button-content').style.pointerEvents = 'auto';
            }
        });

        if (window.innerWidth <= 768) {
            button.addEventListener('touchstart', (e) => {
                e.preventDefault();
                button.click();
            }, { passive: false });
        }
    });

    window.addEventListener('touchmove', (e) => {
        if (document.body.style.overflow === 'hidden') {
            e.preventDefault();
        }
    }, { passive: false });

    document.addEventListener('click', (e) => {
        const isAnyButtonEnlarged = [...buttons].some(button => 
            button.style.transform.includes('scale(8)') || button.style.transform.includes('scale(12)')
        );
        if (!isAnyButtonEnlarged) {
            document.body.style.overflow = "";
        }
    });
});
