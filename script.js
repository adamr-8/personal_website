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

        // Handle click to toggle open/close (Desktop and Mobile)
        button.addEventListener('click', (e) => {
            // Ignore click inside content area to allow scrolling
            if (e.target.closest('.button-content')) {
                return; // Don't close the button if tapping inside content
            }

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
                button.style.transform = "translate(-50%, -50%) scale(9)";
                button.style.zIndex = "1";
                button.querySelector('.button-content').style.display = 'block';
                button.querySelector('.button-alt-title').style.display = 'block'; // Show alt title
                button.classList.add('open');
                document.body.style.overflow = "hidden";
            }
        });

        // Mobile: Use touchstart to open/close buttons without preventing default behavior
        button.addEventListener('touchstart', (e) => {
            // If the touch is inside the content, do nothing (allow scrolling)
            if (e.target.closest('.button-content')) {
                return;
            }
            // Otherwise, open/close the button
            button.click(); // Simulate the click event
        }, { passive: true });
    });

    // Close any open buttons when clicking outside the button content
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.button-content')) {
            buttons.forEach(button => {
                if (button.classList.contains('open')) {
                    button.style.transform = button.dataset.initialTransform;
                    button.querySelector('.button-content').style.display = 'none';
                    button.querySelector('.button-alt-title').style.display = 'none'; // Hide alt title
                    button.classList.remove('open');
                    document.body.style.overflow = "";
                }
            });
        }
    });
});
