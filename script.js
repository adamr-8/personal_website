document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    const detailsTitle = document.getElementById('details-title');
    const detailsContent = document.getElementById('details-content');

    // Only adding the content for "Ad Buying"
    const contentDetails = {
        "Ad Buying": `
            <h3>Ad Buying</h3>
            <strong>Overview:</strong>
            <p>With over 15 years of experience in purchasing and managing both digital and traditional advertising, I have consistently delivered high-impact campaigns that drive brand visibility and customer engagement. My proficiency spans across PPC ad campaigns, social media ads, and select traditional media placements.</p>
            <strong>Highlight:</strong>
            <ul>
                <li>Managed PPC ad campaigns across platforms like Google Ads and Bing, consistently achieving high ROI and increasing click-through rates by up to 15%.</li>
                <li>Strategically placed ads in industry-specific publications, contributing to a 20% increase in brand recognition within targeted markets.</li>
                <li>Continuously optimized ad spend to maximize the effectiveness of campaigns, ensuring alignment with broader marketing strategies.</li>
            </ul>
        `,
    };

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            // Reset z-index of all buttons and move them back to original position
            buttons.forEach(btn => {
                btn.style.zIndex = "0"; 
                btn.style.transform = btn.dataset.initialTransform; 
            });

            // Move hovered button to center with a larger scale
            button.style.zIndex = "1"; 
            button.style.transform = "translate(-50%, -50%) scale(2)"; 

            // Update details panel with content from the hovered button
            const buttonText = button.innerText;
            detailsTitle.innerText = buttonText;
            detailsContent.innerHTML = contentDetails[buttonText] || "Details will appear here.";
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
        detailsTitle.innerText = "Hover over a discipline";
        detailsContent.innerText = "Details will appear here.";
    });
});
