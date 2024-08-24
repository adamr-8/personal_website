document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');

    const buttonDetails = {
        "traditional": { 
            title: "Traditional Marketing", 
            content: `
                <i class="fa-sharp fa-solid fa-bullhorn" style="font-size: 30px; color: #333;"></i>
                <p style="font-size: 1.2em;">With extensive experience in traditional marketing, I've led successful campaigns across print, tradeshows, events, mailers, and catalog creation. My efforts have consistently driven brand recognition and generated significant ROI, especially in B2B markets.</p>
                <ul style="font-size: 1em;">
                    <li>Managed comprehensive tradeshow strategies resulting in a 30% increase in qualified leads.</li>
                    <li>Successfully launched multiple direct mail campaigns with a response rate 20% above industry average.</li>
                </ul>`
        },
        // Additional button details omitted for brevity...
    };

    buttons.forEach(button => {
        // Store initial transform for reset purposes
        button.dataset.initialTransform = button.style.transform;

        button.addEventListener('click', () => {
            const buttonId = button.id.toLowerCase();
            const contentDiv = button.querySelector('.button-content');
            
            console.log(`Button ${buttonId} clicked`);  // Debugging line to confirm click

            if (button.style.transform.includes('scale(8)') || button.style.transform.includes('scale(12)')) {
                button.style.transform = button.dataset.initialTransform; // Reset to initial state on second click
                contentDiv.innerHTML = ""; // Clear content when resetting
                contentDiv.style.display = "none"; // Hide content when button is reset
                document.body.style.overflow = "hidden"; // Disable scroll on body
            } else {
                if (window.innerWidth <= 768) { // For mobile
                    button.style.transform = "translate(-50%, -50%) scale(12)";
                } else {
                    button.style.transform = "translate(-50%, -50%) scale(8)"; // Default for larger screens
                }
                document.body.style.overflow = "hidden"; // Disable scroll on body
            }
        });

        // Enable one-tap opening on mobile
        if (window.innerWidth <= 768) {
            button.addEventListener('touchstart', (e) => {
                e.preventDefault();
                button.click();
            }, { passive: false });
        }

        button.addEventListener('transitionend', () => {
            const buttonId = button.id.toLowerCase();
            const contentDiv = button.querySelector('.button-content');

            if (buttonDetails[buttonId] && contentDiv && (button.style.transform.includes('scale(8)') || button.style.transform.includes('scale(12)'))) {
                contentDiv.innerHTML = buttonDetails[buttonId].content;
                contentDiv.style.display = "block"; // Display content after transformation is complete

                // Adjust the size and overflow to fit within the button
                contentDiv.style.overflow = "hidden"; // Prevent overflowing of content
                contentDiv.style.padding = "10px"; // Add padding for better spacing
                contentDiv.style.boxSizing = "border-box"; // Ensure padding is within the button
                contentDiv.style.maxHeight = "100%";
                contentDiv.style.maxWidth = "100%";
                contentDiv.style.fontSize = "smaller"; // Adjust font size further if needed
            }
        });
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
