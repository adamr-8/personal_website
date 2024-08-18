document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    const detailsTitle = document.getElementById('details-title');
    const detailsContent = document.getElementById('details-content');

    // An object to hold the detailed content for each button
    const contentDetails = {
        "Social Media": "Social Media Content: Social media marketing involves creating and sharing content on social media networks to achieve your marketing and branding goals. It includes posting text and image updates, videos, and other content that drives audience engagement.",
        "ABM": "ABM Content: Account-Based Marketing (ABM) is a focused growth strategy in which Marketing and Sales collaborate to create personalized buying experiences for a mutually-identified set of high-value accounts.",
        "Digital Marketing": "Digital Marketing Content: Digital marketing refers to advertising delivered through digital channels such as search engines, websites, social media, email, and mobile apps. It uses digital platforms to promote products or services.",
        "Brand Management": "Brand Management Content: Brand management involves the analysis and planning on how a brand is perceived in the market. It is essential for maintaining and improving the reputation of a brand.",
        "Traditional Marketing": "Traditional Marketing Content: Traditional marketing refers to any type of marketing that isn't online. This means print, broadcast, direct mail, phone, and outdoor advertising like billboards.",
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
        "Event Marketing": "Event Marketing Content: Event marketing is the promotion of a product, brand, or service through in-person interactions. Examples include trade shows, fairs, product launches, and seminars.",
        "Public Relations": "Public Relations Content: Public relations involves managing the spread of information between an individual or an organization and the public. PR efforts aim to build and maintain a positive image.",
        "Market Research": "Market Research Content: Market research is the process of gathering, analyzing, and interpreting information about a market, about a product or service to be offered for sale in that market.",
        "Customer Loyalty": "Customer Loyalty Content: Customer loyalty refers to a customer’s willingness to repeatedly return to a company to conduct some type of business due to the delightful experiences they have with that brand.",
        "Marketing Technology": "Marketing Technology Content: Marketing technology (MarTech) is the use of software and tools to execute, manage, and measure marketing efforts.",
        "Content Marketing": "Content Marketing Content: Content marketing involves creating and sharing valuable free content to attract and convert prospects into customers, and customers into repeat buyers."
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
