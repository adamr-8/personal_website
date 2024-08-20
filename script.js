document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    const detailsTitle = document.getElementById('details-title');
    const detailsContent = document.getElementById('details-content');
    const brandingLogo = document.getElementById('branding-logo');

    // Store details for each button
    const buttonDetails = {
        "traditional": { 
            title: "Traditional", 
            content: `With extensive experience in traditional marketing, I've led successful campaigns across print, tradeshows, events, mailers, and catalog creation. My efforts have consistently driven brand recognition and generated significant ROI, especially in B2B markets. Key highlights include:
            <ul>
                <li>Managed comprehensive tradeshow strategies resulting in a 30% increase in qualified leads.</li>
                <li>Successfully launched multiple direct mail campaigns with a response rate 20% above industry average.</li>
            </ul>`
        },
        "sales": { 
            title: "Sales", 
            content: `I have a proven track record in driving sales and business development strategies that deliver strong revenue growth. From creating effective sales pitches to negotiating with key stakeholders, I've consistently exceeded sales targets. Key accomplishments include:
            <ul>
                <li>Developed sales strategies that contributed to a 38% revenue growth year-over-year at OptiMA Inc.</li>
                <li>Led the expansion of new business channels, increasing overall market share by 25%.</li>
            </ul>`
        },
        "product": { 
            title: "Product", 
            content: `My experience in product development spans from concept to launch, focusing on customer needs and market trends. I've been instrumental in launching successful products that meet market demands. Key achievements include:
            <ul>
                <li>Led the development of the Opti-Rite Dry Erase Wallcoverings, which became a significant revenue driver.</li>
                <li>Spearheaded product rebranding efforts that resulted in a 20% increase in market penetration.</li>
            </ul>`
        },
        "brand": { 
            title: "Brand", 
            content: `Brand management has been a core part of my career, where I've worked to build, protect, and enhance brand equity across various markets. I’ve successfully managed brand strategies that have strengthened market position and customer loyalty. Key highlights include:
            <ul>
                <li>Led a comprehensive rebranding effort at OptiMA Inc., resulting in a 50% increase in brand loyalty.</li>
                <li>Implemented brand consistency across all marketing channels, leading to a 15% improvement in brand recognition.</li>
            </ul>`
        },
        "content": { 
            title: "Content", 
            content: `Content creation has been central to my marketing strategies, with a focus on creating high-quality, engaging content that resonates with target audiences. My content efforts have significantly contributed to SEO performance and customer engagement. Key examples include:
            <ul>
                <li>Created a series of high-impact blog posts and white papers that increased website traffic by 22%.</li>
                <li>Developed instructional videos that enhanced customer understanding and led to a 10% reduction in support inquiries.</li>
            </ul>`
        },
        "startup": { 
            title: "Startup", 
            content: `As a co-founder of Goat Trading LLC, I navigated the challenges of building a startup from the ground up. My entrepreneurial journey has been marked by the successful launch of a niche e-commerce platform. Key successes include:
            <ul>
                <li>Grew the company from concept to a profitable business within two years.</li>
                <li>Implemented a successful digital marketing strategy that drove a 30% increase in sales.</li>
            </ul>`
        },
        "projects": { 
            title: "Projects", 
            content: `Project management has been a critical skill throughout my career, where I've successfully led cross-functional teams to deliver projects on time and within budget. My experience includes:
            <ul>
                <li>Managed the end-to-end development of new product lines, from ideation to market launch.</li>
                <li>Led the migration of e-commerce platforms, ensuring a seamless transition with minimal downtime.</li>
            </ul>`
        },
        "analytics": { 
            title: "Analytics", 
            content: `Data-driven decision-making has been at the heart of my marketing strategies. My proficiency in analytics tools has enabled me to optimize campaigns and drive measurable business results. Key achievements include:
            <ul>
                <li>Utilized Google Analytics and Salesforce CRM to derive actionable insights, leading to a 15% increase in conversion rates.</li>
                <li>Developed and implemented KPIs that improved reporting accuracy and decision-making efficiency.</li>
            </ul>`
        },
        "automation": { 
            title: "Automation & CRM", 
            content: `I have extensive experience with CRM systems, particularly Salesforce, where I've managed customer relationships to drive engagement and retention. My work in this area has led to significant improvements in lead nurturing and customer satisfaction. Key contributions include:
            <ul>
                <li>Implemented Salesforce Marketing Cloud, leading to a 25% increase in email open rates.</li>
                <li>Streamlined CRM processes that reduced lead response time by 40%.</li>
            </ul>`
        },
        "cx": { 
            title: "Customer Experience", 
            content: `Customer experience has been a major focus of my work, where I’ve implemented strategies to enhance engagement and retention. My efforts in this area have led to substantial improvements in customer satisfaction and loyalty. Key examples include:
            <ul>
                <li>Led initiatives to reduce whiteboard shipping damage, improving customer satisfaction by 30%.</li>
                <li>Developed loyalty programs that increased repeat purchases by 20%.</li>
            </ul>`
        },
        "ecommerce": { 
            title: "E-commerce", 
            content: `My e-commerce expertise spans from website optimization to managing multi-channel online stores. I’ve consistently driven growth in this area through strategic marketing and operational efficiencies. Key successes include:
            <ul>
                <li>Managed the flagship e-commerce site, optimizing SEO and UX to increase sales by 50%.</li>
                <li>Implemented automated order processing systems, reducing shipping times by 40%.</li>
            </ul>`
        },
        "digital": { 
            title: "Digital", 
            content: `In the digital marketing space, I've led successful SEO and PPC campaigns that have driven significant traffic and conversions. My work in this area includes:
            <ul>
                <li>Increased organic traffic by 25% through targeted SEO strategies.</li>
                <li>Managed PPC campaigns with a focus on ROI, achieving up to 15% click-through rates.</li>
            </ul>`
        },
    };

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            // Hide branding logo when hovering over a button
            brandingLogo.style.display = 'none';

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
