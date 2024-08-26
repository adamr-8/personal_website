document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    const detailsTitle = document.getElementById('details-title');
    const detailsContent = document.getElementById('details-content');

    buttons.forEach(button => {
        // Store initial transform for reset purposes
        button.dataset.initialTransform = button.style.transform;

        // Handle hover to open button (Desktop Only)
        button.addEventListener('mouseover', () => {
            if (window.innerWidth > 768) { // Desktop behavior
                buttons.forEach(btn => {
                    btn.style.zIndex = "0";
                    btn.style.transform = btn.dataset.initialTransform;
                    btn.querySelector('.button-content').style.display = 'none';
                    btn.querySelector('.button-content').style.pointerEvents = 'none';
                });
                button.style.zIndex = "1";
                button.style.transform = "translate(-50%, -50%) scale(8)";
                button.querySelector('.button-content').style.display = 'block';
                button.querySelector('.button-content').style.pointerEvents = 'auto';
            }
        });

        // Handle click to toggle open/close
        button.addEventListener('click', (e) => {
            e.stopPropagation(); // Ensure the event doesn't propagate beyond the button

            // Check if button is already enlarged
            const isOpen = button.style.transform.includes('scale(8)') || button.style.transform.includes('scale(12)');
            if (isOpen) {
                // Close the button
                button.style.transform = button.dataset.initialTransform;
                button.querySelector('.button-content').style.display = 'none';
                document.body.style.overflow = "";
            } else {
                // Open the button
                buttons.forEach(btn => {
                    btn.style.zIndex = "0";
                    btn.style.transform = btn.dataset.initialTransform;
                    btn.querySelector('.button-content').style.display = 'none';
                    btn.querySelector('.button-content').style.pointerEvents = 'none';
                });
                button.style.transform = window.innerWidth <= 768 ? "translate(-50%, -50%) scale(12)" : "translate(-50%, -50%) scale(8)";
                button.style.zIndex = "1";
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

    // Handle click outside buttons to close any open button
    document.addEventListener('click', () => {
        buttons.forEach(button => {
            if (button.style.transform.includes('scale(8)') || button.style.transform.includes('scale(12)')) {
                button.style.transform = button.dataset.initialTransform;
                button.querySelector('.button-content').style.display = 'none';
                document.body.style.overflow = "";
            }
        });
    });
});
