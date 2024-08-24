document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const isAlreadyOpen = button.classList.contains('open');
            
            // Close all buttons
            buttons.forEach(btn => {
                btn.classList.remove('open');
                btn.style.transform = btn.dataset.initialTransform;
            });

            if (!isAlreadyOpen) {
                // Open the clicked button
                button.classList.add('open');
                button.style.transform = "translate(-50%, -50%) scale(8)";
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "";
            }
        });

        // Store initial transform for reset purposes
        button.dataset.initialTransform = button.style.transform;

        button.addEventListener('mouseover', () => {
            // Move hovered button to center with larger scale
            button.style.zIndex = "3";
            button.style.transform = "translate(-50%, -50%) scale(3)";
        });

        button.addEventListener('mouseout', () => {
            if (!button.classList.contains('open')) {
                button.style.zIndex = "1";
                button.style.transform = button.dataset.initialTransform;
            }
        });
    });
});
