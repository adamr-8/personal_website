document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    const detailsTitle = document.getElementById('details-title');
    const detailsContent = document.getElementById('details-content');

    // Store details for each button
    const buttonDetails = {
        "traditional": { 
            title: "Traditional Marketing", 
            content: `
                <i class="fa-sharp fa-solid fa-bullhorn" style="font-size: 40px; color: #333;"></i>
                <p>With extensive experience in traditional marketing, I've led successful campaigns across print, tradeshows, events, mailers, and catalog creation. My efforts have consistently driven brand recognition and generated significant ROI, especially in B2B markets.</p>
                <ul>
                    <li>Managed comprehensive tradeshow strategies resulting in a 30% increase in qualified leads.</li>
                    <li>Successfully launched multiple direct mail campaigns with a response rate 20% above industry average.</li>
                </ul>`
        },
        "sales": { 
            title: "Sales", 
            content: `
                <i class="fa-sharp fa-solid fa-handshake" style="font-size: 40px; color: #333;"></i>
                <p>I have a proven track record in driving sales and business development strategies that deliver strong revenue growth. From creating effective sales pitches to negotiating with key stakeholders, I've consistently exceeded sales targets.</p>
                <ul>
                    <li>Developed sales strategies that contributed to a 38% revenue growth year-over-year at OptiMA Inc.</li>
                    <li>Led the expansion of new business channels, increasing overall market share by 25%.</li>
                </ul>`
        },
        // Additional button details go here...
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
            });

            // Move hovered button to center with larger scale
            if (window.innerWidth > 768) { // Desktop behavior
                button.style.zIndex = "1";
                button.style.transform = "translate(-50%, -50%) scale(8)";
            }
        });

        // Store initial transform for reset purposes
        button.dataset.initialTransform = button.style.transform;

        button.addEventListener('click', () => {
            const buttonId = button.id.toLowerCase();
            const contentDiv = button.querySelector('.button-content');

            if (button.style.transform.includes('scale(8)') || button.style.transform.includes('scale(12)')) {
                button.style.transform = button.dataset.initialTransform; // Reset to initial state on second click
                if (contentDiv) {
                    contentDiv.innerHTML = ""; // Clear content when closing
                    contentDiv.style.display = "none"; // Hide content
                }
                document.body.style.overflow = "hidden"; // Disable scroll on body
            } else {
                if (buttonDetails[buttonId]) {
                    if (contentDiv) {
                        contentDiv.innerHTML = buttonDetails[buttonId].content; // Populate with content
                        contentDiv.style.display = "block"; // Show content
                    }
                }
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
