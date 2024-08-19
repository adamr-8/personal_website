document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    const detailsTitle = document.getElementById('details-title');
    const detailsContent = document.getElementById('details-content');
    const brandingLogo = document.getElementById('branding-logo');
    const detailsPanel = document.getElementById('details-panel');

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
        button.addEventListener('click', () => {
            // Hide branding logo when clicking a button
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

            // Move clicked button to center with larger scale
            button.style.zIndex = "1";
            button.style.transform = "translate(-50%, -50%) scale(2.5)";

            // Ensure details panel is visible
            detailsPanel.classList.add('active');
        });
    });

    // Add a click event to close the details panel when clicking outside
    document.addEventListener('click', (e) => {
        if (!detailsPanel.contains(e.target) && !e.target.classList.contains('button')) {
            detailsPanel.classList.remove('active');
            brandingLogo.style.display = 'flex';
            buttons.forEach(button => {
                button.style.zIndex = "0";
                button.style.transform = button.dataset.initialTransform;
            });
        }
    });
});
