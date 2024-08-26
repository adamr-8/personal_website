document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    const detailsTitle = document.getElementById('details-title');
    const detailsContent = document.getElementById('details-content');

    // Store details for each button
    const buttonDetails = {
        "traditional": { 
            title: "Traditional Marketing", 
            content: "This is test text written with the sole purpose of testing this new content container."
        },
        "sales": { 
            title: "Sales", 
            content: "This is test text written with the sole purpose of testing this new content container."
        },
        // Add more button details here if needed
    };

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            // Show details panel with content
            const buttonId = button.id.toLowerCase(); // Ensuring consistency with ID case
            if (buttonDetails[buttonId]) {
                detailsTitle.innerText = buttonDetails[buttonId].title;
                detailsContent.innerHTML = buttonDetails[buttonId].content; // Using innerHTML to allow HTML tags
            } else {
                detailsTitle.innerText = button.innerText;
                detailsContent.innerText = button.getAttribute('data-info');
            }

            // Reset z-index and transform of all buttons
            buttons.forEach(btn => {
                btn.style.zIndex = "0";
                btn.style.transform = btn.dataset.initialTransform;
                btn.querySelector('.button-content').style.display = 'none'; // Hide all content containers
            });

            // Move hovered button to center with larger scale
            if (window.innerWidth > 768) { // Desktop behavior
                button.style.zIndex = "1";
                button.style.transform = "translate(-50%, -50%) scale(8)";
                button.querySelector('.button-content').style.display = 'block'; // Show content container
            }
        });

        // Store initial transform for reset purposes
        button.dataset.initialTransform = button.style.transform;

        button.addEventListener('click', () => {
            if (button.style.transform.includes('scale(8)') || button.style.transform.includes('scale(12)')) {
                button.style.transform = button.dataset.initialTransform; // Reset to initial state on second click
                document.body.style.overflow = "hidden"; // Disable scroll on body
                button.querySelector('.button-content').style.display = 'none'; // Hide content container
            } else {
                if (window.innerWidth <= 768) { // For mobile
                    button.style.transform = "translate(-50%, -50%) scale(12)";
                } else {
                    button.style.transform = "translate(-50%, -50%) scale(8)"; // Default for larger screens
                }
                document.body.style.overflow = "hidden"; // Disable scroll on body
                button.querySelector('.button-content').style.display = 'block'; // Show content container
            }
        });

        // Enable one-tap opening on mobile
        if (window.innerWidth <= 768) {
            button.addEventListener('touchstart', (e) => {
                e.preventDefault();
                button.click();
            }, { passive: false });
        }
    });

    // Prevent scrolling on mobile when button is clicked and open
    window.addEventListener('touchmove', (e) => {
        if (document.body.style.overflow === 'hidden') {
            e.preventDefault();
        }
    }, { passive: false });

    // Re-enable scrolling when no buttons are enlarged
    document.addEventListener('click', () => {
        const isAnyButtonEnlarged = [...buttons].some(button => 
            button.style.transform.includes('scale(8)') || button.style.transform.includes('scale(12)')
        );
        if (!isAnyButtonEnlarged) {
            document.body.style.overflow = "";
        }
    });
});
