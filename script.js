document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        // Handle hover to open button
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

        // Handle click to toggle open/close
        button.addEventListener('click', (e) => {
            // Prevent the click from closing the button if it's already open
            e.stopPropagation();

            if (button.style.transform.includes('scale(8)') || button.style.transform.includes('scale(12)')) {
                button.style.transform = button.dataset.initialTransform;
                button.querySelector('.button-content').style.display = 'none';
                button.querySelector('.button-content').style.pointerEvents = 'none';
                document.body.style.overflow = "";
            } else {
                if (window.innerWidth <= 768) {
                    button.style.transform = "translate(-50%, -50%) scale(12)";
                } else {
                    button.style.transform = "translate(-50%, -50%) scale(8)";
                }
                button.querySelector('.button-content').style.display = 'block';
                button.querySelector('.button-content').style.pointerEvents = 'auto';
                document.body.style.overflow = "hidden";
            }
        });

        if (window.innerWidth <= 768) {
            button.addEventListener('touchstart', (e) => {
                e.preventDefault();
                button.click();
            }, { passive: false });
        }
    });

    // Handle click anywhere on the document to close any open button
    document.addEventListener('click', () => {
        buttons.forEach(button => {
            if (button.style.transform.includes('scale(8)') || button.style.transform.includes('scale(12)')) {
                button.style.transform = button.dataset.initialTransform;
                button.querySelector('.button-content').style.display = 'none';
                button.querySelector('.button-content').style.pointerEvents = 'none';
                document.body.style.overflow = "";
            }
        });
    });
});
