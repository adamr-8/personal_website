document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    const detailsTitle = document.getElementById('details-title');
    const detailsContent = document.getElementById('details-content');
    const brandingLogo = document.getElementById('branding-logo');
    const detailsPanel = document.getElementById('details-panel');
    let activeButton = null;

    function updateDetails(buttonId) {
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

        if (buttonDetails[buttonId]) {
            detailsTitle.innerText = buttonDetails[buttonId].title;
            detailsContent.innerText = buttonDetails[buttonId].content;
        }
    }

    buttons.forEach(button => {
        const buttonId = button.id;

        button.addEventListener('mouseover', () => {
            if (window.innerWidth > 768) {
                // Desktop hover effect
                brandingLogo.style.display = 'none';
                updateDetails(buttonId);

                buttons.forEach(btn => {
                    btn.style.zIndex = "0";
                    btn.style.transform = btn.dataset.initialTransform;
                });

                button.style.zIndex = "1";
                button.style.transform = "translate(-50%, -50%) scale(2.5)";
            }
        });

        button.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                // Mobile tap effect
                if (activeButton === button) {
                    // Collapse if the same button is tapped
                    detailsPanel.style.display = 'none';
                    activeButton = null;
                } else {
                    // Expand and show details
                    brandingLogo.style.display = 'none';
                    updateDetails(buttonId);
                    detailsPanel.style.display = 'block';

                    activeButton = button;
                }
            }
        });
    });

    // Reset button transformations and details panel when not hovering (for desktop)
    const circleContainer = document.querySelector('.circle-container');
    circleContainer.addEventListener('mouseleave', () => {
        if (window.innerWidth > 768) {
            buttons.forEach(button => {
                button.style.zIndex = "0";
                button.style.transform = button.dataset.initialTransform;
            });

            brandingLogo.style.display = 'flex';
            detailsTitle.innerText = 'Hover over a discipline';
            detailsContent.innerText = 'Details will appear here.';
        }
    });
});
