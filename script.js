document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    const detailsTitle = document.getElementById('details-title');
    const detailsContent = document.getElementById('details-content');
    const brandingLogo = document.getElementById('branding-logo');

    // Store details for each button
    const buttonDetails = {
        "ad-buying": {
            title: "Ad Buying",
            content: `Overview:
            With over 15 years of experience in purchasing and managing both digital and traditional advertising, I have consistently delivered high-impact campaigns that drive brand visibility and customer engagement. My proficiency spans across PPC ad campaigns, social media ads, and select traditional media placements.

            Highlight:
            - Managed PPC ad campaigns across platforms like Google Ads and Bing, consistently achieving high ROI and increasing click-through rates by up to 15%.
            - Strategically placed ads in industry-specific publications, contributing to a 20% increase in brand recognition within targeted markets.
            - Continuously optimized ad spend to maximize the effectiveness of campaigns, ensuring alignment with broader marketing strategies.`
        },
        // Add similar details for other buttons if needed
    };

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            // Hide branding logo when hovering over a button
            brandingLogo.style.display = 'none';

            // Show details panel with content
            const buttonId = button.id;
            if (buttonDetails[buttonId]) {
                detailsTitle.innerText = buttonDetails[buttonId].title;
                detailsContent.innerText = buttonDetails[buttonId].content;
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
            button.style.zIndex = "1";
            button.style.transform = "translate(-50%, -50%) scale(2.5)";
        });

        // Store initial transform for reset purposes
        button.dataset.initialTransform = button.style.transform;
    });

    // Optional: Reset the buttons when mouse leaves the circle-container
    const circleContainer = document.querySelector('.circle-container');
    circleContainer.addEventListener('mouseleave', () => {
        buttons.forEach(button => {
            button.style.zIndex = "0";
            button.style.transform = button.dataset.initialTransform;
        });

        // Show branding logo when not hovering over a button
        brandingLogo.style.display = 'flex';
        detailsTitle.innerText = 'Hover over a discipline';
        detailsContent.innerText = 'Details will appear here.';
    });
});
