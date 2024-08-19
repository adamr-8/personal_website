document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    const detailsTitle = document.getElementById('details-title');
    const detailsContent = document.getElementById('details-content');
    const brandingLogo = document.getElementById('branding-logo');
    const detailsPanel = document.getElementById('details-panel');

    let activeButton = null;

    buttons.forEach(button => {
        const buttonId = button.id;

        // Handle hover effect on desktop
        button.addEventListener('mouseenter', () => {
            if (window.innerWidth > 768) {
                if (activeButton !== button) {
                    // Reset any previous active button
                    resetActiveButton();

                    // Center the hovered button
                    brandingLogo.style.display = 'none';
                    detailsPanel.classList.add('active');

                    button.style.zIndex = "1";
                    button.style.transform = "translate(-50%, -50%) scale(2.5)";
                    updateDetails(buttonId);

                    activeButton = button;
                }
            }
        });

        // Handle tap effect on mobile
        button.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                if (activeButton !== button) {
                    // Reset any previous active button
                    resetActiveButton();

                    // Center the clicked button and show details
                    brandingLogo.style.display = 'none';
                    detailsPanel.style.display = 'block';

                    button.style.zIndex = "1";
                    button.style.transform = "translate(-50%, -50%) scale(2.5)";
                    updateDetails(buttonId);

                    activeButton = button;
                } else {
                    // If the same button is clicked, close the panel
                    resetActiveButton();
                }
            }
        });
    });

    // Reset transformations when mouse leaves the circle container on desktop
    const circleContainer = document.querySelector('.circle-container');
    circleContainer.addEventListener('mouseleave', () => {
        if (window.innerWidth > 768) {
            resetActiveButton();
        }
    });

    function resetActiveButton() {
        if (activeButton) {
            activeButton.style.transform = activeButton.dataset.initialTransform;
            activeButton.style.zIndex = "0";
            brandingLogo.style.display = 'flex';
            detailsPanel.classList.remove('active');
            detailsPanel.style.display = 'none';
            detailsTitle.innerText = 'Hover over a discipline';
            detailsContent.innerText = 'Details will appear here.';
            activeButton = null;
        }
    }

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
        } else {
            detailsTitle.innerText = 'Hover over a discipline';
            detailsContent.innerText = 'Details will appear here.';
        }
    }

    // Close the details panel when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && activeButton && !circleContainer.contains(e.target) && !detailsPanel.contains(e.target)) {
            resetActiveButton();
        }
    });
});