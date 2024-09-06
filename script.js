document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        // Store initial transform for reset purposes
        button.dataset.initialTransform = button.style.transform;

        // Handle opening/closing on mobile and desktop
        const toggleButton = (e) => {
            // Ignore if the tap/click is inside the content area to allow scrolling
            if (e.target.closest('.button-content')) {
                return;
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
                // Close other open buttons
                buttons.forEach(btn => {
                    btn.style.zIndex = "0";
                    btn.style.transform = btn.dataset.initialTransform;
                    btn.querySelector('.button-content').style.display = 'none';
                    btn.querySelector('.button-alt-title').style.display = 'none'; // Hide alt title
                    btn.classList.remove('open');
                });

                // Open the button
                button.style.zIndex = "1";
                button.style.transform = "translate(-50%, -50%) scale(9)";
                button.querySelector('.button-content').style.display = 'block';
                button.querySelector('.button-alt-title').style.display = 'block'; // Show alt title
                button.classList.add('open');
                document.body.style.overflow = "hidden";
            }
        };

        // Handle clicks and taps on the button
        button.addEventListener('click', toggleButton);

        // Mobile: Handle touchstart to simulate click
        button.addEventListener('touchstart', (e) => {
            e.preventDefault(); // Prevent touch from triggering unintended behavior
            toggleButton(e); // Simulate click behavior
        }, { passive: false }); // Set passive to false to allow preventDefault
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
