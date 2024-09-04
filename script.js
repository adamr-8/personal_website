document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');

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
                    btn.querySelector('.button-alt-title').style.display = 'none'; // Hide alt title
                    btn.classList.remove('open'); // Remove the open class when closing
                });
                button.style.zIndex = "1";
                button.style.transform = "translate(-50%, -50%) scale(9)"; // Slightly larger scale for opened button
                button.querySelector('.button-content').style.display = 'block';
                button.querySelector('.button-alt-title').style.display = 'block'; // Show alt title
                button.classList.add('open'); // Add the open class when opening
            }
        });

        // Handle click to toggle open/close
        button.addEventListener('click', (e) => {
            e.stopPropagation();

            const isOpen = button.classList.contains('open');
            if (isOpen) {
                // Close the button
                button.style.transform = button.dataset.initialTransform;
                button.querySelector('.button-content').style.display = 'none';
                button.querySelector('.button-alt-title').style.display = 'none'; // Hide alt title
                button.classList.remove('open');
                document.body.style.overflow = "";
            } else {
                // Open the button
                buttons.forEach(btn => {
                    btn.style.zIndex = "0";
                    btn.style.transform = btn.dataset.initialTransform;
                    btn.querySelector('.button-content').style.display = 'none';
                    btn.querySelector('.button-alt-title').style.display = 'none'; // Hide alt title
                    btn.classList.remove('open');
                });
                button.style.transform = window.innerWidth <= 768 ? "translate(-50%, -50%) scale(13)" : "translate(-50%, -50%) scale(9)";
                button.style.zIndex = "1";
                button.querySelector('.button-content').style.display = 'block';
                button.querySelector('.button-alt-title').style.display = 'block'; // Show alt title
                button.classList.add('open');
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

    document.addEventListener('click', () => {
        buttons.forEach(button => {
            if (button.classList.contains('open')) {
                button.style.transform = button.dataset.initialTransform;
                button.querySelector('.button-content').style.display = 'none';
                button.querySelector('.button-alt-title').style.display = 'none'; // Hide alt title
                button.classList.remove('open');
                document.body.style.overflow = "";
            }
        });
    });
});
