document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    const detailsTitle = document.getElementById('details-title');
    const detailsContent = document.getElementById('details-content');
    const brandingLogo = document.getElementById('branding-logo');
    const detailsPanel = document.getElementById('details-panel');

    let activeButton = null;

    function resetActiveButton() {
        if (activeButton) {
            activeButton.style.transform = activeButton.dataset.initialTransform;
            activeButton.style.zIndex = "0";
            activeButton = null;
        }
    }

    function setActiveButton(button) {
        resetActiveButton();
        brandingLogo.style.display = 'none';
        detailsPanel.classList.add('active');
        button.style.zIndex = "1";
        button.style.transform = "translate(-50%, -50%) scale(2.5)";
        activeButton = button;
    }

    buttons.forEach(button => {
        const buttonId = button.id;

        // Handle hover effect on desktop
        button.addEventListener('mouseenter', () => {
            if (window.innerWidth > 768) {
                setActiveButton(button);
                updateDetails(buttonId);
            }
        });

        // Handle tap effect on mobile
        button.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                if (activeButton === button) {
                    resetActiveButton();
                    brandingLogo.style.display = 'flex';
                    detailsPanel.classList.remove('active');
                } else {
                    setActiveButton(button);
                    updateDetails(buttonId);
                }
            }
        });
    });

    // Reset transformations when mouse leaves the circle container on desktop
    const circleContainer = document.querySelector('.circle-container');
    circleContainer.addEventListener('mouseleave', () => {
        if (window.innerWidth > 768) {
            resetActiveButton();
            brandingLogo.style.display = 'flex';
            detailsPanel.classList.remove('active');
            detailsTitle.innerText = 'Hover over a discipline';
            detailsContent.innerText = 'Details will appear here.';
        }
    });

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

    // Close the details panel when clicking outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && activeButton && !circleContainer.contains(e.target) && !detailsPanel.contains(e.target)) {
            resetActiveButton();
            brandingLogo.style.display = 'flex';
            detailsPanel.classList.remove('active');
        }
    });
});
