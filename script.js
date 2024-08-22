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
        "product": { 
            title: "Product Development", 
            content: `
                <i class="fa-sharp fa-solid fa-box-open" style="font-size: 40px; color: #333;"></i>
                <p>My experience in product development spans from concept to launch, focusing on customer needs and market trends. I've been instrumental in launching successful products that meet market demands.</p>
                <ul>
                    <li>Led the development of the Opti-Rite Dry Erase Wallcoverings, which became a significant revenue driver.</li>
                    <li>Spearheaded product rebranding efforts that resulted in a 20% increase in market penetration.</li>
                </ul>`
        },
        "brand": { 
            title: "Brand Management", 
            content: `
                <i class="fa-sharp fa-solid fa-flag" style="font-size: 40px; color: #333;"></i>
                <p>Brand management has been a core part of my career, where I've worked to build, protect, and enhance brand equity across various markets. I’ve successfully managed brand strategies that have strengthened market position and customer loyalty.</p>
                <ul>
                    <li>Led a comprehensive rebranding effort at OptiMA Inc., resulting in a 50% increase in brand loyalty.</li>
                    <li>Implemented brand consistency across all marketing channels, leading to a 15% improvement in brand recognition.</li>
                </ul>`
        },
        "automation": { 
        title: "Automation & CRM", 
        content: `
            <i class="fas fa-cogs" style="font-size: 40px; color: #333;"></i>
            <p>I have extensive experience with CRM systems, particularly Salesforce, where I've managed customer relationships to drive engagement and retention. My work in this area has led to significant improvements in lead nurturing and customer satisfaction.</p>
            <ul>
                <li>Implemented Salesforce Marketing Cloud, leading to a 25% increase in email open rates.</li>
                <li>Streamlined CRM processes that reduced lead response time by 40%.</li>
            </ul>`
        },
        "analytics": { 
            title: "Analytics & Reporting", 
            content: `
                <i class="fa-sharp fa-solid fa-chart-line" style="font-size: 40px; color: #333;"></i>
                <p>Data-driven decision-making has been at the heart of my marketing strategies. My proficiency in analytics tools has enabled me to optimize campaigns and drive measurable business results.</p>
                <ul>
                    <li>Utilized Google Analytics and Salesforce CRM to derive actionable insights, leading to a 15% increase in conversion rates.</li>
                    <li>Developed and implemented KPIs that improved reporting accuracy and decision-making efficiency.</li>
                </ul>`
        },
        "projects": { 
            title: "Project Management", 
            content: `
                <i class="fa-sharp fa-solid fa-project-diagram" style="font-size: 40px; color: #333;"></i>
                <p>Project management has been a critical skill throughout my career, where I've successfully led cross-functional teams to deliver projects on time and within budget.</p>
                <ul>
                    <li>Managed the end-to-end development of new product lines, from ideation to market launch.</li>
                    <li>Led the migration of e-commerce platforms, ensuring a seamless transition with minimal downtime.</li>
                </ul>`
        },
        "startup": { 
            title: "Startup Experience", 
            content: `
                <i class="fa-sharp fa-solid fa-rocket" style="font-size: 40px; color: #333;"></i>
                <p>As a co-founder of Goat Trading LLC, I navigated the challenges of building a startup from the ground up. My entrepreneurial journey has been marked by the successful launch of a niche e-commerce platform.</p>
                <ul>
                    <li>Grew the company from concept to a profitable business within two years.</li>
                    <li>Implemented a successful digital marketing strategy that drove a 30% increase in sales.</li>
                </ul>`
        },
        "content": { 
            title: "Content Creation", 
            content: `
                <i class="fa-sharp fa-solid fa-pencil-alt" style="font-size: 40px; color: #333;"></i>
                <p>Content creation has been central to my marketing strategies, with a focus on creating high-quality, engaging content that resonates with target audiences.</p>
                <ul>
                    <li>Created a series of high-impact blog posts and white papers that increased website traffic by 22%.</li>
                    <li>Developed instructional videos that enhanced customer understanding and led to a 10% reduction in support inquiries.</li>
                </ul>`
        },
        "digital": { 
            title: "Digital Marketing", 
            content: `
                <i class="fa-sharp fa-solid fa-desktop" style="font-size: 40px; color: #333;"></i>
                <p>In the digital marketing space, I've led successful SEO and PPC campaigns that have driven significant traffic and conversions.</p>
                <ul>
                    <li>Increased organic traffic by 25% through targeted SEO strategies.</li>
                    <li>Managed PPC campaigns with a focus on ROI, achieving up to 15% click-through rates.</li>
                </ul>`
        },
        "cx": { 
            title: "Customer Experience", 
            content: `
                <i class="fa-sharp fa-solid fa-smile" style="font-size: 40px; color: #333;"></i>
                <p>Customer experience has been a major focus of my work, where I’ve implemented strategies to enhance engagement and retention. My efforts in this area have led to substantial improvements in customer satisfaction and loyalty.</p>
                <ul>
                    <li>Led initiatives to reduce whiteboard shipping damage, improving customer satisfaction by 30%.</li>
                    <li>Developed loyalty programs that increased repeat purchases by 20%.</li>
                </ul>`
        },
        "ecommerce": { 
            title: "E-commerce", 
            content: `
                <i class="fa-sharp fa-solid fa-shopping-cart" style="font-size: 40px; color: #333;"></i>
                <p>My e-commerce expertise spans from website optimization to managing multi-channel online stores. I’ve consistently driven growth in this area through strategic marketing and operational efficiencies.</p>
                <ul>
                    <li>Managed the flagship e-commerce site, optimizing SEO and UX to increase sales by 50%.</li>
                    <li>Implemented automated order processing systems, reducing shipping times by 40%.</li>
                </ul>`
        },
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
            button.style.zIndex = "1";
            button.style.transform = "translate(-50%, -50%) scale(3)"; // Increase scale for larger effect
        });

        // Store initial transform for reset purposes
        button.dataset.initialTransform = button.style.transform;
    });
});
