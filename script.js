document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    const detailsTitle = document.getElementById('details-title');
    const detailsContent = document.getElementById('details-content');
    const brandingLogo = document.getElementById('branding-logo');

    // Store details for each button
    const buttonDetails = {
        "traditional": { title: "Traditional", content: "Traditional Marketing Content<b>Print, Tradeshows, Events, Mailers, Catalogs, Print Ads, Billboards" },
        "sales": { title: "1", content: "Sales & Business Development Content" },
        "product": { title: "Product", content: "Product Development Content" },
        "brand": { title: "Brand Management", content: "Brand Management Content" },
        "content": { title: "Content", content: "Marketing Automation and CRM. <br> Salesforce, Hubspot, Marketing Cloud." },
        "Startup": { title: "Startup", content: "Start-up and Entrepreneurship" },
        "projects": { title: "Project<br>Management", content: "Project Management Content" },
        "analytics": { title: "Analytics", content: "Analytics" },
        "crm": { title: "CRM", content: "CRM" },
        "cx": { title: "Customer Experience", content: "ABM, Customer experince stuff<br> Reviews feedback, lifetime value, engagement" },
        "ecommerce": { title: "E-commerce", content: "Market Research Content" },
        "digital": { title: "Digital", content: "Digital Marketing including SEO & PPC Content" },
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
